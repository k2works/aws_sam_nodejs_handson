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

  static iterator(input) {
    const arr = [];
    const fizzBuzz = new FizzBuzz();
    for (let i = 1; i <= input; i += 1) {
      arr.push(fizzBuzz.generate(i));
    }
    return arr;
  }
}
module.exports = FizzBuzz;
