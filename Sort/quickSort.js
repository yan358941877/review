function quickSort(array){
  qSort(array, 0, array.length - 1)
}

function qSort(array, low, high){
  if(low < high){
    let prvoloc = partition(array, low, high)
    qSort(array, low, prvoloc - 1)
    qSort(array, prvoloc + 1, high)
  }
}

function partition(array, low, high){
  let flag = array[low]
  while(low < high){
    while(array[high] >= flag && low < high) 
      high--
    array[low] = array[high]
    while(array[low] < flag && low < high)
      low++
    array[high] = array[low]
  }
  array[low] = flag
  return low
}

