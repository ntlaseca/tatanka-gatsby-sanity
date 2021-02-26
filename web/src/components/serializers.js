import React from "react";
import Figure from "./figure";
import MainImage from "./main-image";
import ReactPlayer from "react-player";
import InstagramEmbed from "react-instagram-embed";

import typography from "./typography.module.css";

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className={typography.responsiveTitle1}>{props.children}</h1>

        case 'h2':
          return <h2 className={typography.responsiveTitle2}>{props.children}</h2>

        case 'h3':
          return <h3 className={typography.responsiveTitle3}>{props.children}</h3>

        case 'h4':
          return <h4 className={typography.responsiveTitle4}>{props.children}</h4>

        case 'blockquote':
          return <blockquote className={typography.blockQuote}>{props.children}</blockquote>

        default:
          return <p className={typography.paragraph}>{props.children}</p>
      }
    },
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    videoEmbed: ({ node }) => <ReactPlayer url={node.url} controls />,
    instagram: ({ node }) => {
      if (!node.url) return null;
      return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
    },
  },
};

export default serializers;
