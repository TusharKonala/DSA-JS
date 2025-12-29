const fibSeq = [0, 1];

function fibonacci(n) {
  for (let i = 2; i < n; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  return fibSeq;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));

// Big-O = O(n)
