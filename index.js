var votes= require ('./mdlVotes');
    var A = Array();
    var name = ['A','B','C'];
    for(var i=0;i<name.length;i++){
        A.push(new votes(name[i]));
        A[i].addCount();
        A[i].addCount();
        A[0].addCount();
    }
    A[2].reset();
    A[1].reset();
    A[0].Data();
    A[1].Data();

    app.listen(3000);
    app.get('/',(req, res)=>{
        res.json("A");
    });