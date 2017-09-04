var singleton = (function(){
  var instance
  function init(){
    return {
      name: 'yanxin',
      age: '22'
    }
  }
  return {
    getInstance: function(){
      if(!instance){
        instance = init()
      }
      return instance
    }
  }
})()