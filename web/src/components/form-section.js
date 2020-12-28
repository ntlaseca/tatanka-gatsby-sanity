import React from 'react'

import styles from './form-section.module.css'

const FormSection = () => (
  <section className={styles.root}>
    <div>
      <h1 className={styles.title}>Explore with Tatanka</h1>
    </div>
    <div className={styles.formWrapper}>
      <form action="">
        <div className={styles.firstName}>
          <label for="">First name</label>
          <input type="text"></input>
        </div>
        <div className={styles.lastName}>
          <label for="">Last name</label>
          <input type="text"></input>
        </div>
        <div className={styles.email}>
          <label for="">Email address</label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  </section>
)

export default FormSection