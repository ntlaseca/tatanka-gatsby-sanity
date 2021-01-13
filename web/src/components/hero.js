import React from 'react'

import Icon from './icons'
import clientConfig from '../../client-config'

import styles from './hero.module.css'

import { getFluidGatsbyImage } from 'gatsby-source-sanity'

const maybeImage = illustration => {
  let img = null
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 2160 },
      clientConfig.sanity
    )

    img = fluidProps.src
  }
  return img
};


function Hero(props) {
  const img = maybeImage(props.illustration)
  return (
    <section className={styles.root} style={{backgroundImage: `url(${img})`}}>
      <Icon symbol="logo" />
    </section>
  )
}

export default Hero