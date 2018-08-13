/* eslint-disable import/no-extraneous-dependencies,no-shadow,no-unused-vars,prefer-destructuring */
/* eslint-env mocha */

const chai = require('chai');
const app = require('../../app.js');

const expect = chai.expect;
let event;
let context;


describe('Tests index', () => {
  event = {
    path: '/fizz_buzz/generate/5',
    pathParameters: {
      input: '5',
    },
  };

  it('verifies successful response', async () => {
    const result = await app.lambda_handler(event, context, (err, result) => {
      expect(result).to.be.an('object');
      expect(result.statusCode).to.equal(200);
      expect(result.body).to.be.an('string');

      const response = JSON.parse(result.body);

      expect(response).to.be.an('object');
      expect(response.message).to.be.eql('Buzz');
    });
  });
});
