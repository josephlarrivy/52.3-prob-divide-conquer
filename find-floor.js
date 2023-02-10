function findFloor(arr, val) {
  
  let leftIdx = 0;
  let rightIdx = arr.length -1;
  let array = arr;
  let value = val;

  let middleIdx = Math.floor((arr.length - 1) / 2);
  let middleVal = arr[middleIdx]

  if (middleVal <= val && arr[middleIdx + 1] > val) {
    console.log(middleVal);
    return middleVal
  } 
  
  if (middleVal > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]) {
    return arr[middleIdx - 1];
  }

  if (val < arr[middleIdx]) {
    return findFloor(arr, val, low, middleIdx - 1);
  }

  return findFloor(arr, val, middleIdx + 1, high)


}




findFloor([1, 2, 8, 10, 12, 13, 20], 11) //10

findFloor([1, 2, 8, 10, 10, 12, 19, 19, 19, 19], 9) // 8

findFloor([1, 2, 8, 9, 10, 10, 12, 14, 16, 17], 13) // 12
findFloor([1, 2, 8, 9, 10, 12, 14, 16, 17, 33], 18) // 17
findFloor([1, 2, 8, 9, 10, 10, 12, 14, 16, 17, 18], 3) // 2


findFloor([1, 2, 3, 4, 6], 3) // 4
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1





module.exports = findFloor