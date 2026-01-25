function mergeSort(numbers){
    if (numbers.length < 2) return numbers;

    const mid = Math.floor(numbers.length / 2);
    const leftHalf = mergeSort(numbers.slice(0, mid));
    const rightHalf = mergeSort(numbers.slice(mid));

    return mergeSortedArrays(leftHalf, rightHalf);
}

function mergeSortedArrays(left, right){
    const result = [];
    let leftIdx = 0, rightIdx = 0;
   
    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx] <= right[rightIdx]){
            result.push(left[leftIdx++]);
        }else{
            result.push(right[rightIdx++]);
        }
    }

    return [
        ...result,
        ...left.slice(leftIdx),
        ...right.slice(rightIdx)
    ]
    
}

const arrOfNums = [38, 27, 43, 3, 9, 82, 10];
const result = mergeSort(arrOfNums);
console.log(result);

// Big-O = O(nlogn)