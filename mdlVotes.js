var events = require ('events');
    express = require('express'),
    app = express();
    config = require ('./config').events;

    module.exports= Arr = Array();
    const max =4;
class Votes extends events.EventEmitter{

    constructor(name){
        super();
        this.count=0;
        this.name=name;

        this.on(config.Vote,()=> {
            if(this.count<max){
                var tmpVote = `Vote in ${this.name}`;
                console.log(tmpVote);
                Arr.push(tmpVote);
                this.count++;
                }
            else{
                var tmpNotVote = `Cannot Vote in ${this.name}`;
                console.log(tmpNotVote);
                Arr.push(tmpNotVote);
            }
        });
        this.on(config.Reset,()=> {
            var tmpReset= `Reset in ${this.name}`;
            console.log(tmpReset);
            Arr.push(tmpReset);
            this.count=0;
        }); 
        this.on(config.Data,()=>{
            var tmpData = this.getAllData();
            console.log(tmpData);
            Arr.push(tmpData);
        });
    }
    getAllData(){
        return{
            name:this.name,
            count:this.count
       };
    }
    reset(){
        this.emit("Reset");
    }
    addCount(){
        this.emit("Vote");
    }
    Data(){
        this.emit("Data");
    }
}

module.exports = Votes;
