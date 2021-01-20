import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

import PortableText from './portableText';
import CTALink from "./CTALink";
import clientConfig from '../../client-config';

import { button } from './button.module.css'
import styles from './contact-form.module.css'

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

const ContactForm = props => {
  const img = maybeImage(props.illustration)
  return (
    <section className={styles.root} style={{backgroundImage: `url(${img})`, backgroundColor: `${props.colors.value}`}}>
      <div>
        <h2 className={styles.title}>{props.header}</h2>
        <PortableText blocks={props.text} />
      </div>
      <div className={styles.formWrapper}>
        <form action="">
          <div className={styles.firstName}>
            <label for="">First name</label>
            <input type="text"></input>
          </div>
          <div className={styles.lastName}>
            <label for="">Last name</label>
            <input type="text"></input>
          </div>
          <div className={styles.email}>
            <label for="">Email address</label>
            <input type="text"></input>
          </div>
          <div className={styles.phone}>
            <label for="">Phone</label>
            <input type="text"></input>
          </div>
        </form>
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

export default ContactForm