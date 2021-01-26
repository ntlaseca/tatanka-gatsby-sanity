import React from "react";
import clientConfig from "../../client-config";
import BaseBlockContent from "@sanity/block-content-to-react";
import serializers from "./serializers";

const PortableText = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
);

export default PortableText;
