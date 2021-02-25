import React from 'react'

import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'

import styles from './general-article.module.css'

const GeneralArticle = props => (
  <section className={styles.root}>
    <div className={styles.grid}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>{props.title}</h1>
        <PortableText blocks={props.content} />
      </div>
    </div>
  </section>
)

export default GeneralArticle