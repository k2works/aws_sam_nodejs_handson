/* eslint-disable import/no-extraneous-dependencies,prefer-destructuring */
const chai = require('chai');
const FizzBuzz = require('../../src/fizz_buzz');

const expect = chai.expect;

describe('A FizzBuzz generator', () => {
  beforeEach(() => {
    this.fizzBuzz = new FizzBuzz();
    this.FIZZ = 'Fizz';
    this.BUZZ = 'Buzz';
    this.FIZZ_BUZZ = 'FizzBuzz';
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
    expect(result).to.be.equal(this.FIZZ);
  });

  it('should return "Fizz" when 6 is played', () => {
    const result = this.fizzBuzz.generate(6);
    expect(result).to.be.equal(this.FIZZ);
  });

  it('should return "Buzz" when 5 is played', () => {
    const result = this.fizzBuzz.generate(5);
    expect(result).to.be.equal(this.BUZZ);
  });

  it('should return "Buzz" when 10 is played', () => {
    const result = this.fizzBuzz.generate(10);
    expect(result).to.be.equal(this.BUZZ);
  });

  it('should return "FizzBuzz" when 15 is played', () => {
    const result = this.fizzBuzz.generate(15);
    expect(result).to.be.equal(this.FIZZ_BUZZ);
  });

  it('should return "FizzBuzz" when 30 is played', () => {
    const result = this.fizzBuzz.generate(30);
    expect(result).to.be.equal(this.FIZZ_BUZZ);
  });
});

describe('A FizzBuzz iterator', () => {
  beforeEach(() => {
    this.fizzBuzz = new FizzBuzz();
  });

  it('should return [1,2,"Fizz",3,4,"Buzz"] when 5 is given', () => {
    const result = this.fizzBuzz.iterator(5);
    expect(result).to.be.eql([1, 2, 'Fizz', 3, 4, 'Buzz']);
  });
});
