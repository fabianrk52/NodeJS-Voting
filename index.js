var elec = require ('./mdlElection'),
    votes= require ('./mdlVotes'),
    http = require ('http'),
    express = require('express'),
    app = express(),
    Emitter = require('events'),
    config = require('./config')

    myEmtr = new Emitter();

/*    
var E = elec();
E.setName("President");
var votes =votes("trumps");
votes.addCount();
console.log(votes.getAllData());
votes.reset();
console.log(votes.getAllData());
*/

http.createServer(app).listen(3000);
console.log("3000");

/*
myEmtr.on('hello', ()=>{
    console.log('hello')
});
*/

myEmtr.emit("hello");
