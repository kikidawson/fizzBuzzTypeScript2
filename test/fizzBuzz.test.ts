import {FizzBuzz} from '../src/fizzBuzz'
import {expect} from 'chai'

describe('knows when a number is', () => {
    it('divisible by 3', () => {
        let fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.isDivisibleByThree(3)).to.equal(true)
    })

    it('not divisible by 3', () => {
        let fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.isDivisibleByThree(2)).to.equal(false)
    })
})
