// 使用indexOf进行去重 

// 注意： arr.indexOf(NaN) 的值为-1，即indexOf()无法判断NaN

function unique01(arr){
  return arr.filter(function(item, index){
    return arr.indexOf(item) === index
  })
}


function unique02(arr){
  var ret = []
  arr.forEach(function(item, index){
    if(arr.indexOf(item) === index){
      ret.push(item)
    }
  })
  return ret
}

function unique03(arr){
  var ret = []
  arr.forEach(function(item){
    if(ret.indexOf(item) === -1){
      ret.push(item)
    }
  })
}

// 使用includes()进行去重

function unique04(arr){
  var ret = []
  arr.forEach(function(item){
    if(!ret.includes(item)){
      ret.push(item)
    }
  })
  return ret
}

// --------
// 使用 === 进行去重
// 双重遍历进行去重

function unique05(arr){
  var ret = []
  var i = 0,
      j = 0,
      len = arr.length,
      isRepeat = false
  for(i=0; i<len; i++){
    isRepeat = false
    for(j=i+1; j<len; j++){
      if(arr[i] === arr[j]){
        isRepeat = true
        break
      }
    }
    if(!isRepeat){  // 如果元素是重复的，则将最后一个元素将入到结果数组中
      ret.push(arr[i])
    }
  }
  return ret
}

// 使用对象key来去重
function unique06(arr){

}
