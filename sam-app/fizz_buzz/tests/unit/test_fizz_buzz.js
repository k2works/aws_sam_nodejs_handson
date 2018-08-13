/* eslint-disable import/no-extraneous-dependencies,prefer-destructuring */
const chai = require('chai');
const FizzBuzz = require('../../src/fizz_buzz');

const expect = chai.expect;

describe('A FizzBuzz generator', () => {
  beforeEach(() => {
    this.fizzBuzz = new FizzBuzz();
  });

  it('should return the number 1 when 1 is played', () => {
    const result = this.fizzBuzz.generate(1);
    expect(result).to.be.equal(1);
  });

  it('should return then number 2 when 2 is played', () => {
    const result = this.fizzBuzz.generate(2);
    expect(result).to.be.equal(2);
  });

  it('should return "Fizz" when 3 is played', () => {
    const result = this.fizzBuzz.generate(3);
    expect(result).to.be.equal('Fizz');
  });

  it('should return "Fizz" when 6 is played', () => {
    const result = this.fizzBuzz.generate(6);
    expect(result).to.be.equal('Fizz');
  });
});
