import React from 'react'
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Link,
} from '@chakra-ui/react';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import InfiniteScroll from 'react-infinite-scroll-component';

function Projects() {

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
    <div style={{marginTop: '2rem'}}>
     <Text as='b' fontSize='3xl' >Partners in our Community</Text>

      <HStack style={{ marginTop: '1rem' }}>

        <HStack style={{ overflow: 'scroll' }}>
          <Link href='/Partners/Polygon'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/8.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/Polygon'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/7.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/Polygon'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/5.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/Polygon'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/4.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/Polygon'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/2.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/Polygon'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/3.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/Polygon'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/9.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/10.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>

          <Link href='/Partners/'>
          <Box
            position={'relative'}
            rounded={'2xl'}
            borderWidth='0.2rem'
            borderColor='gray.200'
            overflow={''}
            _hover={{ boxShadow: 'lg' }}
          >
            <Image
              borderRadius="lg"
              src='/static/11.png'
              alt="some good alt text"
              objectFit="contain"
              width={'30rem'}
              height={'15rem'}
              overflow="hidden"
              style={{ borderRadius: '0.8rem' }}
            />
            <Box w="100%">
              <Box borderRadius="lg"
                overflow="hidden"
                rounded='90px'
                width="30rem"
              >

              </Box>
            </Box>
          </Box>
          </Link>
        </HStack>




      </HStack>
      </div>
    </>
  )
}

export default Projects