import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Icon from './icons'
import ReactPlayer from 'react-player'
import BisonMp4 from '../videos/bison.mp4'
import BisonWebm from '../videos/bison.webm'
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
}

function Hero(props) {
  const img = maybeImage(props.illustration)
  return (
    <section className={styles.root} style={{ backgroundImage: `url(${img})` }}>
      {props.video && props.video.asset && (
        <div>
          <ReactPlayer
            playing
            muted
            loop
            width="auto"
            height="auto"
            url={[
              { src: BisonWebm, type: 'video/webm' },
              { src: BisonMp4, type: 'video/mp4' },
            ]}
            config={{file: { attributes: {
              autoPlay: true,
              muted: true
            }}}}
          />
        </div>
      )}
      <Icon symbol="logo" />
    </section>
  )
}

export default Hero
