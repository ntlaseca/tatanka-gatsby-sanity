export default {
  type: 'object',
  name: 'richTextWithIllustration',
  title: 'Rich text with illustration',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'illustration',
      name: 'illustration'
    },
    {
      type: 'blockContent',
      name: 'text'
    }
  ]
}
