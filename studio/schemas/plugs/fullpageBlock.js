export default {
  type: 'object',
  name: 'fullpageBlock',
  title: 'Fullpage block',
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'text',
      type: 'simpleBlockContent'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Fullpage block: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
