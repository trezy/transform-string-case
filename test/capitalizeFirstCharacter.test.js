import { expect } from 'chai'





import { capitalizeFirstCharacter } from '../src/capitalizeFirstCharacter'





describe('capitalizeFirstCharacter', function () {
  it('should capitalize the first character of a string', function () {
    expect(capitalizeFirstCharacter('fooBar')).to.equal('FooBar')
  })
})
