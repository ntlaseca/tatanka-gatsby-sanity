export default {
  type: 'object',
  name: 'imageGrid',
  title: 'Image grid',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'images',
      of: [{ type: 'illustration' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `Photo grid: ${title}`
      }
    }
  }
}
