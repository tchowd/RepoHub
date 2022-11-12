import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  MediaRenderer,
  useAddress,
  useContract,
  useSDK,
  useSigner,
  Web3Button,
} from "@thirdweb-dev/react";
import getProfile from "../../graphql/query/getProfile";
import getPublications from "../../graphql/query/getPublications";
import PublicationCard from "../components/Publication/PublicationCard";
import Publication from "../../types/Publication";
import useLensUser from "../../util/useLensUser";
import login from "../../util/login";
import { followUser } from "../../graphql/mutate/followUser";
import { LENS_HUB_CONTRACT_ADDRESS } from "../../graphql/initClient";
import { LENS_PROTOCOL_PROFILES_ABI } from "../../const/abis";
import { signedTypeData, splitSignature } from "../../util/ethers.service";
import styles from "../../styles/Profile.module.css";
import doesFollowUser from "../../graphql/query/doesFollowUser";
import {Box, Center, Container, Image, Text, VStack } from '@chakra-ui/react'
import Sidebar from "../components/Sidebar";
import { useAccount } from "wagmi";
import Auth from "../Auth";



function ProfilePage() {
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

  if (loadingProfile) {
    return <p>Loading...</p>;
  }

  if (!profile) {
    return <p>Profile not found</p>;
  }

  return (
    <div >
      <Box
        position={'relative'}
        height={'12rem'}
        backgroundColor={'purple.100'}
        overflow={'hidden'}
        zIndex={-1}
        marginLeft={'-1rem'}
        marginRight={'-1rem'}
        />
            <Center>
                <MediaRenderer
                    style={{
                      borderRadius: "50%",
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                      marginBottom: '-4rem',
                      overflow:'none',
                      zIndex: '1',
                      // border:'4px solid white',
                      marginTop: '-10rem',
                      marginRight: '2rem',
                      border: '0.5rem solid white'
                    }}
                    src={profile.picture.original.url || ""}
                    alt='Dan Abramov'
                    /> 

                    <VStack>
                      <Text marginTop={'2rem'} marginRight={'28rem'} fontSize='5xl' as='b'> 
                        {profile?.name}
                      </Text>
                      <Text marginTop={'2rem'} marginRight={'28rem'} fontSize='5sm' > 
                        @{profile?.handle}
                      </Text>
                      {/* <Text  marginLeft={'0rem'}> 
                        {profile.bio}
                      </Text> */}
                    </VStack>
          </Center>

        {doesFollow ? (
          <b className={styles.following}>Following</b>
        ) : (
          <Web3Button
            contractAddress={LENS_HUB_CONTRACT_ADDRESS}
            contractAbi={LENS_PROTOCOL_PROFILES_ABI}
            colorMode="dark"
            accentColor="#f213a4"
            action={() => follow()}
            className={styles.followButton}
          >
            Follow
          </Web3Button>
        )}
      
      {loadingPublications ? (
        <p>Loading publications...</p>
      ) : (
        <div>
          {publications?.map((publication: Publication) => (
            <PublicationCard publication={publication} key={publication.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Load data for the profile page on the server-side
  const { handle } = context.params!;
  const queryClient = new QueryClient();

  // "Pre-fetch" the data for the profile page. Meaning when
  // we use the useQuery it is already available in the cache
  await queryClient.prefetchQuery(["profile"], () =>
    getProfile(handle as string)
  );

  // Learn more here: https://tanstack.com/query/v4/docs/guides/ssr#using-hydration
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Returning an empty array here means we
    // don't statically generate any paths at build time, which
    // is probably not the most optimal thing we could do.
    // You could change this behaviour to pre-render any profiles you want
    paths: [],
    fallback: "blocking",
  };
};



const Profile: NextPage = () => {

  const { isSignedIn } = useLensUser();

  return isSignedIn ? (
    <>
    
        <Sidebar />
        <Box ml={{ base: 10, md: 60 }}>
          <VStack>
            <ProfilePage />

          </VStack>
        </Box>
    </>
  ) : (
    <Auth />
  )
}

export default Profile