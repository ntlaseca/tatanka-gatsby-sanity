import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import Button from './button'

import styles from './project.module.css'

function Project (props) {
  const { _rawBody, title, mainImage } = props
  return (
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
      <div className={[styles.mainContent,styles.fillBrown].join(' ')}>
        <h1 className={styles.title}>{title}</h1>
        {_rawBody && <BlockContent blocks={_rawBody || []} />}
        <Button />
      </div>
    </div>
  )
}

export default Project
