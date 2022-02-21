var events=require('events');
var eventEmitter=new events.EventEmitter;
var listener1=function listener(){
    console.log('listener1 clicked  ')
}
var listener2=function listener(){
    console.log('listener2 clicked  ')
}
eventEmitter.on('myEvent',listener2)
eventEmitter.on('myEvent',listener1)
eventEmitter.emit('myEvent');
console.log("number of listners :"+eventEmitter.listenerCount('myEvent'))
console.log("listners :"+eventEmitter.listeners('myEvent'))
eventEmitter.removeListener('myEvent',listener1);
console.log("number of listners :"+eventEmitter.listenerCount('myEvent'))
console.log("listners :"+eventEmitter.listeners('myEvent'))