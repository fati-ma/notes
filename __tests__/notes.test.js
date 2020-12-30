'use strict';

require('@code-fellows/supergoose');

const note = require('../lib/models/notes-collection.js');
describe('note Model', () => {
  it('can create() a new note', () => {
    const obj = { text: 'test note', category: 'lab-04' };
    return note.create(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('can get() a note', async () => {
    const obj = { text: 'test note', category: 'lab-04' };
    const noteExpect = { text: 'test note', category: 'lab-04' };
    const record = await note.create(obj);
    const noteItem = await note.get(record._id);
    Object.keys(noteExpect).forEach((key) => {
      expect(noteItem[0][key]).toEqual(record[key]);
    });
  });

  it('can delete() a note item', async () => {
    const obj = { text: 'test note', category: 'lab-04' };
    const record = await note.create(obj);
    await note.delete(record._id);
    const noteItem = await note.get(record._id);
    expect(noteItem[0]).toEqual(undefined);
  });
});



//TESTS USED IN LAB-03

// const Note = require('../lib/notes.js');
// jest.spyOn(global.console, 'log');

// describe('Note Module', () => {
//   it('does nothing when execute() with invalid options', () => {
//     const note = new Note();
//     note.execute({ action: 'dd', payload: 'A new note Added' });
//     expect(console.log).not.toHaveBeenCalled();
//   });
//   it('Log out options when execute() with options', () => {
//     const note = new Note();
//     note.execute({ action: 'add', payload: 'A new note Added' });
//     expect(console.log).toHaveBeenCalled();
//   });
//   //I searched about it because I kept getting Reference Error 
//   //and Unhandeled Promise Function 
//   //and found that this line of code is the solution
//   jest.useFakeTimers();
// });