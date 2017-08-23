function circularReference(obj){
  let array = [],
      flag = false
  function check(temp){
    for(let i in temp){
      if(flag){
        return
      }
      if(typeof temp[i] == 'object'){
        if(array.indexOf(temp[i]) !== -1){
          flag = true
          return
        }
        array.push(temp[i])
        check(temp[i])
        array.pop()
      }
    }
  }
  array.push(obj)
  check(obj)
  return flag
}