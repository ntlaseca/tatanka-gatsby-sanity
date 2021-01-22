import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Icon from './icons'
import BisonVideo from '../videos/bison_crf22.mp4'
import clientConfig from '../../client-config'

import styles from './hero.module.css'

const maybeImage = illustration => {
  let img = null
  if (
    illustration && 
    illustration.image && 
    illustration.image.asset && 
    !illustration.disabled
  ) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 1920 },
      clientConfig.sanity
    )

    img = fluidProps.src
  }
  return img
};

const isMain = location.pathname === 'frontpage'

function Hero(props) {
  const img = maybeImage(props.illustration)
  return (
    <section className={styles.root} style={{backgroundImage: `url(${img})`}}>
      {props.video && props.video.asset && (
        <div>
          <video autoplay="autoplay" loop>
            <source src={BisonVideo} type="video/mp4" />
          </video>
        </div>
      )}
      <Icon symbol="logo" />
    </section>
  )
}

export default Hero