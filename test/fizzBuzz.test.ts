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

        it('divisible by 5', () => {
            expect(fizzBuzz.isDivisibleByFive(5)).to.equal(true)
        })

        it('not divisible by 5', () => {
            expect(fizzBuzz.isDivisibleByFive(4)).to.equal(false)
        })

        it('divisible by 15', () => {
            expect(fizzBuzz.isDivisibleByFifteen(15)).to.equal(true)
        })

        it('not divisible by 15', () => {
            expect(fizzBuzz.isDivisibleByFifteen(4)).to.equal(false)
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