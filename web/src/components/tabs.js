import React from 'react'
import PropTypes from 'prop-types'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'

import styles from './tabs.module.css'

function Tab ({ illustration, title, text }) {
  return (
    <div>
      {illustration.image && illustration.image.asset && (
        <img
          src={imageUrlFor(buildImageObj(illustration.image))
            .width(720)
            .height(720)
            .fit('crop')
            .url()}
        />
      )}
      <div>
        {title}
        {text && <BlockContent blocks={text || []} />}
      </div>
    </div>
  )
}

function Tabs ({ features }) {
  return (
    <div className={styles.root}>
      {features.map(feature => (
        <Tab {...feature} key={feature._key} />
      ))}
    </div>
  )
}

export default Tabs;
