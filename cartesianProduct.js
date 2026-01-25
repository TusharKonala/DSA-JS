function cartesianProduct(arrOne, arrTwo) {
  const resArr = [];
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      resArr.push([arrOne[i], arrTwo[j]]);
    }
  }
  return resArr;
}

const arrOne = [1, 2];
const arrTwo = [3, 4, 5];
console.log(cartesianProduct(arrOne, arrTwo));

// Big-O: O(mn)
