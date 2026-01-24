const arr = [8, 3, 1, 7, 0, 10, 2];

function quickSort(arr){
    if(!arr)
        return;
    if(arr.length <= 1)
        return arr;

    const leftArr = [];
    const rightArr = [];
    const pivot = arr[arr.length-1];

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }

    const resArr = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    return resArr;
}

console.log(quickSort(arr));

// worst case: O(n^2)
// avg case: O(nlogn)