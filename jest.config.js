//I searched about it because I kept getting : 
//Mongoose: looks like you're trying to test a Mongoose app with Jest's default jsdom test environment. Please make sure you read Mongoose's docs on configuring Jest to test Node.js apps: http://mongoosejs.com/docs/jest.html
//and found that this code is the solution

module.exports = {
    testEnvironment: 'node'
  };