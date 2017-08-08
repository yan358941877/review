var EventUtil = {
  addHandler: function(element, type, handler){
    if(element.addEventListener){
      // 第三个参数表示在冒泡阶段调用事件处理程序，默认值为false
      element.addEventListener(type, handler, false)
    }else if(element.attachEvent){
      element.attachEvent("on"+type, handler)
    }else {
      element["on"+type] = handler
    }
  },
  removeHandler: function(element, type, handler){
    if(element.removeHandler){
      element.removeHandler(type, handler, false)
    }else if(element.detachEvent){
      element.detachEvent("on"+type, handler)
    }else {
      element["on"+ type] = null
    }
  },
  getEvent: function(event){
    return event?event:window.event
  },
  getTarget: function(event){
    return event.target || event.srcElement
  },
  preventDefault: function(event){
    if(event.preventDefault){
      event.preventDefault()
    }else {
      event.returnValue = false
    }
  },
  stopPropagation: function(){
    if(event.stopPropagation){
      event.stopPropagation()
    }else {
      event.cancelBubble = true
    }
  }
}

// DOM中的事件对象
function DOMEvent(event){
  // 事件处理程序(当前程序)绑定的那个元素,事件处理程序内部，this的值始终等于currentTarget的值
  event.currentTarget
  // 事件发生的具体元素
  event.target
  // 事件类型
  event.type
  // 取消事件的默认行为
  event.preventDefault()
  // 取消事件的进一步捕获或冒泡
  event.stopPropagation()
}

// IE中的事件对象
function IEEvent(){
  var event = window.event
  // 事件类型
  event.type
  // 阻止事件进一步冒泡
  event.cancelBubble = true
  // 取消事件的默认行为
  event.returnValue = false
  // 事件发生的具体元素
  event.srcElement
}