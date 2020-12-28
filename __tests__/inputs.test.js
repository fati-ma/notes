
'use strict'
const Input = require('../lib/inputs.js');
jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        a: { _: [], a: 'OKK' },
        args: { _: [], c: 'OKK2' }

    }
});



describe('Input Module', () => {

    it('valid()  invalid action', () => {
        const testInput = new Input();
        let args = { _: [], c: 'OKK2' }
        expect(testInput.valid(args)).toBeFalsy();
    });
    it('valid() returns action and massage as payload', () => {
        const testInput = new Input();
        let args = { _: [], a: 'OKK' }
        expect(testInput.valid(args)).toBeTruthy();
    });

});