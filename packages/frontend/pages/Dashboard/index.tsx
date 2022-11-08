import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Highlights from './Highlights'
import Projects from './Projects'
import { Box, Container } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ConnectWallet } from "@thirdweb-dev/react";
import Auth from '../auth'
import useLensUser from '@/util/useLensUser'

const Dashboard: NextPage = () => {

  const { isSignedIn } = useLensUser();

  return (isSignedIn ) ? (
    <>
    
        <Sidebar> </Sidebar>
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Container maxW="1260px">
            <Highlights />
            <Projects />
          </Container>
        </Box>
    </>
  ) : (
    <Auth />
  )
}

export default Dashboard