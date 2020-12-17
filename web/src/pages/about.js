import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/hero'

import { responsiveTitle1, paragraph } from '../components/typography.module.css'
import styles from '../components/project.module.css'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Hero />
      <section className={styles.grid}>
        <div className={[styles.mainContent,styles.fillBrown].join(' ')}>
          <h1 className={styles.title}>Why Fly Private?</h1>
          <p className={paragraph}>
            If we are being honest, everyone hates going to the airport these days. Leave 2 hours before the flight, sit around a dirty terminal with strangers, only to have the airline cancel or delay the flight with impunity. The hassle and frustrations combined with sitting on a dirty plane 2 inches from a total stranger isn't anyones idea of a great day.
          </p>
          <p className={paragraph}>
            At Tatanka Travel, we know all this because we dealt with this for far too long. We take everything you hate about airline travel and turn it into a simple, efficient and enjoyable experience. You go on your schedule, with your people, with your luggage, without security. and land where you want- your final destination.
          </p>
          <p className={paragraph}>
            Once you land, we will have a car waiting plane side to finish the last mile of your journey
          </p>
          <p className={paragraph}>
            It simply doesn’t get any easier or faster.
          </p>
        </div>
        <div
          className={styles.mainImage}
          style={{
            backgroundImage: ``
          }}
        >
        </div>
      </section>
      <section className={styles.grid}>
        <div
          className={styles.mainImage}
          style={{
            backgroundImage: ``
          }}
        >
        </div>
        <div className={[styles.mainContent,styles.fillSand].join(' ')}>
          <h1 className={styles.title}>Explore in Style</h1>
          <p className={paragraph}>
            On average, we save US based customers 50% on their airline travel time by flying private. You will hear a lot of operators tough fleet size, but what they don't tell you is that they only fly jets, requiring more runway and severely limiting your airport choices, as well as costing quite a bit more.
          </p>
          <p className={paragraph}>
            With Tatanka Travel, we use jets but are able to supplement them with turboprops and helicopters on some trips to ensure you land on time and as close as possible.
          </p>
          <p className={paragraph}>
            We value relationships, and nothing says more about the value of a relationship than an in-person visit. What may seem like a quick visit to the principle speaks volumes to customers, employees, and potential partners.
          </p>
          <p className={paragraph}>
            We also value family, so nothing is more important than time spent with them. Being home for dinner, soccer games and other occasions is paramount.
          </p>
          <p className={paragraph}>
            Flying private lets you be present at home, while also allowing you to be present on the road with your business. 
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
