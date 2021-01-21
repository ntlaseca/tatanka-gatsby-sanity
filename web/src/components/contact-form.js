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
            <input type="text" name="firstName" placeholder="First name" />
          </div>
          <div className={styles.lastName}>
            <input type="text" name="lastName" placeholder="Last name" />
          </div>
          <div className={styles.email}>
            <input type="email" name="email" placeholder="Email address" />
          </div>
          <div className={styles.phone}>
            <input type="tel" name="phone" placeholder="Phone" />
          </div>
          <div className={styles.departure}>
            <label>Depart</label>
            <input type="date" name="departDate" placeholder="From" />
          </div>
          <div className={styles.return}>
            <label>Return</label>
            <input type="date" name="returnDate" placeholder="To" />
          </div>
          <div className={styles.from}>
            <input type="text" name="from" placeholder="From" />
          </div>
          <div className={styles.to}>
            <input type="text" name="to" placeholder="To" />
          </div>
          <div className={styles.interests}>
            <p>Interested in</p>
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