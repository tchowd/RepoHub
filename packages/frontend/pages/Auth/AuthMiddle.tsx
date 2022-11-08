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
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Center>
            <RightSide />
            {/* <Temp /> */}
           {/* if (isConnected)  (return <CompleteAccount/> : <ConnectButton />  ) */}
          </Center>

        

          <Text fontSize={'lg'} color={'gray.600'}>
              Already have an account? Sign in here.
            </Text>
          
        </Stack>
      </Flex>
    );

    
    function Temp() {

      if (isConnected) {
        return (
          <>
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
            <Button onClick={signIn}>
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
          {/* <Confetti
            width={width}
            height={height}
          /> */}
          <p>
              No Lens profile. <br></br>
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
  
    return (
      <>
        <Button onClick={onOpen}>Trigger modal</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Welcome to Claim!</ModalHeader>
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
              width={'15rem'}
              p={8}>
              Connect to Substack
            </Button>

            <Button
              rounded={'lg'}
              bg={'grey.400'}
              boxShadow={'lg'}
              margin={'1rem'}
              width={'15rem'}
              p={8}>
              Connect to Medium
            </Button>

            <Button
              rounded={'lg'}
              bg={'blue.400'}
              boxShadow={'lg'}
              margin={'1rem'}
              width={'15rem'}
              p={8}>
              Connect to Hashnode
            </Button>

            <Button
              rounded={'lg'}
              bg={'black.400'}
              boxShadow={'lg'}
              margin={'1rem'}
              width={'15rem'}
              p={8}>
              Connect to Github
            </Button>
            </Container>
            <Link href='/dashboard'>
              <Button margin="2rem"> 
                  Claim your profile
              </Button>
            </Link>
            </ModalBody>
            
            
          </ModalContent>
        </Modal>
      </>
    )
  }