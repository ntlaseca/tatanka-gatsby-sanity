import React from "react";
import { getFluidGatsbyImage } from "gatsby-source-sanity"

import clientConfig from "../../client-config";
import Container from "./container"
import styles from "./image-grid.module.css"

// const maybeImage = illustration => {
//   let img = null
//   if (
//     illustration &&
//     illustration.disabled !== true &&
//     illustration.image &&
//     illustration.image.asset
//   ) {
//     const fluidProps = getFluidGatsbyImage(
//       illustration.image.asset._id,
//       { maxWidth: 960 },
//       clientConfig.sanity
//     )

//     img = (
//       <img className={styles.imageContainer} src={fluidProps.src} alt={illustration.image.alt} />
//     );
//   }
//   return img
// };

const ImageGrid = props => {
  const images = props.images.map(({image}) => {
    return (
      <a href="">
        <div className={styles.imgContainer}>
          <div className={styles.textOverlay}>
            {image.caption}
          </div>
          <img src={image.asset.url} alt={image.alt} />
        </div>
      </a>
    );
  });

  return (
    <Container>
      <section className={styles.root}>
        {images}
      </section>
    </Container>
  );
};

export default ImageGrid;
