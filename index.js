#!/usr/bin/env node 
'use strict';

const Input = require('./lib/inputs.js');
const Notes = require('./lib/notes.js');

//new input from user that returns note object
const userInput = new Input();
const note = new Notes(userInput);
// Notes.fetch(userInput);


// Notes.execute(userInput);