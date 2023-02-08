function sortedFrequency(arr, val) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx;

  while (leftIdx <= rightIdx) {
    // find the middle value
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal == val || middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }

  let startIdx = middleIdx
  let counter = 0;
  
  for (let i=startIdx; i<arr.length; i++) {
    if (arr[i] == val) {
      counter++
    }
  }

  if (counter == 0) {
    return -1
  } else {
    console.log(counter)
    return counter
  }
  

}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)

module.exports = sortedFrequency
