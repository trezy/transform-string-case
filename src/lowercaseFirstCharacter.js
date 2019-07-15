const lowercaseFirstCharacter = string => {
  const stringAsArray = string.split('')
  stringAsArray.splice(0, 1, stringAsArray[0].toLowerCase())
  return stringAsArray.join('')
}





export { lowercaseFirstCharacter }
