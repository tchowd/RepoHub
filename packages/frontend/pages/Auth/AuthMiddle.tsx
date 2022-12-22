import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
    VStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Container,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import useLensUser from "../../util/useLensUser";
import login from "../../util/login";
import {
    ChainId,
    ConnectWallet,
    useAddress,
    useNetwork,
    useNetworkMismatch,
    useSDK,
  } from "@thirdweb-dev/react";
import { useAccount } from 'wagmi';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { SiSubstack, SiHashnode, SiGithub } from 'react-icons/si';
import { FaMediumM } from 'react-icons/fa';



  
  export default function AuthMiddle() {
    const [showPassword, setShowPassword] = useState(false);
    const sdk = useSDK();
    const address = useAddress();
    const isWrongNetwork = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();
    const { isSignedIn, setIsSignedIn, loadingSignIn, profile, loadingProfile } =
        useLensUser();
    const { isConnected } = useAccount()
     const { width, height } = useWindowSize()


    async function signIn() {
        if (!address || !sdk) return;

        if (isWrongNetwork) {
        switchNetwork?.(ChainId.Polygon);
        return;
        }

        await login(address, sdk);
        setIsSignedIn(true);
    }
   
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        bgGradient='linear(to-r, gray.300, purple.50, purple.100, purple.50, gray.300)'

        >
        <Stack spacing={10} mx={'auto'} maxW={'6xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'6xl'} textAlign={'center'} 
            fontWeight='extrabold'>
              Get Started with Claim
            </Heading>

            <Text fontSize={'xl'} color={'gray.600'}>
              Kickstart your journey by signing in with your wallet.
            </Text>
          </Stack>
          <Center>
            <RightSide />
            {/* <Temp /> */}
           {/* if (isConnected)  (return <CompleteAccount/> : <ConnectButton />  ) */}
          </Center>

          
        </Stack>
      </Flex>
    );

    
    function Temp() {

      if (isConnected) {
        return (
          <>
          <Confetti
            width={width}
            height={height}
          />
          <CompleteAccount />
          </>
        )
        return <ConnectButton/>
      }
    }
    function RightSide() {
        // Connect Wallet First
        // console.log(profile)
        if (!address) {
          return (
            <div style={{ marginRight: 12,  }}>
            
              <ConnectWallet accentColor="#9AEB1B"   
                            auth={{
                                loginOptional: false,
                            }}
                            colorMode="dark"/>
                            
              {/* <ConnectButton /> */}
            </div>
          );
        }
       
    
        // Loading sign in state
        if (loadingSignIn) {
          return <div>Loading...</div>;
        }
    
        // Not signed in
        if (!isSignedIn) {
          return (
            <Button onClick={signIn} bgGradient='linear(to-r, red.100, yellow.400, pink.200)' width={'10rem'}>
              {isWrongNetwork ? "Switch Network" : "Sign In with Lens"}
            </Button>
          );
        }
    
        // Loading profile
        if (loadingProfile) {

          return <div>Loading...</div>;
        }
    
        // Is signed in but doesn't have profile
        if (!profile ) {
          console.log(profile)
          console.log(isSignedIn)
          return(
          <>

          <p>
              {/* No Lens profile. <br></br> */}
              <Confetti
            width={width}
            height={height}
          />
              <CompleteAccount />
            </p>
          </>

          )
        }
    
        // Is signed in and has profile
        return <p>@{profile.handle} </p>;
      }
  }


  
  function CompleteAccount() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const { width, height } = useWindowSize()

  
    return (
      <>
        <Button onClick={onOpen} bgGradient='linear(to-r, red.100, yellow.400, pink.200)'>Claim your Account</Button>
                  
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered >
          <ModalOverlay />
          <ModalContent>
            <VStack>
            <ModalHeader>
            <Text fontSize={'2rem'} marginTop={'2rem'} marginBottom={'-2rem'}>Welcome to Claim!</Text>  
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text> 
                Before we jump in, please complete your profile below.
              </Text>
              <Container maxW={'5xl'}>
              <Button
              rounded={'lg'}
              bg={'orange.400'}
              boxShadow={'lg'}
              margin={'1rem'}
              marginLeft={'3.5rem'}
              width={'15rem'}
              p={8}>
              <SiSubstack /> Connect to Substack
            </Button>

            <Button
              rounded={'lg'}
              bg={'gray.300'}
              boxShadow={'lg'}
              margin={'1rem'}
              width={'15rem'}
              marginLeft={'3.5rem'}
              p={8}>
              <FaMediumM />Connect to Medium
            </Button>

            <Button
              rounded={'lg'}
              bg={'blue.400'}
              boxShadow={'lg'}
              margin={'1rem'}
              width={'15rem'}
              marginLeft={'3.5rem'}
              p={8}>
              <SiHashnode /> Connect to Hashnode
            </Button>

            <Button
              rounded={'lg'}
              bg={'gray.100'}
              boxShadow={'lg'}
              margin={'1rem'}
              width={'15rem'}
              marginLeft={'3.5rem'}
              p={8}>
              <SiGithub />
              <Text>Connect to Github</Text>  
            </Button>
            </Container>
            <Link href='/dashboard'>
              <VStack>
              <Button onClick={onOpen} bgGradient='linear(to-r, red.100, yellow.400, pink.200)' marginTop={'1rem'} marginBottom={'2rem'} textDecoration={'none'}
              marginRight={'1rem'}>Enter Claim</Button>
              </VStack>
            </Link>
            </ModalBody>
            </VStack>
            
          </ModalContent>
        </Modal>
      </>
    )
  }