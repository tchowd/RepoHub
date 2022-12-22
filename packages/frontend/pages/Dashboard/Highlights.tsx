import React from 'react'
import {
  Box,
  Flex,
  HStack,
  Image,
  Img,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import {
  ChainId,
  ConnectWallet,
  useAddress,
  useNetwork,
  useNetworkMismatch,
  useSDK,
} from "@thirdweb-dev/react";
// import { ConnectButton, useAccount } from '@web3modal/react'
// import UseAccount from '../Auth/WalletConnect/sections/UseAccount'
import { Text } from '@chakra-ui/react';
import { useAccount, useEnsName } from 'wagmi';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

function Highlights() {
  const { isConnected, address } = useAccount()

  return (
    <>
    <div style={{marginTop: '2rem'}}>
      <Flex>
      <Text as='b' fontSize='4xl'>
        Good morning 👋
      </Text>
      <Spacer />
      <Box zIndex={1} width={'6rem'} marginRight={'-3rem'} marginTop={'-2rem'} >
        <Img src='/static/pushicon.png' alt='pushicon' _hover={{boxShadow: 'sm', backgroundColor: 'purple.50', borderRadius: '10rem', cursor: 'pointer' }} />
      </Box>
      </Flex>
      <VStack style={{marginTop: '0rem', marginRight: '1rem'}}>

      <HStack style={{ marginTop: '2rem' }}>
        <VStack>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={'hidden'}
            _hover={{ boxShadow: 'lg' }}
          >
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                height="8rem"
                rounded='90px'
                width="30rem">
                <VStack marginTop='1rem'>
                    <Text>Total Amount Claimable ($USDC)</Text>
                    <Text as='b' fontSize='5xl'>$122,500</Text>
                </VStack>
              </Box>
            </Box>
          </Box>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={'hidden'}
            _hover={{ boxShadow: 'lg' }}
          >
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                height="8rem"
                rounded='90px'
                width="30rem">
                <VStack marginTop='1rem'>
                    <Text>Notifications Waiting</Text>
                    <Text as='b' fontSize='5xl'>6</Text>
                </VStack>
              </Box>
            </Box>
          </Box>
        </VStack>

        <Box
          position={'relative'}
          rounded={'2xl'}
          borderWidth='0.2rem'
          borderColor='gray.200'
          overflow={'hidden'}
          _hover={{ boxShadow: 'lg' }}
        >
          <Box w="100%">
            <Box 
            // borderRadius="lg"
              overflow="hidden"
              height="17rem"
              // rounded='90px'
              width="30rem"
              >
                <Image
              // borderRadius="lg"
              src='/static/13.jpg'
              alt="some good alt text"
              objectFit="contain"
              width={'45rem'}
              height={'38rem'}
              marginTop={'-12rem'}
              marginLeft={'1rem'}
              overflow="hidden"
              // style={{ borderRadius: '0.8rem' }}
            />

            </Box>
          </Box>
        </Box>


      </HStack>
      </VStack>
      </div>
      </>
  ) 
}

export default Highlights