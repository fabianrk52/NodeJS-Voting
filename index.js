var elec = require ('./mdlElection'),
    votes= require ('./mdlVotes'),
    http = require ('http'),
    express = require('express'),
    app = express();

var v = elec();
v.setName("President");
var votes =votes("First");


http.createServer(app).listen(3000);
console.log("3000");