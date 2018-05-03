var elec = require ('./mdlElection'),
    votes= require ('./mdlVotes'),
    express = require('express'),
    app = express();
    emitter = require('events');
    


    app.listen(3000);

var A = Array();

var one =votes("trumps");
one.addCount();
one.addCount();
var two= votes("aa");
A.push(one);
A.push(two);

app.get('/', function(req,res){
    res.send(A);
});
