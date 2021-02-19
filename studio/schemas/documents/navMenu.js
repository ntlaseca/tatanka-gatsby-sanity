export default {
  type: 'document',
  name: 'navigationMenu',
  title: 'Navigation menu',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'cta' }]
    }
  ]
}
