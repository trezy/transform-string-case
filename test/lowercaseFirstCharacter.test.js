import { expect } from 'chai'





import { lowercaseFirstCharacter } from '../src/lowercaseFirstCharacter'





describe('lowercaseFirstCharacter', function () {
  it('should lowercase the first character of a string', function () {
    expect(lowercaseFirstCharacter('FooBar')).to.equal('fooBar')
  })
})
