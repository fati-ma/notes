'use strict';

// const mongoose = require('mongoose');
// const MONGODB_URI = 'mongodb://localhost:27017/NotesCLI';

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// const mongoose = require('mongoose');

// const note = new mongoose.Schema({
//   text: { type: 'string', required: true },
//   category: { type: 'string', required: true },
// });

// module.exports = mongoose.model('note', note);

const minimist = require('minimist');
const Input = require('../lib/inputs.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'This is a new note',
  };
});

  describe('getAction', () => {
    it('Given right action and text', () => {
      const arg = new Input();
      console.log(arg, 'this is the arg');
      expect(arg.getAction('add' || 'a')).toBeTruthy() &&
        expect(arg.getNote('Fatima')).toBeTruthy();
    });
    it('valid() If the user doesn’t provide any text', () => {
      const arg = new Input();
      expect(arg.getNote('')).toBeFalsy();
    });
    it('valid() If the user doesn’t provide a valid action', () => {
      const arg = new Input();
      expect(arg.getAction('no action provided')).toBeFalsy();
    });
  //I searched about it because I kept getting Reference Error 
  //and Unhandeled Promise Function 
  //and found that this line of code is the solution
//   jest.useFakeTimers()
  });