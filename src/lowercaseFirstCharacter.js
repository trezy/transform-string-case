import { transformFirstCharacter as tfc } from './transformFirstCharacter'





const lowercaseFirstCharacter = string => tfc(string, str => str.toLowerCase())





export { lowercaseFirstCharacter }
