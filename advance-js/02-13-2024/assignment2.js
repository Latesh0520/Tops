class Color {
    color(color) {
        this.color = color;
        console.log("🚀 ~ color ~ color ~ color:", color)        
    }
}

class Car extends Color{    
    name(name){
        this.name = name;
        console.log("🚀 ~ Name ~ name ~ name:", this.name)        
    }
    model(model){
        this.model = model;
        console.log("🚀 ~ Model ~ model ~ model:", this.model)        
    }
}

class Mobile extends Color{    
    name(name){
        this.name = name;
        console.log("🚀 ~ Name ~ name ~ name:", this.name)        
    }
    model(model){
        this.model = model;
        console.log("🚀 ~ Model ~ model ~ model:", this.model)        
    }
}



const car = new Car();
const mobile = new Mobile(); 

car.name('TOyoto');
car.model('2020');
car.color('red');
console.log("🚀 ~ car_var:", car)

mobile.name('Oppo A5')
mobile.model('2019');
mobile.color('Diamond red');
console.log("🚀 ~ mobile:", mobile)