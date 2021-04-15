import {FizzBuzz} from '../src/fizzBuzz'
import {expect} from 'chai'

describe('fizzbuzz', () => {
    let fizzBuzz
    
    beforeEach(function() {
        fizzBuzz = new FizzBuzz()
    })

    describe('knows when a number is', () => {
        it('divisible by 3', () => {
            expect(fizzBuzz.isDivisibleByThree(3)).to.equal(true)
        })

        it('not divisible by 3', () => {
            expect(fizzBuzz.isDivisibleByThree(2)).to.equal(false)
        })
    })

    describe('during play, returns', () => {
        it('Fizz when divisible by three', () => {
            expect(fizzBuzz.says(3)).to.equal("Fizz")
        })

        it('number when not divisible by three', () => {
            expect(fizzBuzz.says(2)).to.equal(2)
        })
    })
})