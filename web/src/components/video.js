import React from "react";
import SanityMuxPlayer from "sanity-mux-player";

const assetDocument = {

}

function Video() {
  return (
    <SanityMuxPlayer
      assetDocument={assetDocument}
      autoload={true}
      autoplay={true}
      showControls={false}
    />
  );
}

export default Video;