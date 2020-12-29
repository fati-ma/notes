'use strict';

const mongoose = require('mongoose');
const supergoose = require('supergoose');

const note = new mongoose.Schema({
  text: { type: 'string', required: true },
  category: { type: 'string', required: true },
});
note.plugin(supergoose,[''])

module.exports = mongoose.model('note', note);

//https://openbase.io/js/supergoose/documentation