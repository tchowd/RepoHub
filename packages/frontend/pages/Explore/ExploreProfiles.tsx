import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import mostFollowedProfiles from "../../graphql/query/mostFollowedProfiles";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { MediaRenderer, useAddress, useContract, useSDK, useSigner, Web3Button } from "@thirdweb-dev/react";
import { Box, Center, Container, Flex, Input, Select, Spacer, Text, VStack } from "@chakra-ui/react";
import { signedTypeData, splitSignature } from "../../util/ethers.service";
import { LENS_PROTOCOL_PROFILES_ABI } from "@/const/abis";
import { LENS_HUB_CONTRACT_ADDRESS } from "@/graphql/initClient";
import { followUser } from "@/graphql/mutate/followUser";
import doesFollowUser from "@/graphql/query/doesFollowUser";
import getProfile from "@/graphql/query/getProfile";
import getPublications from "@/graphql/query/getPublications";
import login from "@/util/login";
import useLensUser from "@/util/useLensUser";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Auth from "../auth";

export default function ExploreProfiles() {

    const { data, isLoading } = useQuery(
    ["mostFollowedProfiles"],
    mostFollowedProfiles
  );
  const router = useRouter();
  const { handle } = router.query;

  const sdk = useSDK();
  const signer = useSigner();

  const queryClient = useQueryClient();

  const address = useAddress();

  const { isSignedIn } = useLensUser();

  const { data: profile, isLoading: loadingProfile } = useQuery(
    ["profile"],
    () => getProfile(handle as string)
  );

  const { data: publications, isLoading: loadingPublications } = useQuery(
    ["publications"],
    () => getPublications(profile?.id as string, 10),
    {
      enabled: !!profile,
    }
  );

  const { data: doesFollow } = useQuery(
    ["follows", address, profile?.id],
    () => doesFollowUser(address as string, profile?.id as string),
    {
      enabled: !!profile && !!address,
    }
  );

  const { contract: lensHubContract } = useContract(
    LENS_HUB_CONTRACT_ADDRESS,
    LENS_PROTOCOL_PROFILES_ABI
  );

  const { mutateAsync: follow } = useMutation(() => followThisUser(), {
    onSuccess: () => {
      queryClient.setQueryData(["follows", address, profile?.id], true);
    },
  });

  async function followThisUser() {
    if (!isSignedIn) {
      if (address && sdk) await login(address, sdk);
    }

    if (!profile || !signer) return;

    const result = await followUser(profile.id);
    const typedData = result.typedData;

    const signature = await signedTypeData(
      signer,
      typedData.domain,
      typedData.types,
      typedData.value
    );

    const { v, r, s } = splitSignature(signature);

    try {
      const tx = await lensHubContract?.call("followWithSig", {
        follower: address!,
        profileIds: typedData.value.profileIds,
        datas: typedData.value.datas,
        sig: {
          v,
          r,
          s,
          deadline: typedData.value.deadline,
        },
      });

      console.log("Followed user", tx);

      return tx;
    } catch (error) {
      console.error(error);
    }
  }



  return isSignedIn ? (
    
    <>
      <Container maxW={'7xl'}>
      <Flex marginBottom={'2rem'}>
        <Select placeholder='All' zIndex={-1} width={'18rem'} style={{border: '0.08rem solid black'}} marginLeft={'2.8rem'}>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Spacer />
        <Input placeholder='Search' width={'18rem'} style={{border: '0.08rem solid black'}} marginRight={'2.8rem'}/>
        </Flex>
        <Box className={styles.profileGrid} maxHeight={'45rem'}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((profile) => (

              <Box
              bgGradient={[
                'linear(to-b, red.50, purple.100, purple.100, purple.50)',
              ]}
              style={{borderRadius: '10px', backgroundColor: 'white', padding: '26px', margin: '15px'}}
              key={profile.id}
              _hover={{borderRadius: '200rem'}}>
              <a
                href={`/profile/${profile.handle}`}
                key={profile.id}
              >
                <VStack>
                <MediaRenderer
                  src={profile?.picture?.original?.url || ""}
                  style={{
                    borderRadius: "50%",
                    width: "114px",
                    height: "114px",
                    objectFit: "cover",
                    marginBottom: '0.5rem'
                  }}
                />        
                <Text className='mt-1' fontSize={'xl'} as='b'>{profile.name}</Text>
                <Text className='text-2sm'>@{profile.handle}</Text>
                </VStack>
                </a>
                {doesFollow ? (
                    <b className={styles.following}>Following</b>
                  ) : (
                    <Web3Button
                      contractAddress={LENS_HUB_CONTRACT_ADDRESS}
                      contractAbi={LENS_PROTOCOL_PROFILES_ABI}
                      colorMode="dark"
                      accentColor="#f213a4"
                      action={() => follow()}
                      className={'mt-4'}
                    >
                      Follow
                    </Web3Button>
                  )}
              </Box>
            ))
          )}

        
        </Box>
      </Container>
    </>
  ) : (
    <Auth />
  )
  ;
}

