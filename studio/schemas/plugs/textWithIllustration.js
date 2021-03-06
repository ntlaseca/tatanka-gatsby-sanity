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
      type: 'cta',
      name: 'cta'
    },
    {
      type: 'illustration',
      name: 'illustration'
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
          { title: "Sand", value: "#a27d57" },
          { title: "Brown", value: "#360a03" },
          { title: "Black", value: "#222222" },
          { title: "White", value: "#dbdbcf" }
        ]
      }
    }
  ]
}
