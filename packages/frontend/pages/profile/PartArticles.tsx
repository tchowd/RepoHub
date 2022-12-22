import { Box, Text, Container, HStack } from '@chakra-ui/react'
import React from 'react'

function PastArticles() {
  return (
    <Container maxW="5xl" >
      <HStack>
       <Box 
          position={'relative'}
          width={'18rem'}
          borderRadius={'1rem'}
          backgroundColor={'white'}
          overflow={'hidden'}
          height={'15rem'}
          zIndex={-1}
          padding={'0.6rem'}
          bgGradient={[
            'linear(to-b, red.50, purple.50, purple.100, purple.50)',
          ]}
          >
            <Text fontSize={'1xl'} as='b' color={'black'} > Article #1 </Text>
            {/* <Text fontSize={'sm'} color={'black'}> {profile.bio}</Text> */}
        </Box>
        <Box 
          position={'relative'}
          width={'18rem'}
          borderRadius={'1rem'}
          backgroundColor={'white'}
          overflow={'hidden'}
          height={'15rem'}
          zIndex={-1}
          padding={'0.6rem'}
          bgGradient={[
            'linear(to-b, red.50, purple.50, purple.100, purple.50)',
          ]}
          >
            <Text fontSize={'1xl'} as='b' color={'black'} > Article #2 </Text>
            {/* <Text fontSize={'sm'} color={'black'}> {profile.bio}</Text> */}
        </Box>
        <Box 
          position={'relative'}
          width={'18rem'}
          borderRadius={'1rem'}
          backgroundColor={'white'}
          overflow={'hidden'}
          height={'15rem'}
          zIndex={-1}
          padding={'0.6rem'}
          bgGradient={[
            'linear(to-b, red.50, purple.50, purple.100, purple.50)',
          ]}
          >
            <Text fontSize={'1xl'} as='b' color={'black'} > Article #3 </Text>
            {/* <Text fontSize={'sm'} color={'black'}> {profile.bio}</Text> */}
        </Box>
        </HStack>
    </Container>
  )
}

export default PastArticles