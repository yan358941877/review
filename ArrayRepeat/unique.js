// 使用indexOf进行去重 

// 注意： arr.indexOf(NaN) 的值为-1，即indexOf()无法判断NaN，NaN被去掉

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
      if(arr[i] === arr[j]){  // NaN会重复
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

// 无法处理复杂数据结构，无法区分隐式类型转换成字符串后一样的值，例如1和'1'，因此需要使用更加复杂的key
function unique06(arr){
  var ret = [],
      temp = {},
      len = arr.length
  for(var i=0; i<len; i++){
    if(!temp[arr[i]]){
      temp[arr[i]] = 1
      ret.push(arr[i])
    }
  }
  return ret
}
// 改进 如果数组中有空对象和正则表达式，则无法区分这两者
function unique07(arr){
  var ret = [],
      temp = {},
      len = arr.length
  for(var i = 0; i< len; i++){
    var tmpKey = typeof arr[i] + JSON.stringify(arr[i])
    if(!temp[tmpKey]){
      temp[tmpKey] = 1
      ret.push(arr[i])
    }
  }
  return ret
}


// ES2015 Map,Map对key的类型没有限制，对于key进行比较时，如果是复杂数据类型，则比较他们的地址

function unique08(arr){
  var ret = [],
      len = arr.length,
      temp = new Map()
  for(var i = 0; i< len; i++){
    if(!temp.get(arr[i])){
      temp.set(arr[i], 1)
      ret.push(arr[i])
    }
  }
  return ret
}

// ES 2015 Set

function unique09(arr){
  var set = new Set(arr)
  return Array.from(set)
}