import {FizzBuzz} from '../src/fizzBuzz'
import {expect} from 'chai'

describe('fizzbuzz', () => {
    let fizzBuzz

    beforeEach(function() {
        fizzBuzz = new FizzBuzz()
    })

    describe('knows when a number is', () => {
        it('divisible by 3', () => {
            expect(fizzBuzz.isDivisibleBy(3, 3)).to.equal(true)
        })

        it('not divisible by 3', () => {
            expect(fizzBuzz.isDivisibleBy(2, 3)).to.equal(false)
        })

        it('divisible by 5', () => {
            expect(fizzBuzz.isDivisibleBy(5, 5)).to.equal(true)
        })

        it('not divisible by 5', () => {
            expect(fizzBuzz.isDivisibleBy(4, 5)).to.equal(false)
        })

        it('divisible by 15', () => {
            expect(fizzBuzz.isDivisibleBy(15, 15)).to.equal(true)
        })

        it('not divisible by 15', () => {
            expect(fizzBuzz.isDivisibleBy(4, 15)).to.equal(false)
        })
    })

    describe('during play, returns', () => {
        it('Fizz when divisible by three', () => {
            expect(fizzBuzz.says(3)).to.equal("Fizz")
        })

        it('Buzz when divisible by five', () => {
            expect(fizzBuzz.says(5)).to.equal("Buzz")
        })

        it('FizzBuzz when divisible by fifteen', () => {
            expect(fizzBuzz.says(15)).to.equal("FizzBuzz")
        })

        it('number when not divisible by three', () => {
            expect(fizzBuzz.says(2)).to.equal(2)
        })
    })
})