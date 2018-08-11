/* eslint-disable import/no-extraneous-dependencies,prefer-destructuring */
const chai = require('chai');
const FizzBuzz = require('../../src/fizz_buzz');

const expect = chai.expect;

describe('A FizzBuzz generator', () => {
  it('should return the number 1 when 1 is played', () => {
    const fizzBuzz = new FizzBuzz();
    const result = fizzBuzz.generate(1);
    expect(result).to.be.equal(1);
  });
});
