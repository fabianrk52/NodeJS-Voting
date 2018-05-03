var events = require ('events');
    express = require('express'),
    app = express(),
    A = Array();

    module.exports=function printA(){
        return A;
    };
class Votes extends events.EventEmitter{

    constructor(name){
        super();
        this.count=0;
        this.name=name;

        this.on("Vote",(name)=> {
            console.log(`Vote in ${name}`);
            A.push(`Vote in ${name}`);
                
        });
        this.on("Reset",(name)=> {
            console.log(`Reset in ${name}`);
            A.push(`Reset in ${name}`);
        }); 
        this.on("data",()=>{
            console.log(`Data ${this.name}:`);
            console.log(this.getAllData());
            A.push(this.getAllData());
        });
    }
    getName(){
        return this.name;
    }
    getAllData(){
        return{
            name:this.getName(),
            count:this.getCount()
       };
    }
    setName(name){
        this.name=name;
    }
    getCount(){
        return this.count;
    }
    reset(){
        this.count=0;
        this.emit("Reset", this.name);
    }
    addCount(){
        this.count++;
        this.emit("Vote",this.name);
    }
    Data(){
        this.emit("data");
    }

}

module.exports = Votes;
