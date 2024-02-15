// if i give 10 you should print number 3,6,9   // 15 = 3,6,9,12,15
function printMultiplesOfThree(n) {
    if (n > 0) {
        if (n % 3 === 0) {
            console.log(n);
        }
        printMultiplesOfThree(n - 1);
    }
}
printMultiplesOfThree(10);
