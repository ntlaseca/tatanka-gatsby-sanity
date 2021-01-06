import React from 'react'
import Logo from './icons/logo'

import styles from './hero.module.css'

import { getFluidGatsbyImage } from "gatsby-source-sanity"

const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img className="w-full md:w-4/5 z-50" src={fluidProps.src} alt={illustration.image.alt} />
    );
  }
  return img;
};


function Hero(props) {
const img = maybeImage(props.illustration);
  return (
    <div
      className={styles.root}
      style={{backgroundColor: "red"}}
    >
      <Logo />
    </div>
  )
}

export default Hero