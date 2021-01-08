export default {
  type: 'object',
  name: 'textWithIllustration',
  title: 'Text with illustration',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'simpleBlockContent',
      name: 'text'
    },
    {
      type: 'illustration',
      name: 'illustration'
    }
  ]
}
