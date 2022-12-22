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
import {Box, Button, Center, Container, Divider, Flex, HStack, Image, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import Sidebar from "../components/Sidebar";
import { useAccount } from "wagmi";
import Auth from "../auth";
import { useState, useEffect } from 'react';
import ExploreProfiles from "../explore/ExploreProfiles";
import PastProjects from "./PastProjects";



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
    <div>
      <HStack marginLeft={'10rem'} >
        <VStack position={'relative'}>
        <Container maxW={'6xl'} >
      <Box
        style={{
          width: '55rem',
          position: 'relative',
          height: '22rem',
          backgroundColor: 'white',
          overflow: '-1',
          // border:'0.4rem solid',
          // zIndex: '-1',
          borderRadius: '1rem'
          
        }}
        bgGradient={[
          'linear(to-b, red.50, purple.50, purple.50, purple.50)',
        ]}

        > 
           <Box
                position={'relative'}
                height={'10rem'}
                backgroundColor={'red.100'}
                overflow={'hidden'}
                zIndex={1}
                borderRadius={'0.5rem'}
                
                />
                <div style={{ marginTop: '-6rem'}}>
                    <VStack >
                      <Flex >
                      <MediaRenderer
                          style={{
                            borderRadius: "50%",
                            width: "180px",
                            height: "180px",
                            // marginTop: '-5rem',
                            // marginLeft:'rem',
                            marginBottom: '-4rem',
                            overflow:'none',
                            zIndex: '1',
                            border: '0.4rem solid white'
                          }}
                          src={profile.picture.original.url || ""}
                          alt='Dan Abramov'
                          /> 
                      <Spacer/>
                      <HStack 
                            marginLeft={'17rem'}
                            marginTop={'0.3rem'}
                            marginRight={''}
                            zIndex={1}>
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
                        <Button 
                            colorScheme='blue' 
                            zIndex={1}
                            height={'3rem'}
                            width={'11rem'}>
                        Send Message
                      </Button>
                      </HStack>
                      </Flex>
                    </VStack>
                    <Box marginLeft={'15rem'}>
                      <HStack  marginTop={'1rem'}>
                        <Text  fontSize='3xl' as='b' color={'black'} zIndex={1} > 
                            {profile?.name} |  
                        </Text>
                        <Text fontSize='xl' marginTop={'-10rem'} color={'black'} zIndex={1} margin={'1rem'}> 
                            @{profile?.handle}     
                        </Text>
                      </HStack>
                        <Text fontSize='md' color={'black'} zIndex={1}> 
                            Developer. Software Engineer.    
                        </Text>
                        <HStack marginTop={'0.5rem'}>
                          <Button backgroundColor={'blue.200'} height={'2rem'} color={'black.200'}>
                              UX Research
                          </Button>
                          <Button backgroundColor={'blue.200'} height={'2rem'}>
                              CX Strategy
                          </Button>
                          <Button backgroundColor={'blue.200'} height={'2rem'}>
                              Project Management
                          </Button>
                        </HStack>
                    </Box>
                  </div>
        </Box>
                
        </Container>
          <Box 
            position={'relative'}
            width={'55rem'}
            borderRadius={'1rem'}
            backgroundColor={'white'}
            overflow={'hidden'}
            zIndex={-1}
            padding={'1rem'}
            bgGradient={[
              'linear(to-b, red.50, purple.50, purple.100, purple.50)',
            ]}
          >
            <Text fontSize={'1xl'} as='b' color={'black'}> About {profile.name}</Text>
            <Text fontSize={'sm'} color={'black'}> {profile.bio}</Text>
          </Box>
          <HStack>
              
              <Box 
                position={'relative'}
                width={'18rem'}
                borderRadius={'1rem'}
                backgroundColor={'white'}
                overflow={'hidden'}
                height={'15rem'}

                zIndex={-1}
                padding={'0.6rem'}
                bgGradient={[
                  'linear(to-b, red.50, purple.50, purple.100, purple.50)',
                ]}
                >
                  <Text fontSize={'1rem'} as='b' color={'black'} > Contact {profile.name}</Text>
                  {/* <Text fontSize={'sm'} color={'black'}> {profile.bio}</Text> */}
              </Box>
              <Box 
                position={'relative'}
                width={'37rem'}
                height={'15rem'}
                borderRadius={'1rem'}
                backgroundColor={'white'}
                overflow={'hidden'}
                zIndex={-1}
                padding={'0.6rem'}
                bgGradient={[
                  'linear(to-b, red.50, purple.50, purple.100, purple.50)',
                ]}
                >
                  <Text fontSize={'1xl'} as='b' color={'black'} > Similar Developers</Text>
              </Box>
            </HStack>
          </VStack>

            <VStack className='overflowTest'  maxH={'750px'} overflow={'scroll'} marginLeft={'4rem'}>
                {loadingPublications ? (
                  <p>Loading publications...</p>
                ) : (
                  <Box className='overflowTest'  >
                    {publications?.map((publication: Publication) => (
                      <PublicationCard publication={publication} key={publication.id} />
                    ))}
                  </Box>
                )}      
            </VStack>
          </HStack>
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
  )

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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }



const Profile: NextPage = () => {

  const { isSignedIn } = useLensUser();

  return isSignedIn ? (
    <>
      <Box overflow='scroll' maxH={'800px'}>
        <Sidebar />
        
        <Box  p="4" >
          <div className='overscroll-contain' >
        <Container  >
          <VStack>
            <ProfilePage />
          </VStack>
        </Container>
        </div>
        </Box>


        <Tabs variant=''>
              <Container maxW="5xl" >
              <Divider orientation='horizontal'zIndex={-1} marginTop={'2rem'} marginBottom={'2rem'} color={'white'}/>

              <TabList>
                <Tab _selected={{ color: '#F211A3' }}>
                  <Text className='text-5xl' as='b'>
                    Past Projects
                  </Text>
                </Tab>
                <Tab _selected={{ color: '#F211A3' }}>
                  <Text className='text-5xl' as='b'>
                    Mirror
                  </Text>
                </Tab>
              </TabList>
              </Container>
              <TabPanels>
                <TabPanel>
                  <PastProjects />
                </TabPanel>
                <TabPanel>
                <PastProjects />
                </TabPanel>
              </TabPanels>
            </Tabs>
            </Box>
    </>
  ) : (
    <Auth />
  )
}

export default Profile