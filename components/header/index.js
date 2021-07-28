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

import { IoMdPerson } from 'react-icons/io'
//import av from 'public/favicon.icoav.svg'

import styles from './header.module.scss'

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
            <IoMdPerson className={styles.icon} />
          </Button>
        </Link>
      </div>
    </div>
  )
}
