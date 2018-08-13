/* eslint-disable no-console */

const FizzBuzz = require('./src/fizz_buzz');

const fizzBuzz = new FizzBuzz();
let response;


exports.lambda_handler = async (event, context, callback) => {
  try {
    const { input } = event.pathParameters;
    const ret = await fizzBuzz.generate(input);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: ret,
      }),
    };
  } catch (err) {
    console.log(err);
    callback(err, null);
  }

  callback(null, response);
};
