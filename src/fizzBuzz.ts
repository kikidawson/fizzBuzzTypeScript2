export class FizzBuzz {
    isDivisibleByThree(n: number): boolean {
        if (n % 3 === 0) {
            return true
        } 
        return false
    }

    says(n: number): any {
        if (this.isDivisibleByThree(n)) {
            return "Fizz"
        }
        return n
    }
}