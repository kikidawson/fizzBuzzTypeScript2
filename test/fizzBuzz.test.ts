import {FizzBuzz} from '../src/fizzBuzz'
import {expect} from 'chai'

describe('fizzbuzz', () => {
    it('should return Fizz if input is 3', () => {
        let fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.input(3)).to.equal('Fizz')
    })
})
