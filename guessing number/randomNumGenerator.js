function randomNum(ran) {
    let rand = Math.floor((Math.random() * 100) + 1);
    if (rand === ran) {
        return `Correct, You guessed ${rand} and it is right `
    } else if (rand > ran) {
        return `Your guess, ${ran} is too low than ${rand}`
    } else {
        return `your guess, ${ran} is too high than ${rand}`
    }
 
}
 
 
console.log(randomNum(6))