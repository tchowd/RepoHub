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
    HStack
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

function Discussion() {
    interface IBlogTags {
        tags: Array<string>;
        marginTop?: SpaceProps['marginTop'];
      }
      
      const BlogTags: React.FC<IBlogTags> = (props) => {
        return (
          <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
              return (
                <Tag size={'md'} variant="solid" colorScheme="purple" key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </HStack>
        );
      };
  return (
    <div>
    <Flex>
      <Heading as="h2" marginTop="5">
        Discussions
      </Heading>
      <Spacer />
      <Link href='https://turja.substack.com'>
      <Text marginTop='2rem' fontWeight={'bold'}>Learn more  
        &nbsp;
        <ArrowRightIcon w={3} h={3} /> 
      </Text>
      </Link>
    </Flex> 
    <Divider marginTop="5" marginBottom='2rem'/>

    <Box 
          padding={'1.2rem'}
          position={'relative'}
          rounded={'2xl'}
          borderWidth='0.2rem'
          borderColor='gray.200'
          _hover={{boxShadow: 'lg'}}
        >
      <Wrap spacing="30px" >
      <WrapItem width={{ base: '100%', sm: '90%' }}>
          <Box w="100%">
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>


      {/* Question 2  */}
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>

      {/* Question 3 */}
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
            <BlogTags tags={['Web3', 'Product Review']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Let&apos;s talk Web 3: NEAR Protocol 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Imagine a blockchain that is designed for developers, capable of 
            supporting decentralized applications (dApps) through an entirely 
            revolutionized system and higher compared to the impact of AWS in 
            the blockchain space. Did I also forget to mention that this blockchain...
            </Text>
            <Button height={'2rem'} marginTop={'1rem'}>Read more</Button>
          </Box>
        </WrapItem>
      </Wrap>
      </Box>
    </div>
  )
}

export default Discussion