export default {
  type: 'object',
  name: 'pricing',
  title: 'Pricing',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'boolean',
      name: 'transparentCTAs',
      title: 'Enable gradient background'
    }
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return {
        title: `Pricing module: ${title}`
      }
    }
  }
}
