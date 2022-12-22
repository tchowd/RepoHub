import React from 'react'
import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CompanyProfile from './CompanyProfile'
import Discussion from './Discussion'
import Resources from './Resources'
import Sidebar from '../../components/Sidebar'


const Company: NextPage = () => {
  return (
    <>
        {/* <Sidebar children={undefined} /> */}
        <Box >
        <Sidebar />
        <Box overflow='scroll' maxH={'800px'} >
        <CompanyProfile />
        <Box ml={{ base: 0, md: 60 }} p="4" style={{marginLeft: '20rem'}} maxW="1060px" marginBottom={'2rem'}>
            <div style={{marginTop: '3rem'}}>
            <Discussion />
            </div>
            <div style={{marginTop: '3rem'}}>
            <Resources />
            </div>
        </Box>
        </Box>
        </Box>
        </>
  )
}

export default Company