(function dice(){
    let dicenum = (Math.random() * 10).toFixed(0);

    if(dicenum > 0 && dicenum < 6){
        console.log(dicenum);
    }else{
        dice();
    }
})();