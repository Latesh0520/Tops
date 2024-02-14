class Color {
    color(color) {
        this.color = color;
        console.log("🚀 ~ color ~ color ~ color:", color)        
    }
}

class Cars extends Color{    
    name(name){
        this.name = name;
        console.log("🚀 ~ Name ~ name ~ name:", this.name)        
    }
    model(model){
        this.model = model;
        console.log("🚀 ~ Model ~ model ~ model:", this.model)        
    }
    price(price){
        this.price = price;
        console.log("🚀 ~ Cars ~ price ~ price:", this.price)        
    }

}
let car1 = new Cars();
car1.name('Toyota');
car1.model("2024");
car1.price('50000000');
car1.color('red');
console.log("🚀 ~ car1:", car1)

console.log(car1.price);

