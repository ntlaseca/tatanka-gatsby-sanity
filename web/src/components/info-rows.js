import React from "react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";

import PortableText from "./portable-text";
import CTALink from "./cta-link";
import clientConfig from "../../client-config";
import { cn } from "../lib/helpers"

import { button } from './button.module.css'
import styles from './info-rows.module.css'

const maybeImage = illustration => {
  let img = null
  if (
    illustration &&
    illustration.disabled !== true &&
    illustration.image &&
    illustration.image.asset
  ) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    )

    img = fluidProps.src
  }
  return img
};

const InfoRow = props => {
  const img = maybeImage(props.illustration);
  return (
    <div className={styles.root}>
      <div className={styles.mainContent} style={{backgroundColor: `${props.colors.value}`}}>
        <h1 className={styles.title}>{props.title}</h1>
        <PortableText blocks={props.text} />
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass={button}
          />
        )}
      </div>
      {img && <div className={styles.mainImage} style={{backgroundImage: `url(${img})`}}></div>}
    </div>
  );
};

const InfoRowFlipped = props => {
  const img = maybeImage(props.illustration);
  return (
    <div className={styles.root}>
      {img && <div className={styles.mainImage} style={{backgroundImage: `url(${img})`}}></div>}
      <div className={styles.mainContent} style={{backgroundColor: `${props.colors.value}`}}>
        <h1 className={styles.title}>{props.title}</h1>
        <PortableText blocks={props.text} />
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass={button}
          />
        )}
      </div>
    </div>
  );
};

const InfoRows = props => {
  const contentRows = (props.rows || [])
    .filter(r => !r.disabled)
    .map((r, i) => {
      return i % 2 === 0 ? <InfoRow key={r._key} {...r} /> : <InfoRowFlipped key={r._key} {...r} />;
    });

  return (
    <section>
      {contentRows}
    </section>
  );
};

export default InfoRows;
