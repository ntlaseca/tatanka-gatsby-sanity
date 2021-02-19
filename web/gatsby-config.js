require('dotenv').config()

const path = require('path')
const clientConfig = require("./client-config");

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'videos',
        path: path.join(__dirname, 'src', 'videos')
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: false
      }
    }
  ]
}