const productData = require("./product.json");

function findProductByName(name){
    let filterdata = productData.filter((e) =>{
        return e.title?.includes(name);
    })
    return filterdata;
}
console.log("🚀 ~ findProductByName ~ findProductByName(name):", findProductByName("Key H"));
