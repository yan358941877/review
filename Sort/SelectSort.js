function selectSort(array){
  let i = 0,
      j = 0,
      len = array.length
  for(i = 0; i<len; i++){
    j = array.indexOf(Math.min.apply(null, array.slice(i)))
    if(i !== j){
      array[i] = array[i] + array[j]
      array[j] = array[i] - array[j]
      array[i] = array[i] - array[j]
    }
  }
}