function findFactorial(n) {
  let res;
  if (n === 0) {
    return 1;
  }
  res = n * findFactorial(n - 1);
  return res;
}

console.log(findFactorial(4));
console.log(findFactorial(5));
