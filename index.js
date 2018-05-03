<<<<<<< HEAD
var votes= require ('./mdlVotes'),
=======
var elec = require ('./mdlElection'),
    votes= require ('./mdlVotes'),
>>>>>>> fabian
    express = require('express'),
    app = express();
    emitter = require('events');
    


<<<<<<< HEAD
 

    var A = Array();
    var name = ['A','B','C'];
    for(var i=0;i<name.length;i++){
        A.push(new votes(name[i]));
        A[i].addCount();
        A[i].addCount();
        console.log(A[i].getAllData());
    }
=======
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
>>>>>>> fabian
