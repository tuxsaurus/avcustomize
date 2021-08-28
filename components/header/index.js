import React from 'react'
import Link from 'next/link'

//import { FaBeer } from '@react-icons/all-files/fa/FaBeer'
import { FaHome, FaShoppingCart, FaBars, FaBeer, FaUser } from 'react-icons/fa'
import {
  MdDehaze,
  MdHome,
  MdSearch,
  MdNotifications,
  MdPerson,
  MdAccountCircle,
  MdHelp,
} from 'react-icons/md'

import { IoMdPerson } from 'react-icons/io'
//import av from 'public/favicon.icoav.svg'

import styles from './header.module.scss'

export default function Header() {
  //const error = this.state.valid ? '' : 'error'
  const navbarClass = `navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between`

  return (
    <div className={(styles.header, navbarClass)}>
      <div className={styles.row}>
        <Link href="/auth">
          <button variant="link">
            <MdDehaze className={styles.icon} />
          </button>
        </Link>
        <Link href="/">
          <button variant="link">
            <MdHome className={styles.icon} />
          </button>
        </Link>
      </div>
      <div className={styles.row}>
        <Link href="/search">
          <button variant="link">
            <MdSearch className={styles.icon} />
          </button>
        </Link>
        <Link href="/shop/cart">
          <button variant="link">
            <FaShoppingCart className={styles.icon} />
          </button>
        </Link>
        <Link href="/auth">
          <button variant="link">
            <IoMdPerson className={styles.icon} />
          </button>
        </Link>
      </div>
    </div>
  )
}
