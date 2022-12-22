// import React, { ReactNode } from 'react';
// import {
//   IconButton,
//   Avatar,
//   Box,
//   CloseButton,
//   Flex,
//   HStack,
//   VStack,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
//   Button,
//   useColorMode,
// } from '@chakra-ui/react';
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
//   FiBell,
//   FiChevronDown,
// } from 'react-icons/fi';
// import { IconType } from 'react-icons';
// import { ReactText } from 'react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Dashboard', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Profile', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ];

// export default function SidebarWithHeader({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Box bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: 'none', md: 'block' }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full">
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav onOpen={onOpen} />
//       {/* <Box ml={{ base: 0, md: 60 }} p="4">
//         {children}
//       </Box> */}
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       transition="3s ease"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Claim
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 4 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent={{ base: 'space-between', md: 'flex-end' }}
//       {...rest}>
//       <IconButton
//         display={{ base: 'flex', md: 'none' }}
//         onClick={onOpen}
//         variant="outline"
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text
//         display={{ base: 'flex', md: 'none' }}
//         fontSize="2xl"
//         fontFamily="monospace"
//         fontWeight="bold">
//         Claim
//       </Text>

//       <HStack spacing={{ base: '0', md: '6' }}>
//         <IconButton
//           size="lg"
//           variant="ghost"
//           aria-label="open menu"
//           icon={<FiBell />}
//         />
//         <HStack style={{marginRight: '2rem', overflow: "visible", zIndex: '1'}}>
//         <Button onClick={toggleColorMode}>
//             {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//           </Button>
//           <HStack spacing={{ base: '0', md: '6' }}>
//             <IconButton
//               size="lg"
//               variant="ghost"
//               aria-label="open menu"
//               icon={<FiBell />}
//             />
//           </HStack>
//         </HStack>
//         <Flex alignItems={'center'}>
//           <Menu>
//             <MenuButton
//               py={2}
//               transition="all 0.3s"
//               _focus={{ boxShadow: 'none' }}>
//               <HStack>
//                 <Avatar
//                   size={'sm'}
//                   src={
//                     'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//                   }
//                 />
//                 <VStack
//                   display={{ base: 'none', md: 'flex' }}
//                   alignItems="flex-start"
//                   spacing="1px"
//                   ml="2">
//                   <Text fontSize="sm">Justina Clark</Text>
//                   <Text fontSize="xs" color="gray.600">
//                     Admin
//                   </Text>
//                 </VStack>
//                 <Box display={{ base: 'none', md: 'flex' }}>
//                   <FiChevronDown />
//                 </Box>
//               </HStack>
//             </MenuButton>
//             <MenuList
//               bg={useColorModeValue('white', 'gray.900')}
//               borderColor={useColorModeValue('gray.200', 'gray.700')}>
//               <MenuItem>Profile</MenuItem>
//               <MenuItem>Settings</MenuItem>
//               <MenuItem>Billing</MenuItem>
//               <MenuDivider />
//               <MenuItem>Sign out</MenuItem>
//             </MenuList>
//           </Menu>
//         </Flex>
//       </HStack>
//     </Flex>
//   );
// };

import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
import { Box, Link } from '@chakra-ui/react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
// import Logo from '../assets/images/logo.svg'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    // const location = useLocation()

    const Menus = [
        { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
        { title: 'Explore', path: '/explore', src: <SiFuturelearn /> },
        { title: 'Profile', path: '/profile', src: <CgProfile /> },
        { title: 'Settings', path: '/Settings', src: <SiOpenaccess />, gap: 'true' },
    ]

    return (
        <>
            <Box zIndex={'1'}
                className={`${
                    open ? 'w-50' : 'w-fit'
                } hidden sm:block absolute h-screen duration-300 bg-white-100 border-r border-white-200 light:border-white-600 p-5 light:bg-slate-800`}
                bgGradient={[
                    'linear(to-b, purple.300, orange.100, purple.300)',
                  ]}
            >
                <BsArrowLeftCircle style={{zIndex: '1'}}
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl  bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                <Link href='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                        {/* <img src={Logo} alt='' className='pl-2' /> */}
                        {open && (
                            <Box marginTop={'1rem'} className='text-xl font-medium whitespace-nowrap dark:text-black'>
                                Claim
                            </Box>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer light:text-black hover:bg-white-200 dark:hover:bg-white
                        `}
                            >
                                <Box margin={'0.5rem'} className='text-2xl'>{menu.src}</Box>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block `}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </Box>
        </>
    )
}

export default Sidebar