'use strict';

function Notes(opts) {
  this.execute(opts);
}

Notes.prototype.execute = function(opts){
  if(opts.actions.action === 'add'|| opts.actions.action === 'a' )  this.add(opts);
  else{ console.log(opts.actions); }
};

Notes.prototype.add = function (opts){
  this.payload = opts.actions.payload;
  this.id = parseInt(Math.random()*1000);

  console.log('Payload =',this.payload,' ','ID=',this.id);
};

module.exports = Notes;