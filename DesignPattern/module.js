/*
这是闭包的应用之一

在立即执行函数表达式中定义的变量和方法在外界是访问不到的,只能通过其向外部提供的接口,"有限制"地访问.通过函数作用域解决了属性和方法的封装问题

通过模块模式能够将方法和变量封装到一个匿名函数中，能够避免污染全局变量

*/

var Person = (function(){
  var name = 'xin'
  var age = 22
  function getName(){
    return name
  }
  function getAge(){
    return age
  }
  return {
    getName,
    getAge
  }
})();

