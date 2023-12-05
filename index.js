function checkEven() {
    const number = parseInt(prompt('Enter a number to check if it is even:'));
     if(number % 2 === 0) {
        console.log(`${number} is even.`);
  }
  else{
    console.log(`${number} is odd.`);
  }
}
  
  function printNumbersRange() {
    const n1 = parseInt(prompt('Enter the starting number for the range:'));
    const n2 = parseInt(prompt('Enter the ending number for the range:'));
  
    for (let num = n1; num <= n2; num++) {
      console.log(num);
    }
  }
  
  function calculateSum() {
    const n1 = parseInt(prompt('Enter the starting number for the sum:'));
    const n2 = parseInt(prompt('Enter the ending number for the sum:'));
  
    let sum = 0;
    for (let num = n1; num <= n2; num++) {
      sum += num;
    }
  
    console.log(`The sum of the numbers from ${n1} to ${n2} is: ${sum}`);
  }
  

  checkEven();
  printNumbersRange();
  calculateSum();