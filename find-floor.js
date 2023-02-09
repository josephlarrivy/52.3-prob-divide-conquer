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
      // return floorVal;
    }
    console.log('checkpoint2', floorVal)
  }

  console.log(floorVal)


  if (floorVal === undefined) {
    console.log('-1')
    return -1
  } else if (floorVal > val) {
    console.log('here', arr[middleIdx - 1])
    return arr[middleIdx -1]
  } else {
    console.log('checkpoint 3', floorVal)
    return floorVal;
  }
}





// findFloor([1, 2, 8, 10, 10, 12, 19], 9) // 8
// findFloor([1, 2, 8, 10, 10, 12, 19], 20) // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1





module.exports = findFloor