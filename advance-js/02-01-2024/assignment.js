
const getTwoDayBefore = (date) =>{
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currentDate = new Date();
    let twoDayBeforeDate  = new Date(currentDate.getTime() - 1000*60*60*24*date)
    return `${twoDayBeforeDate.getDate()}, ${months[twoDayBeforeDate.getMonth()]}, ${twoDayBeforeDate.getFullYear()}`;
}
console.log(getTwoDayBefore(5));

