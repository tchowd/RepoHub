import React from 'react'
import type { NextPage } from 'next'
import Sidebar from './Sidebar'
import TableSection from './Table'
import Highlights from './Highlights'
import Projects from './Projects'
import { Box, Container } from '@chakra-ui/react'


const Dashboard: NextPage = () => {
    return (
    <>
    
        <Sidebar children={undefined} / >
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Container maxW="1260px">
            <Highlights />
            {/* <SecondTest /> */}
            <Projects />
          </Container>
        </Box>
        
        {/* <ProfileWallet /> */}
        

    </>
  )
}

export default Dashboard