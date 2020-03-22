const EventEmitter = require('events');

// create class
class MyEmittier extends EventEmitter { }

// Init Object
const myEmitter = new MyEmittier();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!')); 

// Inite Event
myEmitter.emit('event'); 
myEmitter.emit("event"); 
myEmitter.emit("event"); 
myEmitter.emit("event"); 