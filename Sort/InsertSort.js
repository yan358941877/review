function insertSort(array){
  let i = 0,
      j = 0,
      len = array.length,
      flag = 0
  for(i = 1; i < len; i++){
    if(array[i] < array[i-1]){
      flag = array[i]
      array[i] = array[i-1]
      for(j = i-2; j >= 0 && flag < array[j]; j--){
        array[j+1] = array[j]
      }
      array[j+1] = flag
    }
  }
}