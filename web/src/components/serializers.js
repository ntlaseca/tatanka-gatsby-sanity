import React from "react";
import Figure from "./Figure";
import MainImage from "./MainImage";
import ReactPlayer from "react-player";
import InstagramEmbed from "react-instagram-embed";

import typography from "./typography.module.css";

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span>{node.author.name}</span>;
  }
  return <></>;
};

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        default:
          return <p className={typography.paragraph}>{props.children}</p>
      }
    },
    authorReference: AuthorReference,
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    videoEmbed: ({ node }) => <ReactPlayer className="mt-6 mb-6" url={node.url} controls />,
    instagram: ({ node }) => {
      if (!node.url) return null;
      return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
    },
  },
};

export default serializers;
