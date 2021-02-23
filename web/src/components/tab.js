import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'

function Tab (props) {
  return (
    <>
      <div>
        {props.illustration && props.illustration.image && (
          <img
            src={imageUrlFor(buildImageObj(props.illustration))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.illustration.image.alt}
          />
        )}
      </div>
      <h3>{props.title}</h3>
      {props.text && (
        <div>
          <BlockContent blocks={props.text} />
        </div>
      )}
    </>
  )
}

export default Tab;