export default {
  title: "Color List",
  description: "Select a color",
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