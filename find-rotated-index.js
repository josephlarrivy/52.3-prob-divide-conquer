function findRotatedIndex(arr, val) {
  // let idx = array.indexOf(num)
  // return idx

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }

  // left and right pointers crossed, val isn't in arr
  return -1;
}

/*

findRotatedIndex([3, 4, 1, 2], 4) // 1

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6

findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

*/

module.exports = findRotatedIndex
