import { expect } from 'chai'





import { transformFirstCharacter } from '../src/transformFirstCharacter'





describe('transformFirstCharacter', function () {
  it('should transform the first character of the string', function () {
    const input = 'Hello World!'
    const transformer = firstCharacter => String.fromCharCode(firstCharacter.charCodeAt(0) + 1)

    expect(transformFirstCharacter(input, transformer)).to.equal('Iello World!')
  })
})
