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
                backgroundColor={'teal.100'}
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
                    src='/static/ipfs.png'
                    alt='Dan Abramov'
                    marginTop={'-4rem'}
                    marginRight={'2rem'}
                    overflow={'none'}
                    zIndex={'1'}
                    />
                    <VStack>
                    <Text marginTop={'2rem'} marginRight={'28rem'} fontSize='5xl' as='b'> 
                    IPFS
                    </Text>
                    <Text  marginLeft={'0rem'}> 
                    Passwordless authentication meets MPC enabled non-custodial key infrastructure for <br></br>apps and wallets.
                    </Text>
                    </VStack>
                    
                </Center>

    </div>
  )
}

export default CompanyProfile