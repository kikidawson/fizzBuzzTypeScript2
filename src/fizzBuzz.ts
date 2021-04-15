export class FizzBuzz {
    isDivisibleByThree(n: number): boolean {
        if (n % 3 === 0) {
            return true
        } 
        return false
    }

    isDivisibleByFive(n: number): boolean {
        if (n % 5 === 0) {
            return true
        }
        return false
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