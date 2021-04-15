export class FizzBuzz {
    isDivisibleByThree(n: number): boolean {
        return (n % 3 === 0 ? true : false)
    }

    isDivisibleByFive(n: number): boolean { 
        return (n % 5 === 0 ? true : false)
    }

    isDivisibleByFifteen(n: number): boolean { 
        return (n % 15 === 0 ? true : false)
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