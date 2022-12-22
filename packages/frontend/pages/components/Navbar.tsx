import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Img,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
          w='100%'
          h='1rem'
          bgGradient='linear(to-r, gray.300, purple.50, purple.100, purple.50, gray.300)'
          >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          {/* <Image
            borderRadius="lg"
            src='/images/claim.jpg'
            alt="claim Logo"
            objectFit="contain"
            width={'10rem'}
          /> */}
          {/* <Text> Claim </Text> */}
          <Img src='/images/claim.png' alt="claim Logo" width={'6rem'} marginLeft={'2rem'} marginTop={'2rem'}/>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <WalletConnect /> */}
              {/* <ConnectButton /> */}
              {/* <Auth /> */}
              
              <Button onClick={toggleColorMode} zIndex={'1'} marginRight={'2rem'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>


            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}