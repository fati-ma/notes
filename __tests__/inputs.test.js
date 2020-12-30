
'use strict'
const Input = require('../lib/inputs.js');
jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        a: { _: [], a: 'OKK' },

    }
});



describe('Input Module', () => {

    it('valid() valid action', () => {
        const testInput = new Input();
        expect(testInput.valid({ _: [], add: 'OKK' })).toBeTruthy();
    });
    it('valid() only accepts -a and --add', () => {
        const testInput = new Input();
        let args = { _: [], b: 'NOT OKK' }
        expect(testInput.valid(args)).toBeFalsy();
    });

});