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
              I'm trying to develop DApp on polygon blockchain. Basically I'm minting NFT but after few mints I get this error. It even happens when I don't mint NFT. Here is my code. 
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            I'm trying to develop DApp on polygon blockchain. Basically I'm minting NFT
            but after few mints I get this error. It even happens when I don't mint NFT. 
            Here is my code...
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
              After updating to v0.6.0 I am frequently seeing thefollowing logs. 
              As this process is started no new blocks are minted. Any information on this would be helpful.
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Here is the information that I continue to recieve:

            0|node1 | 2022-09-29T06:14:05.062Z [INFO] polygon.blockchain: block already inserted: block=170997 source=syncer0|node1 | 2022-09-29T06:14:17.054Z [INFO] polygon.ibft.consensus: round timeout expired: round=00|node1 | 2022-09-29T06:14:17.055Z [INFO] polygon.ibft.consensus: round started: round=10|node1 | 2022-09-29T06:14:39.057Z [INFO] polygon.ibft.consensus: round timeout expired: round=10|node1 | 2022-09-29T06:14:39.059Z [INFO] polygon.ibft.consensus: round started: round=20|node1 | 2022-09-29T06:15:21.060Z [INFO] polygon.ibft.consensus: round timeout expired: round=20|node1 | 2022-09-29T06:15:21.062Z [INFO] polygon.ibft.consensus: round started: round=30|node1 | 2022-09-29T06:16:43.064Z [INFO] polygon.ibft.consensus: round timeout expired: round=30|node1 | 2022-09-29T06:16:43.067Z [INFO] polygon.ibft.consensus: round started: round=40|node1 | 2022-09-29T06:16:43.068Z [INFO] polygon.ibft.consensus: we are the proposer
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