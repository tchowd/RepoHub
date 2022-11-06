import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  useColorModeValue,
  useColorMode,
  Image,
  Link,
  Button,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Dashboard', icon: FiTrendingUp },
  { name: 'Invoice', icon: FiCompass },
  { name: 'Profile', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <Box>
   
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      {/* <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full" 
        children={undefined}>
        <DrawerContent> */}
       
          <SidebarContent onClose={onClose} />
        {/* </DrawerContent> */}
      {/* </Drawer> */}

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      {/* <Box ml={{ base: 0, md: 60 }} p="4"> */}
        {/* {children}      */}
        {/* <TableSection /> */}
        {/* <Highlights /> */}
        {/* <Projects /> */}
      {/* </Box> */}
      
      {/* <ConnectButton /> */}
    </Box>
  
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <>

    <div style={{backgroundColor: 'linear-gradient(180deg, rgba(189,0,224,0.5256303204875701) 28%, rgba(0,7,255,0.4640056706276261) 100%); '}}>
    <Box
      transition="3s ease"
      bg={useColorModeValue('', 'purple.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">

      <Image
                borderRadius="lg"
                src='/static/bloom.png'
                alt="some good alt text"
                objectFit="contain"
                width={'10rem'}
              /> 
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} style={{marginTop: '1rem'}}>
          {link.name}
        </NavItem>
      ))}
       
    </Box>
    </div>
    
    </>
  );
};

interface NavItemProps extends FlexProps {
  // name: LinkItemProps
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <>
    <Link href={children} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'purple.400',
          color: 'white',
        }}
        {...rest}>
        
        {children}

       
      </Flex>
    </Link>



    </>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div  style={{backgroundColor: 'linear-gradient(180deg, rgba(189,0,224,0.5256303204875701) 28%, rgba(0,7,255,0.4640056706276261) 100%); '}}>
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      // bg={useColorModeValue('white', 'gray.900')}
      // borderBottomWidth="1px"
      // borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>

      {/* <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      /> */}
    <HStack style={{marginRight: '2rem', overflow: "visible", zIndex: '1'}}>
      <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
      
      </HStack>
      </HStack>
      {/* <ConnectButton /> */}
    </Flex>
    </div>
  );
};