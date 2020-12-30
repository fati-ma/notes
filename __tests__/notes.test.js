'use strict'

const Input = require('../lib/inputs.js');
const Notes = require('../lib/notes.js');
jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

describe('Notes Module', () => {

    let valid = {
        action: 'add',
        payload: 'OKK'
    }

    it('when invalid action happens, should not console anything', () => {
        let options = new Notes({ actions: '-b'});
        expect(console.log).not.toHaveBeenCalled();
    });

    it('when invalid paylod(note) is added, should not console anything', () => {
        let options = new Notes({ actions: '' , payload: ''});
        expect(console.log).not.toHaveBeenCalled();
    });

    it('correct action and payload', () => {
        const opts = new Notes(valid)
        expect(console.log).toHaveBeenCalled();
    });
})
