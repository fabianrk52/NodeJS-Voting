var votes= require ('./mdlVotes'),
    express = require('express'),
    app = express();
    emitter = require('events');
    


 

    var A = Array();
    var name = ['A','B','C'];
    for(var i=0;i<name.length;i++){
        A.push(new votes(name[i]));
        A[i].addCount();
        A[i].addCount();
        console.log(A[i].getAllData());
    }