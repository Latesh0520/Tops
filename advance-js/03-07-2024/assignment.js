const productData = require("./product.json");
// console.log("🚀 ~ productData:", productData)

// 1. product by brand name
function filterProductByBrandName(brandName){
    let product = productData.filter((e)=>{
        return e.brand = brandName;
    });
    return product;
}
// console.log('filterProductByBrandName', filterProductByBrandName('Oppo'));

// 2. product by price lover then equel to
function filterProductByLowerPrice(price){
    let product = productData.filter((e)=>{
        return e.price <= price;
    });
    return product;
}
// console.log("🚀 ~ filterProductByLowerPrice ~ filterProductByLowerPrice:", filterProductByLowerPrice(12))

// 3. top 5 porduct rating wise
function getTopFiveProductByRating() {
    products = [];
    productData.map((e,i)=>{
        let overlallRating = e.rating / e.totalRaters;
        products[i] = e;
        products[i]['overlallRating'] = !isNaN(overlallRating) ? overlallRating.toFixed() : 0;
    })
    let ascSortedproducts  = productData.sort((c1, c2) => c2.overlallRating - c1.overlallRating);
    let filterData = ascSortedproducts.slice(0,5);
    return filterData;
}
// getTopFiveProductByRating()
// console.log("🚀 ~ getTopFiveProductByRating():", getTopFiveProductByRating());

// 4. give a products which have available size which give user
function checkSizeAvailableInWhichProducts(size){
    let filterData = productData.filter((e,i)=>{ 
        return e.size.includes(size);
    });
    console.log(filterData);
}
// checkSizeAvailableInWhichProducts("44");

// 5. give top 5 chipest product (consider price after discount)
function getTopFiveProductByChipestPrice() {
    products = [];
    productData.map((e,i)=>{
        // console.log("🚀 ~ productData.forEach ~ e.price:", e.price)
        // let discountPrice = (e.price / e.discountPercentage) * 100
        // console.log("🚀 ~ productData.forEach ~ discountPrice:", discountPrice)
        
        // let sellingPrice =  e.price - discountPrice;
        // console.log("🚀 ~ productData.forEach ~ sellingPrice:", sellingPrice)
        e.sellingPrice = !isNaN(sellingPrice) ? sellingPrice : 0;
    })
    productData.sort((c1, c2) => c2.sellingPrice - c1.sellingPrice);
    let filterData = productData.slice(0,5);
    return filterData;
}
console.log("🚀 ~ getTopFiveProductByChipestPrice ~ getTopFiveProductByChipestPrice:", getTopFiveProductByChipestPrice())

// 6. total values product available
function getTotalAvailableStockamount(){
    let totalPrice = 0;
    productData.map((e,i)=>{
        if(e.availableStock > 0){
            totalPrice += e.price * e.availableStock;
        }
    })
    return totalPrice;
}
// console.log("🚀 ~ getTotalAvailableStockamount ~ getTotalAvailableStockamount:", getTotalAvailableStockamount())

