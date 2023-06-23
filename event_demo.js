const EventEmitter = require('events');
const eventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => { console.log('Event Fired!!'); });
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

