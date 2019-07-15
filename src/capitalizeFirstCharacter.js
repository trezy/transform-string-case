const capitalizeFirstCharacter = string => {
  const stringAsArray = string.split('')
  stringAsArray.splice(0, 1, stringAsArray[0].toUpperCase())
  return stringAsArray.join('')
}





export { capitalizeFirstCharacter }
