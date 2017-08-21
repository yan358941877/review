function heapSort(array){
  array.unshift(0)
  var i = 0
      len = array.length - 1
  for(i = Math.floor(len / 2); i>0; i--){
    HeapAdjust(array, i, len)
  }
  for(i=len; i>0; --i){
    let temp = array[i]
    array[i] = array[1]
    array[1] = temp
    HeapAdjust(array, 1, i-1)
  }
}

function HeapAdjust(array, s, m){
  var key = array[s]
  for(var j = s*2; j<=m; j*=2){
    if(j<=m && array[j]<array[j+1]){
      j = j+1 // 记录较大顶点的坐标
    }
    if(key >= array[j]){
      break
    }
    array[s] = array[j]
    s = j
    array[s] = key
  }
  
}