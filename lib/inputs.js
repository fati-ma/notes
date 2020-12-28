'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.actions = this.getaction(args);
    this.valid(args)
  }

  getaction(args) {
    if (args.a || args.add) return this.getnotes(args.a || args.add);
    else { return 'error: Invalid action'; }
  }
  getnotes(notes = '  ') {
    if (notes !== true) return { action: 'add', payload: notes };
    else { return 'invalid notes'; }
  }

  valid(args) {

    return (args.a || args.add) && this.actions

  } 

}

module.exports = Input;