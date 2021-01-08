import React from "react";
import PortableText from "./portableText";
import { cn } from "../lib/helpers"

import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

import styles from './info-rows.module.css'

const maybeImage = illustration => {
  let img = null;
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
    );

    img = (
      <img src={fluidProps.src} alt={illustration.image.alt} />
    );
  }
  return img;
};

const InfoRow = props => {
  const img = maybeImage(props.illustration);
  return (
    <div className={styles.root}>
      <div className={cn(styles.mainContent, styles.fillBrown)}>
        <h1 className={styles.title}>{props.title}</h1>
        <PortableText blocks={props.text} />
      </div>
      {img && <div className={styles.mainImage}>{img}</div>}
    </div>
  );
};

const InfoRowFlipped = props => {
  const img = maybeImage(props.illustration);
  return (
    <div className={styles.root}>
      {img && <div className={styles.mainImage}>{img}</div>}
      <div className={cn(styles.mainContent, styles.fillBrown)}>
        <h1 className={styles.title}>{props.title}</h1>
        <PortableText blocks={props.text} />
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
