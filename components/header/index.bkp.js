import React from 'react'
import Link from 'next/link'

import {
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

//import { FaBeer } from '@react-icons/all-files/fa/FaBeer'
import { FaBeer } from 'react-icons/fa'

//import av from 'public/av.svg'

import styles from './header.module.scss'

//<Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
export default function Header() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="primary.500"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
      <Box w="70px" h="10">
        <HamburgerIcon />
      </Box>
      <Spacer />
      <Box w="170px" h="10" />
      <Spacer />
      <Box w="90px" h="10" className="styles.alingRight">
        <FaBeer className="styles.alingRight" />
      </Box>
    </Flex>
  )
}

//<AppBarNav id={`simple-usage-nav`} aria-label="Navigation">
//  <MenuSVGIcon />
//</AppBarNav>
