import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/' aria-label="Tatanka Travel logo">
          <Icon symbol='logo' />
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      {showNav && (
        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              <Link to='/aviation/'>Aviation</Link>
            </li>
            <li>
              <Link to='/what-we-do/'>What We Do</Link>
            </li>
          </ul>
        </nav>
      )}

    </div>
  </div>
)

export default Header
