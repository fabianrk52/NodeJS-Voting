class Votes{
    constructor(name){
        this.count=0;
        this.name=name;
        console.log("Votes");
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
    }
    addCount(){
        this.count++;
    }
}

module.exports=function addCount(){
    this.count++;
}


module.exports = (name)=>{
    var E = new Votes(name);
    return E;
}

