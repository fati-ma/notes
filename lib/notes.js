'use strict';

class Notes {

  constructor(actions) {
    this.execute(actions);

  }
  execute(actions) {
    if (actions.action === 'add' || actions.action === 'a') this.add(actions);
    else { return false; }
  }
  add(actions) {
    this.payload = actions.payload;
    this.id = parseInt(Math.random() * 100);

    console.log('Payload =', this.payload, ' ', 'Id=', this.id);
  }
}

module.exports = Notes;
  