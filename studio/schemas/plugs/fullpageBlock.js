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
      name: 'header',
      type: 'string'
    },
    {
      name: 'body',
      type: 'blockContent'
    },
    {
      name: 'image',
      type: 'mainImage'
    },
    {
      name: 'illustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'cta'
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
          { title: "White", value: "#dbdbcf" },
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Fullpage block: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
