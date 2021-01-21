import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "./container"
import styles from "./image-grid.module.css"

export const imageQuery = graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "image-grid" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(
              maxWidth: 960
              quality: 100
              srcSetBreakpoints: [360, 720, 960]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ImageGrid = data => {
  const images = data.allFile.edges

  return (
    <Container>
      {images.map(image => (
        <a href="">
          <div className={styles.imgContainer}>
            <div className={styles.textOverlay}>
              {image.caption}
            </div>
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]}
              />
          </div>
        </a>
      ))}
    </Container>
  )
}



export default ImageGrid
