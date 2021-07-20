import React from 'react'
import Link from 'next/link'

import {
  //  Box,
  //  Flex,
  //  Spacer,
  //  Text,
  //  IconButton,
  Button,
  //  Stack,
  //  Collapse,
  //  Icon,
  //  Popover,
  //  PopoverTrigger,
  //  PopoverContent,
  //  useColorModeValue,
  //  useBreakpointValue,
  //  useDisclosure,
} from '@chakra-ui/react'
//
//import {
//  HamburgerIcon,
//  CloseIcon,
//  ChevronDownIcon,
//  ChevronRightIcon,
//} from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'

//import { FaBeer } from '@react-icons/all-files/fa/FaBeer'
import { FaHome, FaShoppingCart, FaBars, FaBeer, FaUser } from 'react-icons/fa'
import {
  MdDehaze,
  MdHome,
  MdPerson,
  MdAccountCircle,
  MdHelp,
} from 'react-icons/md'

//import av from 'public/av.svg'

import styles from './header.module.scss'

//<Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <Link href="/auth">
          <Button variant="link">
            <MdDehaze className={styles.icon} />
          </Button>
        </Link>
        <Link href="/">
          <Button variant="link">
            <MdHome className={styles.icon} />
          </Button>
        </Link>
      </div>
      <div className={styles.row}>
        <Link href="/shop/cart">
          <Button variant="link">
            <FaShoppingCart className={styles.icon} />
          </Button>
        </Link>
        <Link href="/auth">
          <Button variant="link">
            <MdAccountCircle className={styles.icon} />
          </Button>
        </Link>
      </div>
    </div>
  )
}
