import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import { Box, Container, Tab, TabList, TabPanel, TabPanels,Text, Tabs, Divider } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ConnectWallet } from "@thirdweb-dev/react";
import Auth from '../auth'
import ExploreProfiles from './ExploreProfiles'
import useLensUser from '@/util/useLensUser'
import ExplorePartners from './ExplorePartners'

const Explore: NextPage = () => {

  const { isSignedIn } = useLensUser();

  return isSignedIn ? (
    <>
    
        <Sidebar />
        <Box ml={{ base: 0, md: 70 }} p="4" overflow='scroll'>
          <div className='overscroll-contain' >
            <Container maxW="7xl" marginTop={'2rem'}>
            <Tabs variant=''>
              <Container maxW="5xl" >
              <TabList>
                <Tab _selected={{ color: '#F211A3' }}>
                  <Text className='text-5xl' as='b'>
                    Members
                  </Text>
                </Tab>
                <Tab _selected={{ color: '#F211A3' }}>
                  <Text className='text-5xl' as='b'>
                    Partners
                  </Text>
                </Tab>
              </TabList>
              <Divider orientation='horizontal'  zIndex={-1} marginTop={'2rem'} marginBottom={'2rem'}/>
              </Container>
              <TabPanels>
                <TabPanel>
                  <ExploreProfiles />
                </TabPanel>
                <TabPanel>
                  <ExplorePartners/>
                </TabPanel>
              </TabPanels>
            </Tabs>
            </Container>
          </div> 
        </Box>
    </>
  ) : (
    <Auth />
  )
}

export default Explore
