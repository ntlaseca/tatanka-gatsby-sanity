import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

import PortableText from './portableText';
import CTALink from "./CTALink";
import clientConfig from '../../client-config';

import styles from './fullpage-block.module.css'

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

const FullpageBlock = props => {
  const img = maybeImage(props.illustration)
  return (
    <section className={styles.root} style={{backgroundImage: `url(${img})`}}>
      <div className={styles.textBox}>
        <h1 className={styles.title}>
          <PortableText blocks={props.text} />
        </h1>
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )}
      </div>
    </section>
  )
}

export default FullpageBlock