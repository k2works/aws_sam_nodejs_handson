/* eslint-disable no-unused-vars,class-methods-use-this */
class FizzBuzz {
  generate(input) {
    if (input % 3 === 0 && input % 5 === 0) {
      return 'FizzBuzz';
    }

    if (input % 3 === 0) {
      return 'Fizz';
    }

    if (input % 5 === 0) {
      return 'Buzz';
    }

    return input;
  }
}
module.exports = FizzBuzz;
