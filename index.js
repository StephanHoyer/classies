module.exports =  (def, separator=' ') => {
  let classes = ''
  for (const cls in def) {
    if (def[cls]) {
      classes = classes ? cls : classes + separator + cls
    }
  }
  return classes
}