function findRotatedIndex(arr, val) {
  // // let idx = array.indexOf(val)
  // // return idx

  // let leftIdx = 0;
  // let rightIdx = arr.length - 1;

  // while (leftIdx <= rightIdx) {
  //   // find the middle value
  //   let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  //   let middleVal = arr[middleIdx];

  //   if (middleVal < val) {
  //     // middleVal is too small, look at the right half
  //     leftIdx = middleIdx + 1;
  //   } else if (middleVal > val) {
  //     // middleVal is too large, look at the left half
  //     rightIdx = middleIdx - 1;
  //   } else {
  //     // we found our value!
  //     return middleIdx;
  //   }
  // }

  // // left and right pointers crossed, val isn't in arr
  // return -1;

  function findRotatedIndex(array, val) {
    const pivot = findPivotPoint(array);

    if (pivot > 0 && val >= array[0] && val <= array[pivot - 1]) {
      return binarySearch(array, val, 0, pivot - 1);
    } else {
      return binarySearch(array, val, pivot, array.length - 1);
    }
  }

  function binarySearch(array, val, start, end) {
    if (array.length === 0 || val < array[start] || val > array[end]) {
      return -1;
    }

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (array[mid] === val) {
        return mid;
      } else if (val < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return -1;
  }

  function findPivotPoint(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) {
      return 0;
    }

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] > arr[mid + 1]) {
        return mid + 1;
      } else if (arr[start] <= arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  module.exports = findRotatedIndex;

}

// this one was tough. I eneded up looking at the solution

/*

findRotatedIndex([3, 4, 1, 2], 4) // 1

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6

findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

*/

module.exports = findRotatedIndex
