import React from "react";
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import Container from "./container"

import styles from "./image-grid.module.css"

function ProfileCard ({ image, categoryLink }) {
  return (
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
  )
}

function ImageGrid ({ images }) {
  return (
    <Container>
      <div className={styles.root}>
        {images.map(image => (
          <ProfileCard {...image} />
        ))}
      </div>
    </Container>
  )
}

ProfileCard.defaultProps = {
  caption: '',
  categoryLink: ''
}

export default ImageGrid
