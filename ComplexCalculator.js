/* 
   Filename: ComplexCalculator.js
   Content: A complex calculator with advanced mathematical functions and error handling.
*/

class ComplexCalculator {
  constructor() {
    this.memory = 0;
  }

  // Basic arithmetic operations
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  // Advanced mathematical functions
  power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }

  sqrt(number) {
    if (number < 0) {
      throw new Error("Square root of negative numbers is not defined.");
    }
    return Math.sqrt(number);
  }

  factorial(n) {
    if (n < 0) {
      throw new Error("Factorial for negative numbers is not defined.");
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Memory functions
  addToMemory(value) {
    this.memory += value;
  }

  subtractFromMemory(value) {
    this.memory -= value;
  }

  recallMemory() {
    return this.memory;
  }

  clearMemory() {
    this.memory = 0;
  }
}

// Usage example

const calc = new ComplexCalculator();

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(2, 6));
console.log(calc.divide(8, 2));
console.log(calc.power(2, 4));
console.log(calc.sqrt(25));
console.log(calc.factorial(5));

calc.addToMemory(10);
console.log(calc.recallMemory());
calc.subtractFromMemory(3);
console.log(calc.recallMemory());
calc.clearMemory();
console.log(calc.recallMemory());

// Output:
// 8
// 6
// 12
// 4
// 16
// 5
// 120
// 10
// 7
// 0