import React from 'react'
import Header from './header'
import Logo from './icons/logo'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyLogo}>
          <Logo height='4em' />
        </div>
        <div className={styles.siteInfo}>
          Tatanka Travel © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  </>
)

export default Layout
