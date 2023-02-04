function countZeroes(array) {
  console.log(array)
  let firstZeroIdx = array.indexOf(0)
  let length = array.length
  if (firstZeroIdx == -1) {
    console.log(0)
    return 0
  }
  let numberOfZeros = (length - firstZeroIdx)
  console.log(numberOfZeros)
  return(numberOfZeros)
}

countZeroes([1,0,0,0])

module.exports = countZeroes