'use strict';

const minimist = require('minimist');

function Input() {

  const args = minimist(process.argv.slice(2));
  this.actions = this.getaction(args);


}

Input.prototype.getaction = function (action) {
  if (action.a || action.add) return this.getnotes(action.a || action.add);
  else { return 'error: Invalid action'; }
}

Input.prototype.getnotes = function (notes) {
  if (notes !== true) return { action: 'add', payload: notes };
  else { return 'invalid notes'; }
}




module.exports = Input;