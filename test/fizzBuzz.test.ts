import {FizzBuzz} from '../src/fizzBuzz'
import {expect} from 'chai'

describe('fizzbuzz', () => {
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

    describe('during play, returns', () => {
        it('Fizz when divisible by three', () => {
            let fizzBuzz = new FizzBuzz()
            expect(fizzBuzz.says(3)).to.equal("Fizz")
        })
    })
})