import React from 'react'
import {
  Box,
  HStack,
  Image,
  VStack,
} from '@chakra-ui/react';
// import { ConnectButton, useAccount } from '@web3modal/react'
// import UseAccount from '../Auth/WalletConnect/sections/UseAccount'
import { Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

function Highlights() {
  const { address, isConnected } = useAccount()
  return isConnected ? (
    <>
      <Text as='b' fontSize='4xl'>
        Good morning {address}
      </Text>
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
                    <Text>Total Amount Available to be Earned ($USDC)</Text>
                    <Text as='b' fontSize='5xl'>NUMBERS</Text>
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
                    <Text as='b' fontSize='5xl'>NUMBER</Text>
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
              width="70rem"
              >
                <Image
              // borderRadius="lg"
              src='/static/13.jpg'
              alt="some good alt text"
              objectFit="contain"
              width={'40rem'}
              height={'35rem'}
              marginTop={'-12rem'}
              marginLeft={'2rem'}
              overflow="hidden"
              // style={{ borderRadius: '0.8rem' }}
            />

            </Box>
          </Box>
        </Box>


      </HStack>
      </>
  ): (
    <ConnectButton />
  )
}

export default Highlights