function findRotationCount(arr) {
 
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx = Math.floor((arr.length -1)/2);
  let slice = arr;
  
  while (slice[0] > slice[middleIdx] || slice[middleIdx] > slice[arr.length -1]) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let leftVal = arr[leftIdx];

    if (leftVal > middleVal) {
      rightIdx = middleIdx;
      slice = arr.slice(leftIdx, rightIdx)
    } else if (leftVal < middleVal) {
      leftIdx = middleIdx;
      slice = arr.slice(leftIdx, rightIdx)
    }
  }
  let firstRotatedVal = slice[slice.length - 1]
  let numRotations = arr.indexOf(firstRotatedVal) + 1

  if (numRotations == arr.length) {
    return 0;
  } else {
    return numRotations
  }

}

module.exports = findRotationCount

