function bubbleSort(array){
  let i = 0,
      j = 0,
      len = array.length
  for(i = 0; i < len; i++){
    for(j = i+1; j<len; j++){
      if(array[i] > array[j] ){
        array[i] = array[i] + array[j]
        array[j] = array[i] - array[j]
        array[i] = array[i] - array[j]
      }
    }
  }
}