function factorial(number) {
    if (number < 0) {
      return "Factorial is defined only for non-negative integers.";
    }
  
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  
    return result;
    
  }
  const result = factorial(6);
  console.log(result)