import React from 'react'
import {Box, Center, Image, Text, VStack } from '@chakra-ui/react'

function CompanyProfile() {
  return (
    <div>
        <Box
                position={'relative'}
                // rounded={'2xl'}
                // borderWidth='0.2rem'
                width={'75rem'}
                height={'12rem'}
                // borderColor='none'
                // overflow={'hidden'}
                backgroundColor={'yellow.600'}
                overflow={'hidden'}
                marginLeft={'15rem'}
                marginTop={'-5rem'}
                _hover={{boxShadow: 'lg'}}
            >
               
            
                
                    
                   
            </Box>

            <Center>
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='/static/Scroll.png'
                    alt='Dan Abramov'
                    marginTop={'-4rem'}
                    marginRight={'2rem'}
                    overflow={'none'}
                    zIndex={'1'}
                    />
                    <VStack>
                    <Text marginTop={'2rem'} marginRight={'28rem'} fontSize='5xl' as='b'> 
                    Scroll
                    </Text>
                    <Text  marginLeft={'0rem'}> 
                    Optimism is a fast, stable, and scalable L2 blockchain built by Ethereum developers, <br></br>
                    for Ethereum developers. Built as a minimal extension to existing Ethereum <br></br>software, Optimism's
                    EVM-equivalent architecture scales your Ethereum apps without surprises.
                    </Text>
                    </VStack>
                    
                </Center>

    </div>
  )
}

export default CompanyProfile