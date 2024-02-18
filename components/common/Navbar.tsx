'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className={styles['navbar']}>
      <Link href={'/'} className={styles['logo']}>FOSSMeet&apos;24</Link>
      <div className={styles['links-wrapper']}>
        <Link href={'/workshops'}>Workshops</Link>
        <Link href={'/speakers'}>Speakers</Link>
        <Link href={'/schedule'}>Schedule</Link>
        <Link href={'/sponsors'}>Sponsors</Link>
        <Link href={'/contacts'}>Contact</Link>
        <Link href={'/live'}>Live</Link>
        < Link href="/register" className={styles["register-btn"]}>
          <span>Register</span>
          <img src="arrow_right_alt.svg" alt='External link' />
        </Link>
      </div>

      <div className={styles['ham-wrapper']} onClick={() => setShowMenu(true)}>
        <img src="menu.svg" alt='Menu' />
      </div>

      {!!showMenu && <div className={styles['menu']}>
        <div className={styles['menu-top']}>
          <Link href={'/'} className={styles['logo']}>FOSSMeet&apos;24</Link>
          <div className={styles['close-wrapper']} onClick={() => setShowMenu(false)}>
            <img src="close.svg" alt="Close" />
          </div>
        </div>


        <div className={styles['menu-links-wrapper'] + ' ' + styles['links-wrapper']}>
          <Link href={'/workshops'}>Workshops</Link>
          <Link href={'/speakers'}>Speakers</Link>
          <Link href={'/schedule'}>Schedule</Link>
          <Link href={'/sponsors'}>Sponsors</Link>
          <Link href={'#contact'}>Contact</Link>
          <Link href="/register" className={styles["register-btn"]}>
            <span>Register</span>
            <img src="arrow_right_alt.svg" alt='External link' />
          </Link>
        </div>

      </div>}
    </nav>
  )
}
