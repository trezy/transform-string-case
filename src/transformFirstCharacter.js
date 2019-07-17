const transformFirstCharacter = (string, transformer) => {
  const stringAsArray = string.split('')
  stringAsArray.splice(0, 1, transformer(stringAsArray[0]))
  return stringAsArray.join('')
}





export { transformFirstCharacter }
