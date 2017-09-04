Function.prototype.bind = function(context){
  var fn = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    var innerArg = Array.prototype.slice.call(arguments, 0);
    var resultArg = args.concat(innerArg);
    fn.apply(context, resultArg);
  }
}