// function countZeroes(array) {
//   console.log(array)
//   let firstZeroIdx = array.indexOf(0)
//   let length = array.length
//   if (firstZeroIdx == -1) {
//     console.log(0)
//     return 0
//   }
//   let numberOfZeros = (length - firstZeroIdx)
//   console.log(numberOfZeros)
//   return(numberOfZeros)
// }

// countZeroes([1,0,0,0])

function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let middleIdx;

  while (leftIdx <= rightIdx) {
    // find the middle value
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal !== 0) {
      console.log('middleVal is not zero, look at the right half')
      leftIdx = middleIdx + 1;
    } else if (middleVal == 0) {
      console.log('middleVal is zero, look at the left half')
      rightIdx = middleIdx - 1;
    }
    // left and right pointers crossed, val isn't in arr
    console.log(`middleIdx: ${middleIdx}`)
    console.log(`LOOP`)
    
  }
  numZeroes = (arr.length - 1) - (middleIdx)
  console.log(numZeroes)
  return numZeroes
}
countZeroes([1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0])

module.exports = countZeroes
