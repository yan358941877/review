Function.prototype.bind = function(context){
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    var innerArg = Array.prototype.slice.call(arguments, 0);
    var resultArg = args.concat(innerArg);
    fn.apply(context, resultArg);
  }
}

Function.prototype.bind = function(context){
  var fn = this,
      args = Array.prototype.slice.call(arguments, 1),
      F = function(){},
      bound = function(){
        var innerArgs = Array.prototype.slice.call(arguments),
            resultArgs = args.concat(innerArgs);
            return fn.apply((this instanceof F?this: context), resultArgs);
      }
  F.prototype = fn.prototype;
  bound.prototype = new F();
  return bound;
}