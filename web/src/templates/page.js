import React, { useState } from "react"
import { graphql } from "gatsby"

import Hero from "../components/hero"
import GeneralArticle from "../components/general-article"
import InfoRows from "../components/info-rows"
import ImageGrid from "../components/image-grid"
import Tabs from "../components/tabs"
import CTA from "../components/cta"
import FullpageBlock from "../components/fullpage-block"
import ContactForm from "../components/contact-form"
import { TopWave, BottomWave } from "../components/wave"

import GraphQLErrorList from "../components/graphql-error-list"
import SEO from "../components/seo"
import Layout from "../containers/layout"

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;

  const content = (page._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "fullpageBlock":
          el = <FullpageBlock key={c._key} {...c} />;
          break;
        case "generalArticle":
          el = <GeneralArticle key={c._key} {...c} />;
          break;
        case "infoRows":
          el = <InfoRows key={c._key} {...c} />;
          break;
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        case "imageGrid":
          el = <ImageGrid key={c._key} {...c} />;
          break;
        case "featureTabs":
          el = <Tabs key={c._key} {...c} />;
          break;
        case "ctaPlug":
          el = <CTA key={c._key} {...c} />;
          break;
        case "contactForm":
          el = <ContactForm key={c._key} {...c} />;
          break;
        case "uiComponentRef":
          switch (c.name) {
            case "topWave":
              el = <TopWave />;
              break;
            case "bottomWave":
              el = <BottomWave />;
              break;
            default:
              break;
          }
          break;
        default:
          el = null;
      }
      return el;
    });

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;

  return (
    <Layout>
      <SEO
        title={pageTitle}
        description={site.description}
        keywords={site.keywords}
      />
      <div>{content}</div>
    </Layout>
  );
};

export default Page;
