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


  
  export default function AuthMiddle() {
    const [showPassword, setShowPassword] = useState(false);
    const sdk = useSDK();
    const address = useAddress();
    const isWrongNetwork = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();
    const { isSignedIn, setIsSignedIn, loadingSignIn, profile, loadingProfile } =
        useLensUser();

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
          <Button
            rounded={'lg'}
            bg={'#9AEB1B'}
            boxShadow={'lg'}
            p={8}>
            <RightSide />
          </Button>

          <Button
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            Connect to Substack
          </Button>

          <Button
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            Connect to Medium
          </Button>

          <Button
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            Connect to Hashnode
          </Button>

          <Button
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            Connect to Github
          </Button>
          
        </Stack>
      </Flex>
    );

    function RightSide() {
        // Connect Wallet First
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
        if (!profile) {
          return <p>No Lens profile.</p>;
        }
    
        // Is signed in and has profile
        return <p>@{profile.handle} </p>;
      }
  }


  