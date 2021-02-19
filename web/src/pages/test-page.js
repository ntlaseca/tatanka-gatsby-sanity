import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Errors from '../components/errors'
import Page from '../templates/page'
import Layout from '../containers/layout'

export const dataQuery = graphql`
  query {
    image1: file(relativePath: { eq: "bison_01.jpg" }) {
      ...fluidImage
    }
  }
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(
        maxWidth: 1440
        quality: 100
        traceSVG: {
          color: "rgb(106,98,250)"
        }
        srcSetBreakpoints: [360, 720, 1080, 1440]
      ) {
        ...GatsbyImageSharpFluid
      }
    }
    publicURL
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return <Errors errors={errors} />
  }

  return (
    <Layout>
      <SEO
        title="Test"
      />
      <div>
        <Img
          fluid={props.image1.childImageSharp.fluid}
          alt="Test image"
        />
      </div>
    </Layout>
  )
}

export default IndexPage
