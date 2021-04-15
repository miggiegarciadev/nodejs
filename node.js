What I learned after reading:
  How to use events in Node.js the right way By: Usama Ashraf

https: //medium.com/free-code-camp/using-events-in-node-js-the-right-way-fc50c060f23b


Node.js is event driven and written to react rather than be called.

Eventing allows
for a more decoupled approach
  - identify events
  - fire at the right time by attaching event listeners
  - observer pattern

Node has an asynchrnous event driven architecture that certain kids of objects called "emitters"
-emit functions called "listeners" to be invoked

All obhects that emit events are instances of the event emitter class.
Event Emitter - > builtin events module
Separate policy from implementation
  - impletmentation = listeners
  - policy = which listeners are subscribed to which event
  - seperating lets us resue the listener if needed by attaching to other events
  * when multiple events are attached to a single event they will be excuted synchronously and in the order that they are attached
  *or you can do setImmediate() to have it run asynchrnously

  Keep listeners as single responsiblity principle
  - good at only one thingn and perform it well

  Avoid Memory Leak
  - by making sure to remove/detach listeners that were methods/associated with a specific obhects

  Emit means to make a sound or to throw out or to release.

  Generally -> becareful in event-driven architectures and loose coupling
  - hard to keep track of dependencies
  - incrraed complexity
  - possibly trigger chains of unexpected events 
