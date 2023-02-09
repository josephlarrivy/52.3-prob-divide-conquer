function findFloor(arr, val) {
  
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let floorVal;
  let middleIdx;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
      floorVal = arr[middleIdx]
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
      floorVal = arr[middleIdx]
    } else {
      // we found our value!
      floorVal = arr[middleIdx]
      console.log('checkpoint1', floorVal)
      break
    }
    console.log('checkpoint2', floorVal)
  }

  if (floorVal < val) {
    console.log(floorVal)
  } else if (floorVal < val && arr[middleIdx - 1] !== 'undefined') {
    console.log(arr[middleIdx-1])
  } else {
    console.log('-1')
  }
}




findFloor([1, 2, 8, 10, 10, 12, 19], 5) //2

findFloor([1, 2, 8, 10, 10, 12, 19], 9) // 8

findFloor([1, 2, 8, 9, 10, 10, 12, 14, 16, 17, 19], 13) // 12
findFloor([1, 2, 8, 9, 10, 10, 12, 14, 16, 17, 19], 18) // 17
findFloor([1, 2, 8, 9, 10, 10, 12, 14, 16, 17, 19], 3) // 2


findFloor([1, 2, 8, 10, 10, 12, 19], 20) // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1





module.exports = findFloor