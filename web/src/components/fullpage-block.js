import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import CTALink from './CTALink'
import clientConfig from '../../client-config'

import { button } from './button.module.css'
import styles from './fullpage-block.module.css'

const bgImage = illustration => {
  let img = null
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 1920 },
      clientConfig.sanity
    )

    img = fluidProps.src
  }
  return img
}

const FullpageBlock = props => {
  const img = bgImage(props.illustration) 

  const { body, colors, cta, header, image } = props
  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url("${img}")`, backgroundColor: `${colors.value}` }}
    >
      <div className={styles.wrapper}>
        {header && <h1 className={styles.title}>{header}</h1>}
        {body && <BlockContent blocks={body} />}
        {image && image.asset && (
          <div className={styles.mainImage}>
            <Img
              fluid={getFluidGatsbyImage(image.asset._id, { maxWidth: 1440 }, clientConfig.sanity)}
              alt={image.alt}
              loading='lazy'
            />
          </div>
        )}
        {cta && cta.title && <CTALink {...props.cta} buttonActionClass={button} />}
      </div>
    </section>
  )
}

export default FullpageBlock
