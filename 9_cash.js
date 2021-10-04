function cashFunction(fn) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("Took from cash", cash[n]);
      return cash[n];
    }
    let result = fn(n);
    console.log("Took from function", result);
    cash[n] = result;
    return result;
  };
}

function factorial(n) {
  let result = 1;
  while (n !== 1) {
    result = result * n;
    n = n - 1;
  }
  return result;
}

console.log(factorial(6));

const cashFactorial = cashFunction(factorial);

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(2)
cashFactorial(5)
