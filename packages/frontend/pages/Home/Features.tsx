import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react';
import { FcCollaboration, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <>
      <Container maxW={'6xl'} style={{ marginTop: '6rem', marginBottom: '6rem' }}>
        <Box p={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              title={'TEXT'}
              text={
                'TEXT'
              }
            />
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={'TEXT'}
              text={
                'TEXT'
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={'TEXT'}
              text={
                'TEXT'
              }
            />
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}