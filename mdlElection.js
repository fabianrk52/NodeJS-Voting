var events = require ('events');

class Election extends events.EventEmitter {
    constructor(name){
        super();
        this.name=name;
        this.array = Array();
    } 
    addVote(vote){
        this.array.push(vote);
    }
    printAll(){
        return{
            name:this.name,
        }
    }
}

module.exports=Election;

