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
                backgroundColor={'green.100'}
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
                    src='/static/lens.png'
                    alt='Dan Abramov'
                    marginTop={'-4rem'}
                    marginRight={'2rem'}
                    overflow={'none'}
                    zIndex={'1'}
                    />
                    <VStack>
                    <Text marginTop={'2rem'} marginRight={'28rem'} fontSize='5xl' as='b'> 
                    Lens Protocol
                    </Text>
                    <Text  marginLeft={'0rem'}> 
                    Polygon believes in Web3 for all. Polygon is a decentralised Ethereum scaling 
                    platform  <br></br> that enables developers to build scalable user-friendly dApps with low 
                    transaction fees <br></br> without ever sacrificing on security.
                    </Text>
                    </VStack>
                    
                </Center>

    </div>
  )
}

export default CompanyProfile