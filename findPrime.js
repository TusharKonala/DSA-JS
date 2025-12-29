// Prime no is a no. which is divisble only by 1 and itself
// isPrime(5) = true  (1 * 5 = 5 and 5*1 = 5)
// isPrime(4) = false (2*2 = 4)

function isPrime(n) {
  let isPrime = false;
  if (n <= 1) {
    return isPrime;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return isPrime;
      }
    }
    isPrime = true;
    return isPrime;
  }
}

console.log(isPrime(4));
console.log(isPrime(5));

// Big-O = O(sqrt(n))
