function throttle(fn, threshold){
  let last = null
  let timer = null
  threshold||(threshold = 250)

  return function(){
    let context = this
    let args = arguments

    let now = + new Date()
    if(last && now < last + threshold){
      clearTimeout(timer)
      timer = setTimeout(function(){
        last = now
        fn.apply(context, args)
      }, threshold)
    }else {
      last = now
      fn.apply(context, args)
    }
  }
}