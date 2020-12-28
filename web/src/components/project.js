import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Button from './button'

import styles from './project.module.css'

function Project (props) {
  const { _rawBody, title, mainImage } = props
  return (
    <div className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .maxWidth(900)
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <div className={[styles.mainContent,styles.fillBrown].join(' ')}>
        <h1 className={styles.title}>{title}</h1>
        {_rawBody && <BlockContent blocks={_rawBody || []} />}
        <Button />
      </div>
    </div>
  )
}

export default Project
