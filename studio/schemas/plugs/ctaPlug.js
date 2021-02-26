export default {
  type: 'object',
  name: 'ctaPlug',
  title: 'Call to action',
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'body',
      type: 'simpleBlockContent',
      title: 'Body'
    },
    {
      name: 'ctas',
      type: 'array',
      of: [
        {
          name: 'cta',
          type: 'cta'
        }
      ]
    },
    {
      title: "Color List",
      description: "Select a background color",
      name: "colors",
      type: "colorlist", // required
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          { title: "Yellow", value: "#fad74b" },
          { title: "Orange", value: "#fe9431"},
          { title: "Red", value: "#e3222a" },
          { title: "Blue", value: "#232d3e" },
          { title: "Sand", value: "#ab8762" },
          { title: "Brown", value: "#360a03" },
          { title: "Black", value: "#222222" },
          { title: "White", value: "#dbdbcf" }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label'
    },
    prepare({ title, subtitle }) {
      return {
        title: `Call to action: ${title || 'Title not set'}`,
        subtitle
      }
    }
  }
}
