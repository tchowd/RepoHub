import React from 'react'
import {
    Flex, 
    Heading,
    Spacer,
    Link,
    Text,
    Divider, 
    Wrap, 
    WrapItem,
    Box,
    Button,
    Tag,
    Tabs,
    TabPanel,
    Tab,
    TabList,
    TabPanels,
    HStack
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

function Resources() {
  return (
    <div>
    <Flex>
      <Heading as="h2" marginTop="5">
        Resources
      </Heading>
      <Spacer />
      <Link href='https://turja.substack.com'>
      <Text marginTop='2rem' fontWeight={'bold'}>Learn more  
        &nbsp;
        <ArrowRightIcon w={3} h={3} /> 
      </Text>
      </Link>
    </Flex> 
    <Divider marginTop="5" marginBottom="2rem" />

    <Box 
          padding={'1.2rem'}
          position={'relative'}
          rounded={'2xl'}
          borderWidth='0.2rem'
          borderColor='gray.200'
          _hover={{boxShadow: 'lg'}}
          marginTop={'1rem'}
        >
      <Wrap spacing="30px" >
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
            <Tab>Discord</Tab>
            <Tab>Github - Issues</Tab>
            <Tab>Github - Discussion</Tab>
            <Tab>Stack Overflow</Tab>
            <Tab>Documentation</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Discord
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>

            </TabPanel>

            <TabPanel>

                <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Github - Issues
                </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                Imagine a blockchain that is designed for developers, capable of 
                supporting decentralized applications (dApps) through an entirely 
                revolutionized system and higher compared to the impact of AWS in 
                the blockchain space. Did I also forget to mention that this blockchain...
                </Text>
                <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>

            </TabPanel>

            <TabPanel>

                <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Github - Discussion
                </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                Imagine a blockchain that is designed for developers, capable of 
                supporting decentralized applications (dApps) through an entirely 
                revolutionized system and higher compared to the impact of AWS in 
                the blockchain space. Did I also forget to mention that this blockchain...
                </Text>
                <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>

            </TabPanel>

            <TabPanel>

                <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Stack Overflow
                </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                Imagine a blockchain that is designed for developers, capable of 
                supporting decentralized applications (dApps) through an entirely 
                revolutionized system and higher compared to the impact of AWS in 
                the blockchain space. Did I also forget to mention that this blockchain...
                </Text>
                <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>

            </TabPanel>


            <TabPanel>

                <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    Documentation
                </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                Imagine a blockchain that is designed for developers, capable of 
                supporting decentralized applications (dApps) through an entirely 
                revolutionized system and higher compared to the impact of AWS in 
                the blockchain space. Did I also forget to mention that this blockchain...
                </Text>
                <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>

            </TabPanel>

        </TabPanels>
        </Tabs>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>


    </div>
  )
}

export default Resources