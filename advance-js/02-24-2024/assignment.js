let arr = [
    { name: "urvish",age:23 },
    { name: "jatin",age:23 },
    { name: "latesh",age:23 },
    { name: "riddhesh",age:23 },
    { name: "hemant",age:23 },
   ];



let names = arr.map((e)=>{
    return e.name
})
console.log("🚀 ~ names ~ names:", names)


let dataArray = arr.map((e)=>{
    return [e.name,e.age]
})
console.log("🚀 ~ dataArray ~ dataArray:", dataArray)
