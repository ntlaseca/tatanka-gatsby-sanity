import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

import PortableText from './portableText';
import CTALink from "./CTALink";
import clientConfig from '../../client-config';

import { button } from './button.module.css'
import styles from './fullpage-block.module.css'

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
    <section className={styles.root} style={{backgroundImage: `url(${img})`, backgroundColor: `${props.colors.value}`}}>
      <div className={styles.textBox}>
        <h1 className={styles.title}>{props.header}</h1>
        <PortableText blocks={props.text} />
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass={button}
          />
        )}
      </div>
    </section>
  )
}

export default FullpageBlock