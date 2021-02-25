export default {
  type: 'object',
  name: 'featureTabs',
  title: 'Feature tabs',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'features',
      of: [{ type: 'richTextWithIllustration' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `Feature tabs: ${title}`
      }
    }
  }
}
