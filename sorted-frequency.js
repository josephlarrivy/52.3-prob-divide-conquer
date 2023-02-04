function sortedFrequency(array, num) {
  // let startIdx = array.indexOf(num)
  // let newArray = array.slice(startIdx, array.indexOf(!num))
  // let occurrances = newArray.length
  // console.log(newArray)
  // console.log(occurrances)
  // return occurrances

  let startIdx = array.indexOf(num)
  if (array.indexOf(num) == -1) {
    return -1
  }

  if (startIdx == array.length - 1) {
    return 1
  }

  let counter = 0;
  for (let i=startIdx; i<array.length; i++) {
    if (array[i] == num) {
      counter++
    }
  }

  console.log(counter)
  return counter
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)

module.exports = sortedFrequency