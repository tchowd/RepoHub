import React from 'react'
import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CompanyProfile from './CompanyProfile'
import Sidebar from '@/pages/Dashboard/Sidebar'
import Discussion from './Discussion'
import Resources from './Resources'


const Company: NextPage = () => {
  return (
    <>
        <Sidebar children={undefined} />
        <CompanyProfile />
        <Box ml={{ base: 0, md: 60 }} p="4" style={{marginLeft: '20rem'}} maxW="1060px">
            <div style={{marginTop: '3rem'}}>
            <Discussion />
            </div>
            <div style={{marginTop: '3rem'}}>
            <Resources />
            </div>
        </Box>
        </>
  )
}

export default Company