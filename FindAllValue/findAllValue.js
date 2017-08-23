var obj = {
  a: {
    b: {
      c: {
        d: {
          e: {
            compony: "啊啊啊啊",
            name: "哈哈哈--> QQ:123456789"
          }
        },
        l: {
          name: "哈哈哈--> QQ:123456789"
        }
      }
    }
  },
  d: "90",
  e: "90",
  l: {
    a: {
      b: {
        c: {
          version: "1.0.0.1",
          name: "哈哈哈--> QQ:123456789"
        }
      }
    }
  },
  f: {
    name: "哈哈哈--> QQ:123456789",
    update: "2017年08月23日"
  }
}

function findAllValue(obj, value){
  let count = 0,
      array = [],
      address = []
  function find(temp){
    for(let i in temp){
      if(typeof temp[i] === 'string'){
        if(temp[i].indexOf(value)!==-1){
          address.push(i)
          console.log(address.join('.')+ '=' + temp[i])
          count ++
          address.pop()
        }
      }else if(typeof temp[i] === 'object') {
        array.push(temp[i])
        address.push(i)
        find(temp[i])
        array.pop()
        address.pop()
      }
    }
  }
  find(obj)
  return count
}

findAllValue(obj, '哈哈哈')