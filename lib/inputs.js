'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.actions = this.getAction(args);
    this.valid(args)
  }

  getAction(args) {
    if (args.a || args.add) return this.getNotes(args.a || args.add);
    else { return 'error: Invalid action'; }
  }
  getNotes(notes = '  ') {
    if (notes !== true) return { action: 'add', payload: notes };
    else { return 'invalid notes'; }
  }

  valid(args) {

    return (args.a || args.add) && this.actions

  } 

}

module.exports = Input;