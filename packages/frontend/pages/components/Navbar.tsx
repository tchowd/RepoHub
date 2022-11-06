import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('purple.100', 'purple.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image
            borderRadius="lg"
            src='/static/bloom.png'
            alt="some good alt text"
            objectFit="contain"
            width={'10rem'}
          />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <WalletConnect /> */}
              {/* <ConnectButton /> */}
              {/* <Auth /> */}
              <Button onClick={toggleColorMode} zIndex={'1'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>


            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}