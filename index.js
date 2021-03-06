function findMinAndRemove(array) {
  let min = array[0]
  let minIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function selectionSort(array) {
  const sortedArray = []
  while (array.length) {
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray
}
