var elec = require ('./mdlElection'),
    votes= require ('./mdlVotes'),
    express = require('express'),
    app = express();
    emitter = require('events');
    


 

    var A = Array();
    var one =votes("trumps");
    one.addCount();
    one.addCount();
    one.on('reset',resetCount());
    one.on('show',getAllData());
    /*app.get('/', function(req,res){
        res.send(A);
    });
    app.listen(3000);
    */
