'use strict';

const minimist = require('minimist');

class Input {
  constructor() {

    const args = minimist(process.argv.slice(2));

    this.action = this.getAction(Object.keys(args)[1]);
    this.payload = this.getNote(Object.values(args)[1]);
    this.category = this.getCategory(Object.keys(args)[2] ? Object.keys(args)[2] : '');
    this.categoryName = this.categoryType(Object.values(args)[2]);

    if (this.action == false) {
      console.log('Invalid action');
    } else if (this.payload == false) {
      console.log('Invalid payload, Please enter a correct note');
    } 
  }

  getAction(args) {
    if (args == 'add' || args == 'a' || args == 'list' || args == 'delete') {
      return args;
    } else {
      return '';
    }
  }

  getNote(args) {
    if (args !== undefined && args !== '') {
      return args;
    } else {
      return '';
    }
  }

  getCategory(args) {
    if (args == 'category') {
      return args;
    } else {
      return '';
    }
  }
  categoryType(args) {
    if (args !== undefined && args !== '') {
      return args;
    } else {
      return '';
    }
  }

  valid() {
    return this.action || this.category;
  }
}

module.exports = Input;