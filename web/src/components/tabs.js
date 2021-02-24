import React from 'react'
import PropTypes from 'prop-types'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import Container from './container'
import BlockContent from './block-content'

import styles from './tabs.module.css'

function TabContent ({ illustration, title, text }) {
  return (
    <div className={styles.tabContent}>
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
        <h2>{title}</h2>
        {text && <BlockContent blocks={text || []} />}
      </div>
    </div>
  )
}

function Tabs ({ features }) {
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

export default Tabs;
