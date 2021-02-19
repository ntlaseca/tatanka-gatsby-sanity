import React from 'react'

export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  preview: {
    select: {
      file: 'file.asset.originalFilename',
      size: 'file.asset.size',
      media: 'media',
      type: 'type'
    },
    prepare(selection) {
      return {
        title: selection.file,
        subtitle: `${Math.round(
          selection.size / 1024 / 1024
        )}Mb ${selection.type || ''} ${selection.media || ''}`
      }
    }
  },
  fields: [
    {
      name: 'file',
      title: 'File',
      type: 'file'
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: ['video/mp4', 'video/webm', 'video/ogg']
      }
    },
    {
      title: 'Media',
      name: 'media',
      type: 'string',
      options: {
        list: ['all and (max-width:768px)', 'all and (min-width:769px)']
      }
    }
  ]
}
