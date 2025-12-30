function findFibElement(n) {
  let res;
  if (n === 0) return 0;
  if (n === 1) return 1;
  res = findFibElement(n - 1) + findFibElement(n - 2);
  return res;
}

console.log(findFibElement(4));
console.log(findFibElement(6));

/*
Each no. n in a fib seq is a sum of n-1 and n-2 ie n = n-1 + n-2
And the fib element at index 0 and index 1 is always 0 and 1 respectively
Sample fib seq: 0,1,1,2,3,5,8
*/
