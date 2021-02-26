import React, { useState } from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import Container from './container'
import BlockContent from './block-content'

import styles from './features.module.css'

function TabContent({ illustration, title, text }) {
  const [active, setActive] = useState(0)

  const handleClick = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  return (
    <div className={styles.tabContent} id={title.replace(/\s+/g, '-').toLowerCase()}>
      {illustration.image && illustration.image.asset && (
        <img
          src={imageUrlFor(buildImageObj(illustration.image))
            .width(720)
            .height(720)
            .fit('crop')
            .url()}
        />
      )}
      <div className={styles.tabDescription}>
        <h2 className={styles.tabTitle}>{title}</h2>
        {text && <BlockContent blocks={text || []} />}
      </div>
    </div>
  )
}

function Features({ features }) {
  return (
    <Container>
      <div className={styles.root}>
        {features.map(feature => (
          <TabContent {...feature} key={feature._key} />
        ))}
      </div>
    </Container>
  )
}

export default Features
