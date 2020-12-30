#!/usr/bin/env node
'use strict';

const Input = require('./lib/inputs.js');
const Notes = require('./lib/notes.js');

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/NotesCLI';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch((err) => {
    console.log('Connection Failed', err);
  });

const arg = new Input();
const note = new Notes(arg);

async function doExecute(){
    if (arg.valid())  {
        console.log("before execution!")
        await note.execute(arg);
        mongoose.disconnect();
    } else {
        help();
    }
}
// arg.valid() ? note.execute(arg).then(mongoose.disconnect) : help();

function help() {
  console.log(`

  The is a wrong value

  note USAGE: -a(--add) <note> -c(--category) <note-category>
  -a(--add): String -the action you want to do 
  -c(--category): category of the note
  `);
}

doExecute();