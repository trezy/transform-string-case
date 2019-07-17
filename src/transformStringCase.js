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

const transformers = {
  camel: toCamel,
  upperCamel: toUpperCamel,
  snake: toSnake,
}





const transformStringCase = (string, from, to) => {
  const regex = {
    camel: /(ID|[A-Z])/u,
    upperCamel: /(ID|[A-Z])/gu,
    snake: /_(ID|\w)/ui,
  }[from]
  const transform = transformers[to]

  if (!regex.test(string)) {
    return string
  }

  if (['camel', 'upperCamel'].includes(from) && ['camel', 'upperCamel'].includes(to)) {
    if (from === 'camel') {
      return capitalizeFirstCharacter(string)
    }

    return lowercaseFirstCharacter(string)
  }

  let result = ''

  /* eslint-disable-next-line no-cond-assign */
  while ((result = regex.exec(string)) !== null) {
    const [match, capture] = result

    string = transform(string, result.index, match, capture)
  }

  return string
}





export { transformStringCase }
