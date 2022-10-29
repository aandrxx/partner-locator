
/* Get new filters array adds or replaces item by field
* @param {Array} array - source array
* @param {Object} value - new array item
*/
export function addFiltersItem(array, value) {
  let newArray = array.slice()
  const currentIndex = newArray.findIndex(item => item.field === value.field)
  if(currentIndex !== -1) {
    newArray.splice(currentIndex, 1, value)
  } else {
    newArray.push(value)
  }
  return newArray
}
