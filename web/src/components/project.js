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
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <image src={imageUrlFor(buildImageObj(mainImage))} />
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
