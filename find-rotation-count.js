function findRotationCount(arr) {
 
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx;
  let leftOfMiddleIdx;
  let rightOfMiddleIdx;
  
  while (leftIdx <= rightIdx) {
    // find the middle value
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    leftOfMiddleIdx = (Math.floor((leftIdx + rightIdx) / 2)) - 1;
    rightOfMiddleIdx = (Math.floor((leftIdx + rightIdx) / 2)) + 1;
    let middleVal = arr[middleIdx];
    let leftOfMiddleVal = arr[leftOfMiddleIdx]
    let rightOfMiddleVal = arr[rightOfMiddleIdx]

    // console.log(middleIdx)
    // console.log(leftOfMiddleIdx)

    if (leftOfMiddleVal < middleVal) {
      console.log('leftOfMiddleVal < middleVal')
      console.log(leftOfMiddleVal)
      console.log(middleVal)

      leftIdx = middleIdx + 1;
    } else if (leftOfMiddleVal > middleVal) {
      console.log('leftOfMiddleVal < middleVal')
      console.log(leftOfMiddleVal)
      console.log(middleVal)
      break
    } else {
      // we found our value!
      // return middleIdx;

      console.log('broke out')
    }
  }
}

module.exports = findRotationCount

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 3, 4, 5, 6])
// findRotationCount([7, 9, 11, 12, 15]) // 0