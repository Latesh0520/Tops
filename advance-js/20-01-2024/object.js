let abc = {
    title: "Key Holder",
    description:
      "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    brand: "Oppo",
    gender: "male",
    price: 100,
    discountPercentage: 8,
    category: ["smartphones", "3g", "4g"],
    color: ["red", "black", "white"],
    size: ["44", "45", "42", "43"],
    isAvailable: true,
    availableStock: 54,
    rating: 485,
    totalRaters: 123,
    totalSoldUnit: 0,
};

let ab2 = {}

console.log('how to print nested object or array = ', abc.color[2] );
if(Object.keys(ab2).length > 0){
    console.log('Object is not empty');
}else{
    console.log('Object is empty');
}
console.log('Get Description = ',abc.description);
console.log('Get White Color = ',abc.color[2]);
console.log('Get 45 = ',abc.size[1]);
console.log('Average Rating = ',abc.rating / abc.totalRaters);
console.log('Selling Price=',(abc.price - (abc.discountPercentage * 100) / abc.price));

/*for (const key in abc) {
    console.log(abc[key]);
}*/

let keys = Object.keys(abc);
console.log(keys); // This give you all keys of object 

let value = Object.values(abc);
console.log(value); //This gives you all values of object



