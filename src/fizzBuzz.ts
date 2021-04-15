export class FizzBuzz {
    isDivisibleByThree(n: number): boolean {
        return this.isDivisibleBy(n, 3)
    }

    isDivisibleByFive(n: number): boolean { 
        return this.isDivisibleBy(n, 5)
    }

    isDivisibleByFifteen(n: number): boolean { 
        return this.isDivisibleBy(n, 15)
    }

    isDivisibleBy(n: number, divisor: number): boolean {
        return (n % divisor === 0) ? true : false
    }

    says(n: number): any {
        if (this.isDivisibleByFifteen(n)) {
            return "FizzBuzz"
        }
        if (this.isDivisibleByThree(n)) {
            return "Fizz"
        }
        if (this.isDivisibleByFive(n)) {
            return "Buzz"
        }
        return n
    }
}