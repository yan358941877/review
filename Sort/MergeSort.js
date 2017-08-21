// function merge(partArr, tempArr, s, m, e){
//   var j = m + 1,
//       k = s
//   for(; s<=m && j<=e; k++){
//       if(partArr[s] < partArr[j]){
//           tempArr[k] = partArr[s++]
//       }else {
//           tempArr[k] = partArr[j++]
//       }
//   }
//   while(s<=m){
//       tempArr[k++] = partArr[s++]
//   }
//   while(j<=e){
//       tempArr[k++] = partArr[j++]
//   }
// }

// function mSort(array, resultArr, s, e){
//   var m = 0,
//       tempArr = []
//   if(s === e) resultArr[s] = array[s]
//   else {
//       m = Math.floor((s + e)/2)
//       mSort(array, tempArr, s, m)
//       mSort(array, tempArr, m+1, e)
//       merge(tempArr, resultArr, s, m, e) 
//   }
// }
// function mergeSort(array){
//   var resultArr = new Array(array.length)
//   mSort(array, resultArr, 0, array.length-1)
//   return resultArr
// }

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0
  while(i<left.length && j<right.length){
    if (left[i] <= right[j]) {
      result.push(left[i++])
    } else if (left[i] >= right[j]) {
      result.push(right[j++])
    }
  }
  while (i < left.length) {
    result.push(left[i++])
  }
  while (j < right.length) {
    result.push(right[j++])
  }
  return result
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }
  let mid = Math.ceil(array.length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

