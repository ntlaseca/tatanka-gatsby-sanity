import React from 'react'

import styles from './container.module.css'

const Container = ({ children }) => {
  return <section className={styles.root}>{children}</section>
}

export default Container
