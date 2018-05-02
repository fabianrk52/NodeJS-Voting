class Votes{
    constructor(names){
        this.name = name;
        this.count=0;
        console.log("Votes");
    }
    getName(){
        return this.name;
    }
    getAllData(){
        this.getName();
        this.getCount();
    }
    setName(name){
        this.name=name;
    }
    getCount(){
        return this.count;
    }
    getName(){
        return this.name;
    }
    reset(){

    }
 
}

module.exports = (name)=>{
    console.log("V");
    var E = new Votes(name);
    return E;
}
