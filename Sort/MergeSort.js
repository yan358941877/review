function mergeSort(array, first, last, temp) {

  if (first < last) {
    var mid = Math.floor((first + last) / 2)
    mergeSort(array, first, mid, temp)
    mergeSort(array, mid + 1, last, temp)
    merge(array, first, mid, last, temp)
  }
}

function merge(array, first, mid, last, temp) {
  var i = first,
    j = mid + 1,
    k = first
  while (i <= mid && j <= last) {
    if (array[j] < array[i]) {
      temp[k++] = array[j];
      j++;
    } else {
      temp[k++] = array[i];
      i++;
    }
  }

  while (i <= mid) {
    temp[k++] = array[i++]
  }
  while (j <= last) {
    temp[k++] = array[j++]
  }
  for(i = first; i<=last; i++){
    array[i] = temp[i]
  }
}

function Sort(array) {
  var first = 0,
    last = array.length - 1,
    temp = new Array(array.length)
  mergeSort(array, first, last, temp)
}


// 空间复杂度太高 

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0
  while (i < left.length && j < right.length) {
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


while(line=readline()){
  var lines = line.split(" ");
  var len = lines.length;
  var numArray = [];
  var i = 0,
      j =0,
      max = 0,
      temp = 0;
  for(i=0; i<len; i++){
      numArray.push(parseInt(lines[i]))
  }
for(i=0; i<len ; i++){
      temp = 0;
      for(j=1; j<=len; j++){
          temp = temp + numArray[i+j-1];
          if(temp > max){
              max = temp;
          }
      }
  }
  print(max);
}