class Promise111{
  constructor(){
    this.callbacks = []
    this.oncatch = null
  }
  then(onSuccess, onFail){
    this.callbacks.push({
      resolve: onSuccess,
      reject: onFail
    })
    return this
  }

  resolve(result){
    this.complete('resolve', result)
  }

  reject(result){
    this.complete('reject', result)
  }

  complete(type, result){
    if(type === 'resolve' && this.oncatch){
      this.callbacks = []
      this.oncatch(result)
    } else {
      let callbackObj = this.callbacks.shift()
      callbackObj[type](result)
    }
  }
  catch(onFail){
    this.oncatch = onFail
    return this
  }
}