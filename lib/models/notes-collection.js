'use strict';

const noteSchema = require('./notes-schema.js');

class NoteCollection {
  constructor() {}
  get(obj) {
    if (obj) {
      return noteSchema.find(obj);
    } else {
      return noteSchema.find({});
    }
  }
  create(record) {
    const newRecord = new noteSchema(record);
    return newRecord.save();
  }
  update(_id, record) {
    return noteSchema.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return noteSchema.findByIdAndDelete(_id);
  }
}

module.exports = new NoteCollection();