var EventCenter = (function () {
  var listeners = {}

  // 注册事件
  function on(event, handler) {
    listeners[event] = listeners[event] || []
    listeners[event].push({
      handler
    })
  }

  // 发布事件
  function fire(event, args) {
    if (!listeners[event]) {
      return
    }
    for (var i in listeners[event]) {
      listeners[event][i].handler(args)
    }
  }
  return {
    on, fire
  }
})()