import { dehydrate, QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import mostFollowedProfiles from "../../graphql/query/mostFollowedProfiles";
import styles from "../../styles/Home.module.css";
import { MediaRenderer, useAddress, useContract, useSDK, useSigner, Web3Button } from "@thirdweb-dev/react";
import { Box, Image, Container, Flex, Input, Select, Spacer, Text, VStack, Button } from "@chakra-ui/react";
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

export default function ExplorePartners() {

  //   const { data, isLoading } = useQuery(
  //   ["mostFollowedProfiles"],
  //   mostFollowedProfiles
  // );
  // const router = useRouter();
  // const { handle } = router.query;

  // const sdk = useSDK();
  // const signer = useSigner();

  // const queryClient = useQueryClient();

  // const address = useAddress();

  const { isSignedIn } = useLensUser();

  // const { data: profile, isLoading: loadingProfile } = useQuery(
  //   ["profile"],
  //   () => getProfile(handle as string)
  // );

  // const { data: publications, isLoading: loadingPublications } = useQuery(
  //   ["publications"],
  //   () => getPublications(profile?.id as string, 10),
  //   {
  //     enabled: !!profile,
  //   }
  // );

  // const { data: doesFollow } = useQuery(
  //   ["follows", address, profile?.id],
  //   () => doesFollowUser(address as string, profile?.id as string),
  //   {
  //     enabled: !!profile && !!address,
  //   }
  // );

  // const { contract: lensHubContract } = useContract(
  //   LENS_HUB_CONTRACT_ADDRESS,
  //   LENS_PROTOCOL_PROFILES_ABI
  // );

  // const { mutateAsync: follow } = useMutation(() => followThisUser(), {
  //   onSuccess: () => {
  //     queryClient.setQueryData(["follows", address, profile?.id], true);
  //   },
  // });

  // async function followThisUser() {
  //   if (!isSignedIn) {
  //     if (address && sdk) await login(address, sdk);
  //   }

  //   if (!profile || !signer) return;

  //   const result = await followUser(profile.id);
  //   const typedData = result.typedData;

  //   const signature = await signedTypeData(
  //     signer,
  //     typedData.domain,
  //     typedData.types,
  //     typedData.value
  //   );

  //   const { v, r, s } = splitSignature(signature);

  //   try {
  //     const tx = await lensHubContract?.call("followWithSig", {
  //       follower: address!,
  //       profileIds: typedData.value.profileIds,
  //       datas: typedData.value.datas,
  //       sig: {
  //         v,
  //         r,
  //         s,
  //         deadline: typedData.value.deadline,
  //       },
  //     });

  //     console.log("Followed user", tx);

  //     return tx;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  



  return isSignedIn ? (
    
    <>
      <Container maxW={'6xl'}>
        <Flex marginBottom={'2rem'}>
        <Select placeholder='All' zIndex={-1} width={'18rem'} style={{border: '0.08rem solid black'}}>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Spacer />
        <Input placeholder='Search' width={'18rem'} style={{border: '0.08rem solid black'}}/>
        </Flex>
        <Box className={styles.profileGrid} maxHeight={'45rem'}>
        <Box 
                position={'relative'}
                width={'15rem'}
                borderRadius={'1rem'}
                backgroundColor={'white'}
                overflow={'hidden'}
                height={'19rem'}
                bgGradient={[
                  'linear(to-b, red.50, purple.100, purple.100, purple.50)',
                ]}
                zIndex={-1}
                padding={'0.6rem'}
                >
              <VStack marginTop={'1.2rem'}>
                <Image
                src='/static/polygon.png'
                style={{
                  borderRadius: "50%",
                  width: "114px",
                  height: "114px",
                  objectFit: "cover",
                  marginBottom: '0.5rem'
                }}     />        
                <Text className='mt-1' fontSize={'xl'} as='b'>Polygon</Text>
                <Text className='text-2sm'>@polygon</Text>
                <Button backgroundColor={'#f213a4'}> Follow </Button>
                </VStack>
            </Box>
            <Box 
                position={'relative'}
                width={'15rem'}
                borderRadius={'1rem'}
                backgroundColor={'white'}
                overflow={'hidden'}
                marginLeft={'1rem'}
                height={'19rem'}
                bgGradient={[
                  'linear(to-b, red.50, purple.100, purple.100, purple.50)',
                ]}
                zIndex={-1}
                padding={'0.6rem'}
                >
              <VStack marginTop={'1.2rem'}>
                <Image
                src='/static/lens.png'
                style={{
                  borderRadius: "50%",
                  width: "114px",
                  height: "114px",
                  objectFit: "cover",
                  marginBottom: '0.5rem'
                }}     />        
                <Text className='mt-1' fontSize={'xl'} as='b'>Lens Protocol</Text>
                <Text className='text-2sm'>@thegraph</Text>
                <Button backgroundColor={'#f213a4'}> Follow </Button>
                </VStack>
            </Box>
            <Box 
                position={'relative'}
                width={'15rem'}
                borderRadius={'1rem'}
                backgroundColor={'white'}
                overflow={'hidden'}
                height={'19rem'}
                bgGradient={[
                  'linear(to-b, red.50, purple.100, purple.100, purple.50)',
                ]}
                zIndex={-1}
                marginLeft={'1rem'}
                padding={'0.6rem'}
                >
              <VStack marginTop={'1.2rem'}>
                <Image
                src='/static/optimism.png'
                style={{
                  borderRadius: "50%",
                  width: "114px",
                  height: "114px",
                  objectFit: "cover",
                  marginBottom: '0.5rem'
                }}     />        
                <Text className='mt-1' fontSize={'xl'} as='b'>Optimism</Text>
                <Text className='text-2sm'>@optimism</Text>
                <Button backgroundColor={'#f213a4'}> Follow </Button>
                </VStack>
            </Box>
            <Box 
                position={'relative'}
                width={'15rem'}
                borderRadius={'1rem'}
                backgroundColor={'white'}
                overflow={'hidden'}
                height={'19rem'}
                bgGradient={[
                  'linear(to-b, red.50, purple.100, purple.100, purple.50)',
                ]}
                zIndex={-1}
                padding={'0.6rem'}
                marginLeft={'1rem'}
                >              
                <VStack marginTop={'1.2rem'}>
                <Image
                src='/static/4.png'
                style={{
                  borderRadius: "50%",
                  width: "114px",
                  height: "114px",
                  objectFit: "cover",
                  marginBottom: '0.5rem'
                }}     />        
                <Text className='mt-1' fontSize={'xl'} as='b'>Push Protocol</Text>
                <Text className='text-2sm'>@push</Text>
                <Button backgroundColor={'#f213a4'}> Follow </Button>
                </VStack>
            </Box>

        
        </Box>
      </Container>
    </>
  ) : (
    <Auth />
  )
  ;
}
