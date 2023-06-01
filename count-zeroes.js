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

// function countZeroes(array) {
//   let arr = array
//   let leftIdx = 0;
//   let leftVal = 1;
//   let rightIdx = arr.length - 1;
//   let middleIdx;

//   while (leftVal !== 0) {
//     // find the middle value
//     middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];

//     if (leftVal !== 0) {
//       console.log('middleVal is not zero, move it right')
//       leftIdx = middleIdx - 1;
//       leftVal = arr[leftIdx]
//       arr = arr.slice(leftIdx, rightIdx + 1)
//     } else if (middleVal == 0) {
//       // console.log('middleVal is zero, look at the left half')
//       // rightIdx = middleIdx;
//       // arr = arr.slice(leftIdx, rightIdx)
//     }
//     // left and right pointers crossed, val isn't in arr
//     console.log(arr)
//     console.log(`middleIdx: ${middleIdx}`)
//     console.log(`LOOP`)
    
//   }
//   numZeroes = (array.length - 1) - (middleIdx)
//   console.log(numZeroes)
//   return numZeroes
// }


// function countZeroes(array) {

//   let arr = array;

//   let leftIdx = arr[0]
//   let rightIdx = arr[arr.length - 1]
//   let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//   let firstZeroIdx

//   const findFirstZero = (arr) => {
//     if (arr[middleIdx] == 0 && arr[middleIdx -1] == 1) {
//       firstZeroIdx = middleIdx;

//       console.log(middleIdx)
//       // findFirstZero(arr.slice(leftIdx, rightIdx))
//       return

//     } else if (arr[middleIdx] == 1) {
//       leftIdx = middleIdx - 1;

//       console.log(arr)
//       findFirstZero(arr.slice(leftIdx, rightIdx))

//     } else if (arr[middleIdx] == 0) {
//       rightIdx = middleIdx +1

//       console.log(arr)
//       findFirstZero(arr.slice(leftIdx, rightIdx))
      
//     }
    
//   }
  
//  findFirstZero(array)


// }
// console.log(countZeroes([1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]))
// countZeroes([0, 0])

// module.exports = countZeroes


// function countZeroes(array) {


//   const findFirst = (arr, leftIdx = 0, rightIdx = array.length - 1) => {
//     if (arr[leftIdx] == 0) {
//       // console.log(leftIdx)
//       return leftIdx;
//     } else {
//       leftIdx = leftIdx + 1
//       return findFirst(array, leftIdx, rightIdx)
//     }
//   }
  
//   return (array.length - findFirst(array))
  

// }

// console.log(countZeroes([1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]))
// // console.log(countZeroes([1, 1, 0, 0]))

// module.exports = countZeroes





// function countZeroes(arr) {
//   let firstZero = findFirst(arr)
//   if (firstZero === -1) return 0;

//   return arr.length - firstZero
// }

// function findFirst(arr, low = 0, high = arr.length - 1) {
//   if (high >= low) {
//     let mid = low + Math.floor((high - low) / 2)
//     if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
//       return mid;
//     } else if (arr[mid] === 1) {
//       return findFirst(arr, mid + 1, high)
//     }
//     return findFirst(arr, low, mid - 1)
//   }
//   return -1;
// }

// module.exports = countZeroes

function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;
  if (arr[arr.length-1] == 1) return 0;

  console.log(arr.length - firstZero)
  return arr.length - firstZero
}

const findFirst = (arr, leftIdx = 0, rightIdx = arr.length-1) => {
  // let leftIdx = 0
  // let rightIdx = arr.length - 1
  // let middleIdx = Math.floor((arr.length-1)/2)

  if (rightIdx >= leftIdx) {
    middleIdx = Math.floor((rightIdx + leftIdx) / 2)

    if ((middleIdx == 0 || arr[middleIdx - 1] == 1) && arr[middleIdx] == 0)
      return middleIdx;

    // if (arr[middleIdx] == 0) {
    //   leftIdx = middleIdx;
    //   // middleIdx = Math.floor((rightIdx - leftIdx) / 2)
    //   console.log(leftIdx, middleIdx, rightIdx)
    //   findFirst(arr, leftIdx, rightIdx)

    if (arr[middleIdx] == 1)
      return findFirst(arr, middleIdx + 1, rightIdx);

    // } else if (arr[middleIdx] == 1) {
    //   rightIdx = middleIdx;
    //   middleIdx = Math.floor((rightIdx - leftIdx) / 2)
    //   console.log(leftIdx, middleIdx, rightIdx)
    //   findFirst(arr, leftIdx, rightIdx)
    
    return (findFirst(arr, leftIdx, middleIdx - 1));
  }
  
  return -1

  // console.log(leftIdx, rightIdx, middleIdx)
}

countZeroes([1, 1, 1, 0, 0])
countZeroes([1, 1, 1, 0, 0, 0])
countZeroes([1, 1, 1, 0, 0, 0, 0])
countZeroes([1, 1, 1, 1, 0, 0])

countZeroes([1, 1, 1, 1])
