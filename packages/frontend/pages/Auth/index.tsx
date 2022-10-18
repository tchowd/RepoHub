import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthMiddle from './AuthMiddle'
import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Box } from '@chakra-ui/react'
import NavbarNone from '../components/NavbarNoWallet copy'

const Auth: NextPage = () => {
    return (
    <>
        <NavbarNone />
            <Box >
                <AuthMiddle />
            </Box>
        <Footer />
    </>
  )
}

export default Auth