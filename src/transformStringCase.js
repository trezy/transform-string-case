import { capitalizeFirstCharacter } from './capitalizeFirstCharacter'
import { lowercaseFirstCharacter } from './lowercaseFirstCharacter'





const toCamel = (string, index, match, capture) => {
  const modifiedString = string.replace(match, capture.toUpperCase())
  return lowercaseFirstCharacter(modifiedString)
}

const toSnake = (string, index, match, capture) => {
  const modifiedString = string.replace(match, `_${capture.toLowerCase()}`)
  return lowercaseFirstCharacter(modifiedString)
}

const toUpperCamel = (string, index, match, capture) => {
  const modifiedString = toCamel(string, index, match, capture)
  return capitalizeFirstCharacter(modifiedString)
}





const transformStringCase = (string, from, to) => {
  const regex = {
    camel: /(ID|[A-Z])/u,
    upperCamel: /(ID|[A-Z])/gu,
    snake: /_(ID|\w)/ui,
  }[from]
  const transform = {
    camel: toCamel,
    upperCamel: toUpperCamel,
    snake: toSnake,
  }[to]

  if (!regex.test(string)) {
    return string
  }

  if (['camel', 'upperCamel'].includes(from) && ['camel', 'upperCamel'].includes(to)) {
    if (from === 'camel') {
      return capitalizeFirstCharacter(string)
    }

    return lowercaseFirstCharacter(string)
  }

  let adjustedString = string
  let result = ''

  /* eslint-disable-next-line no-cond-assign */
  while ((result = regex.exec(adjustedString)) !== null) {
    const [match, capture] = result
    const { index } = result

    adjustedString = transform(adjustedString, index, match, capture)
  }

  return adjustedString
}





export { transformStringCase }
