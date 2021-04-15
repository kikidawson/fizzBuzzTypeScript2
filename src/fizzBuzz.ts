export class FizzBuzz {
    isDivisibleByThree(n: number): boolean {
        return (n % 3 === 0 ? true : false)
    }

    isDivisibleByFive(n: number): boolean { 
        return (n % 5 === 0 ? true : false)
    }

    says(n: number): any {
        if (this.isDivisibleByThree(n)) {
            return "Fizz"
        }
        if (this.isDivisibleByFive(n)) {
            return "Buzz"
        }
        return n
    }
}