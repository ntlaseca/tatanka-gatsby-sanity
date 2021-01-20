import React from 'react'

import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'

import styles from './general-article.module.css'

const GeneralArticle = props => (
  <article className={styles.root}>
    <Container>
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{props.title}</h1>
          <PortableText blocks={props.content} />
        </div>
      </div>
    </Container>
  </article>
)

export default GeneralArticle