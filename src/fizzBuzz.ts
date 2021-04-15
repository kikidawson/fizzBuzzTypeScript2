export class FizzBuzz {

    isDivisibleBy(n: number, divisor: number): boolean {
        return (n % divisor === 0) ? true : false
    }

    says(n: number): string | number {
        if (this.isDivisibleBy(n, 15)) {
            return "FizzBuzz"
        }
        if (this.isDivisibleBy(n, 3)) {
            return "Fizz"
        }
        if (this.isDivisibleBy(n, 5)) {
            return "Buzz"
        }
        return n
    }
}