module.exports = (def, separator=' ') => {
  let classes = []
  for (let cls of Object.keys(def)) {
    if (def[cls]) {
      classes.push(cls)
    }
  }
  return classes.join(separator)
}