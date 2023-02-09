function findFloor(arr, val) {
  
  let leftIdx = 0;
  let rightIdx = arr.length -1;
  let array = arr;
  let value = val;

  let middleIdx = Math.floor((arr.length - 1) / 2);
  let middleVal = arr[middleIdx]

  if (middleVal < val && arr[middleIdx + 1] > val) {
    console.log(middleVal);
    return middleVal
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