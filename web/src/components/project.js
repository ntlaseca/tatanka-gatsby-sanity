import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'

import styles from './project.module.css'

function Project (props) {
  const { _rawBody, title, mainImage } = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          {props.mainImage && mainImage.asset && (
            <div
              className={styles.mainImage}
              style={{
                backgroundImage: `url(${imageUrlFor(buildImageObj(mainImage))})`
              }}
            >
            </div>
          )}
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Project
