# Tatanka ✈️

Built with [Gatsby](https://www.gatsbyjs.org/) & [Sanity.io](https://www.sanity.io).

- [Installation](#installation)
- [Enable Gatsby watch mode for drafts](#enable-gatsby-watch-mode-for-drafts)
- [Usage example](#usage-example)
- [Development setup](#development-setup)
  - [Run it](#run-it)
  - [Development workflow](#development-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
git clone git@github.com:sanity-io/example-company-website-gatsby-sanity-combo.git
cd example-company-website-gatsby-sanity-combo
npm install

# Install or upgrade the Sanity CLI to
# make sure you are on v0.140.0 or higher
npm install -g @sanity/cli
# Set up Sanity.io account and project (≈ 45s)
npm run init

```

## Usage example

This project demos Sanity.io with Gatsby using our [source plugin](https://www.gatsbyjs.org/packages/gatsby-source-sanity). It's a good starter for a simple company site, a portfolio site for an agency or a personal blog with an attached portfolio.

We tried to strike a balance between a useful example and a minimal footprint to make it easier to iterate on design and content model. [Let us know](https://slack.sanity.io) should you have questions!

## Development setup

### Run it

```sh
npm start
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
```

## Deployment

```sh
# Deploy a GraphQL API and schema to Sanity
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy

# Build & deploy to Zeit's Now. Remember to set `basePath` to "/studio" in sanity.json
npm run now-deploy
```

## License

MIT
