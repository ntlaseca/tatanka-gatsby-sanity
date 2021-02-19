import React, { PureComponent } from "react";
import ReactPlayer from "react-player";

class Video extends PureComponent {
  render() {
    return (
      <ReactPlayer
        width="auto"
        height="auto"
        pip
        playing="true"
        loop="false"
        config={{ file: { forceHLS: true } }}
        url="https://stream.mux.com/jzwTcDKcDKSLBvFX3ObOpeYOJajjG2yK1A02ACC34zj00"
      />
    );
  }
}

export default Video;