/* eslint-disable no-unused-vars,class-methods-use-this */
class FizzBuzz {
  generate(input) {
    if (input % 3 === 0) {
      return 'Fizz';
    }

    if (input === 5) {
      return 'Buzz';
    }

    return input;
  }
}
module.exports = FizzBuzz;
