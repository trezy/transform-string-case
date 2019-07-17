import { transformFirstCharacter as tfc } from './transformFirstCharacter'





const capitalizeFirstCharacter = string => tfc(string, str => str.toUpperCase())





export { capitalizeFirstCharacter }
