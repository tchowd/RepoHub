import React from 'react'
import type { NextPage } from 'next'
import Sidebar from './Sidebar'
import TableSection from './Table'
import Highlights from './Highlights'
import Projects from './Projects'
import { Box, Container } from '@chakra-ui/react'
import {SecondTest} from './SecondTest'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
// import ProfileWallet from '../Auth/ProfileWallet'
import { ConnectWallet } from "@thirdweb-dev/react";
import Auth from '../Auth'

const Dashboard: NextPage = () => {

  const { isConnected } = useAccount()

  return isConnected ? (
    <>
    
        <Sidebar children={undefined} / >
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