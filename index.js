module.exports =  (def, separator=' ') => {
  let classes = ''
  for (const cls in def) {
    if (def[cls]) {
      classes = classes ? classes + separator + cls : cls
    }
  }
  return classes
}