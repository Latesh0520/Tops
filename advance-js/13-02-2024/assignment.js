class Redcolor{
    constructor(){

    }
    color(){
        return {color: 'red'};
    }
}

class Car extends Redcolor {
    constructor(name,model){ 
        super();       
        this.name = name;
        this.model = model;        
    }
}

class Mobile extends Redcolor{
    constructor(name,model){
        super();
        this.name = name;
        this.model = model;        
    }
}

const var_car = new Car('toyoto',54);
console.log("🚀 ~ car:", var_car.color())
let var_mobile = new Mobile('iphone',548);
console.log("🚀 ~ mobile:", var_mobile)