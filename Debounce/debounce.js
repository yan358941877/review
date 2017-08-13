function debounce(fn, delay){
  let timer = null
  return function(){
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(function(){
      fn.apply(context, args)
    }, delay)
  }
}

function foo(){
  console.log('you are scrolling')
}

document.addEventListener('scroll', debounce(foo, 50))