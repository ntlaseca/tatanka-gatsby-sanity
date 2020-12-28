import React from 'react'
import Button from './button'

import styles from './big-section.module.css'

const BigSection = () => (
  <section className={styles.root}>
    <div className={styles.textBox}>
      <h1 className={styles.title}>
        Unbelievable<br/>
        excursions<br/>
        that you will<br/>
        never forget
      </h1>
      <Button />
    </div>
  </section>
)

export default BigSection