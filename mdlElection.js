var events = require ('events');

class Election{
    constructor(name){
        this.name=name;
        console.log("Constructor");
    } 
    getAllData(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }


}

module.exports = (name)=>{
    var E = new Election(name);
    return E;
};


