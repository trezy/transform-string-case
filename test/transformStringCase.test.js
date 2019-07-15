import { expect } from 'chai'





import { transformStringCase } from '../src/transformStringCase'





describe('transformStringCase', function () {
  describe('with a string', function () {
    describe('in snake case', function () {
      const string = 'this_is_a_string'
      const fromCase = 'snake'

      it('should transform to camel case', function () {
        expect(transformStringCase(string, fromCase, 'camel')).to.equal('thisIsAString')
      })

      it('should transform to upper camel case', function () {
        expect(transformStringCase(string, fromCase, 'upperCamel')).to.equal('ThisIsAString')
      })
    })

    describe('in camel case', function () {
      const string = 'thisIsAString'
      const fromCase = 'camel'

      it('should transform to snake case', function () {
        expect(transformStringCase(string, fromCase, 'snake')).to.equal('this_is_a_string')
      })

      it('should transform to upper camel case', function () {
        expect(transformStringCase(string, fromCase, 'upperCamel')).to.equal('ThisIsAString')
      })
    })

    describe('in upper camel case', function () {
      const string = 'ThisIsAString'
      const fromCase = 'upperCamel'

      it('should transform to snake case', function () {
        expect(transformStringCase(string, fromCase, 'snake')).to.equal('this_is_a_string')
      })

      it('should transform to camel case', function () {
        expect(transformStringCase(string, fromCase, 'camel')).to.equal('thisIsAString')
      })
    })
  })
})
