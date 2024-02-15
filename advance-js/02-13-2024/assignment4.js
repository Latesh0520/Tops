class Color {
    color(color) {
        this.color = color;
        console.log("🚀 ~ color ~ color ~ color:", color)        
    }
}

class Cars extends Color{    
    detail(name,model,price){
        this.name = name;
        this.model = model;
        this.price = price;
        console.log("🚀 ~ Name ~ name ~ name:", this)        
    }
}
let car1 = new Cars();
car1.color('red');
car1.detail('Toyota',"2010","50000000");

let car2 = new Cars();
car2.color('white');
car2.detail('Tavera',"2018","70000000");