// components/Header.tsx
'use client';
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Button,
  Input,
} from '@chakra-ui/react';
import { HamburgerIcon, StarIcon, SettingsIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { SNXIcon } from '../Icons';

const Header = () => {
  const activeStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
  };

  const inactiveStyle = {
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'gray',
  };

  return (
    <Flex
      as="header"
      px={{ base: '16px', md: '40px' }}
      py={2}
      bg="navy.900"
      height="65px"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth="1px"
      borderBottomColor="gray.900"
      borderTopWidth="1px"
      borderTopColor="transparent"
    >
      <Flex alignItems="center" sx={{ gap: { base: '8px', md: '24px' } }}>
        <Link href="/" passHref>
          <Flex alignItems="center" cursor="pointer">
            <SNXIcon fill="cyan.400" />
            <Text
              ml="10px"
              fontSize="lg"
              fontWeight="bold"
              display={{ base: 'none', c900: 'initial' }}
            >
              Watcher
            </Text>
          </Flex>
        </Link>
        <Menu>
          <MenuButton
            as={Button}
            bg="transparent"
            border="none"
            _hover={{ bg: 'transparent' }}
            _focus={{ outline: 'none' }}
          >
            Perps V3 <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/" passHref>
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/perps/actions" passHref>
                Actions
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/perps/markets" passHref>
                Markets
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/perps/positions" passHref>
                Positions
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/perps/liquidations" passHref>
                Liquidations
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Flex as="nav" sx={{ gap: '24px' }}>
          <Box style={activeStyle}>
            <Link href="/" passHref>
              Dashboard
            </Link>
          </Box>
          <Box style={activeStyle}>
            <Link href="/perps/actions" passHref>
              Actions
            </Link>
          </Box>
          <Box style={activeStyle}>
            <Link href="/perps/markets" passHref>
              Markets
            </Link>
          </Box>
          <Box style={activeStyle}>
            <Link href="/perps/positions" passHref>
              Positions
            </Link>
          </Box>
          <Box style={activeStyle}>
            <Link href="/perps/liquidations" passHref>
              Liquidations
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" alignItems="center" sx={{ gap: '16px' }}>
        <Input placeholder="Search by ENS / address" width="200px" />
        <Button variant="ghost">
          <StarIcon />
        </Button>
        <Button variant="ghost">
          <SettingsIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
