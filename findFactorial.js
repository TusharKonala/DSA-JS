// Fact(0) and Fact(1) = 1
// Fact(4) = 4*3*2*1

function findFact(n) {
  let res = 1;
  if (n === 1 || n === 0) {
    return res;
  } else {
    for (let i = n; i >= 1; i--) {
      res *= i;
    }
    return res;
  }
}

console.log(findFact(4));

// Big-O = O(n)
