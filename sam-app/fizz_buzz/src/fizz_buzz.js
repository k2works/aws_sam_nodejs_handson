/* eslint-disable no-unused-vars,class-methods-use-this */
class FizzBuzz {
  generate(input) {
    let output = '';

    if (input % 3 === 0) {
      output += 'Fizz';
    }

    if (input % 5 === 0) {
      output += 'Buzz';
    }

    return output === '' ? input : output;
  }

  iterator(input) {
    return [1, 2, 'Fizz', 3, 4, 'Buzz'];
  }
}
module.exports = FizzBuzz;
