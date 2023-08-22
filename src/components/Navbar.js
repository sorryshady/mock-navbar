import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Dropdown from './Dropdown'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null)
  const handleLinkEnter = (dropdown) => {
    setActiveLink(dropdown)
  }
  const handleLinkLeave = () => {
    setActiveLink(null)
  }
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li
          onMouseEnter={() => {
            handleLinkEnter('properties')
          }}
          onMouseLeave={handleLinkLeave}
          className={`${activeLink === 'properties' && styles.activeLink}`}
        >
          For Properties
          <div
            className={`${styles.dropdown} ${
              activeLink === 'properties' ? styles.active : styles.inactive
            }`}
          >
            <Dropdown type={'properties'} />
          </div>
        </li>
        <li
          onMouseEnter={() => handleLinkEnter('renters')}
          onMouseLeave={handleLinkLeave}
          className={`${activeLink === 'renters' && styles.activeLink}`}
        >
          For Renters
          <div
            className={`${styles.dropdown} ${
              activeLink === 'renters' ? styles.active : styles.inactive
            }`}
          >
            <Dropdown type={'renters'} />
          </div>
        </li>
      </ul>
      <p className={styles.logo}>Jetty</p>
      <ul className={styles.links}>
        <li>About</li>
        <li className={styles.signIn}>
          <p>Sign in</p>
          <i className={`fa-solid fa-circle-user ${styles.logoFill}`}></i>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
