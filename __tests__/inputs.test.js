'use strict';

const Input = require('../lib/inputs.js');

const minimist = require('minimist');
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
  jest.useFakeTimers()
  });