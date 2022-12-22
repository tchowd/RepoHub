import React from 'react'
import Footer from '../components/Footer'
import AuthMiddle from './AuthMiddle'
import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const Auth: NextPage = () => {
    return (
    <>
        <Navbar />
            <Box >
                <AuthMiddle />
            </Box>
        {/* <Footer /> */}
    </>
  )
}

export default Auth