// find a way to use this.keyname store value in object key

let student = {
    fname: 'Latesh',
    lname: 'Patil',
    get fullname(){
        return this.fname
    } 
};
console.log(student.fullname);
// ==============================================================

// get Key function which return all key of array in obj.

const getObjectKey = () => {
    return Object.keys(student);
}
console.log(getObjectKey());

// ==============================================================

// make fat arrow fun which give a sentence like "Today is 30, January 2024- Tuesday so today is working  day/weekend"

function getDate(){
    let date = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days =  [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    return `Today is ${date.getDate()}, ${months[date.getMonth()]}, ${date.getFullYear()} - ${days[date.getDay()]} so today is ${date.getDay() == 0 || date.getDay() == 6 ? 'weekend' : 'Working Days'}`;
}
console.log(getDate());
// ==============================================================

// make a function who print date before 2 days

const getTwoDayBefore = () =>{
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currentDate = new Date();
    let twoDayBeforeDate  = new Date(currentDate.getTime() - 1000*60*60*24*2)
    return `${twoDayBeforeDate.getDate()}, ${months[twoDayBeforeDate.getMonth()]}, ${twoDayBeforeDate.getFullYear()}`;
}
console.log(getTwoDayBefore());