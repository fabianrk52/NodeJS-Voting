var events = require ('events');


class Votes extends events.EventEmitter{
    constructor(name){
        super();
        this.count=0;
        this.name=name;
    }
    getName(){
        return this.name;
    }
    getAllData(){
        var JsonObj = {
            name:this.getName(),
            count:this.getCount()
        };
        return JsonObj;
    }
    setName(name){
        this.name=name;
    }
    getCount(){
        return this.count;

    }
    reset(){
        this.count=0;
        this.emit('reset');
    }
    addCount(){
        this.count++;
        this.emit('count');
    }
    showall(){
        this.emit('show');
    }
    resetCount(){
        console.log("Count Reset");
    }


}

module.exports = resetCount = ()=>{
    console.log("Count Reset");
};

module.exports= addCount = ()=>{
    this.count++;
};


module.exports = (name)=>{
    var E = new Votes(name);
    return E;
};

