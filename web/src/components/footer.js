import React from 'react'

import Logo from './icons/logo'
import Instagram from './icons/instagram'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.footerWrapper}>
      <div className={styles.companyLogo}>
        <Logo />
      </div>
      <div className={styles.social}>
        <Instagram />
      </div>
      <div className={styles.siteInfo}>
        Tatanka Travel © {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  </footer>
)

export default Footer