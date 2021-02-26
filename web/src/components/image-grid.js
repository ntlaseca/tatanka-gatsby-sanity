import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

import styles from "./image-grid.module.css"

function ProfileCard ({ image, categoryLink }) {
  return (
    <Link to={`/what-we-do#${image.caption.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className={styles.imgContainer}>
        <div className={styles.textOverlay}>
          {image.caption}
        </div>
        {image && image.asset && (
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(720)
              .height(720)
              .fit('crop')
              .url()}
          />
        )}
      </div>
    </Link>
  )
}

function ImageGrid ({ images, title }) {
  return (
    <section className={styles.root}>
      <h1 className={styles.gridTitle}>{title}</h1>
      <div className={styles.grid}>
        {images.map(image => (
          <ProfileCard {...image} key={image._key} />
        ))}
      </div>
    </section>
  )
}

ProfileCard.defaultProps = {
  caption: '',
  categoryLink: ''
}

export default ImageGrid
