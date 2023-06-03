function findFloor(arr, val) {
  
  // let leftIdx = 0;
  // let rightIdx = arr.length -1;
  // let array = arr;
  // let value = val;

  // // let middleIdx = Math.floor((arr.length - 1) / 2);
  // Math.floor((leftIdx + rightIdx) / 2);
  // let middleVal = arr[middleIdx]

  // if (leftIdx > rightIdx) {
  //   return -1;
  // } else if (arr[middleIdx] === val) {
  //   return arr[middleIdx] 
  // } else if (middleVal <= val && arr[middleIdx + 1] > val) {
  //   // console.log(middleVal);
  //   return middleVal
  // } else if (middleVal > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]) {
  //   return arr[middleIdx - 1];
  // } else if (val < arr[middleIdx]) {
  //   return findFloor(arr, val, low, middleIdx - 1);
  // } else {
  //   return findFloor(arr, val, middleIdx + 1, high)
  // }
  

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx]

  if (leftIdx > rightIdx) {
    return -1;
  } else if (val >= arr[rightIdx]) {
    return arr[rightIdx];
  } else if (arr[middleIdx] === val) {
    return arr[middleIdx]
  } else if (middleVal > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]) {
    return arr[middleIdx - 1];
  } else if (val < arr[middleIdx]) {
    return findFloor(arr, val, leftIdx, middleIdx - 1);
  } else {
    return findFloor(arr, val, middleIdx + 1, rightIdx)
  }


}




findFloor([1, 2, 8, 10, 12, 13, 20], 11) //10

findFloor([1, 2, 8, 10, 10, 12, 19, 19, 19, 19], 9) // 8

findFloor([1, 2, 8, 9, 10, 10, 12, 14, 16, 17], 13) // 12
findFloor([1, 2, 8, 9, 10, 12, 14, 16, 17, 33], 18) // 17
findFloor([1, 2, 8, 9, 10, 10, 12, 14, 16, 17, 18], 3) // 2


findFloor([1, 2, 3, 4, 6], 3) // 4
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1





module.exports = findFloor
