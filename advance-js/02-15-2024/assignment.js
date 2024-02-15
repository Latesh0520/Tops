class Detail{
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
    }
}

class Car extends Detail{
    constructor(name,model,color,fuelCapacity){
        super(name,model,color);
        this.fuelCapacity = fuelCapacity 
    }
}
class Mobile extends Detail{
    constructor(name,model,color,ram){
        super(name,model,color);
        this.ram = ram;
    }
}

let car1 = new Car('Toyoto','2017','white','15 ltr');
console.log("🚀 ~ car1:", car1)


let mobile1 = new Mobile('OPPO A5','2019','Diamond Red','4GB');
console.log("🚀 ~ mobile1:", mobile1)
