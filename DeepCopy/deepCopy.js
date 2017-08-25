//  使用JSON方法实现深拷贝

JSON.parse(JSON.stringify(object))

// 递归实现深拷贝

function deepCopy01(obj){
  if(typeof obj !== 'object'){
    return obj
  }
  var temp = new Object()
  for(var i in obj){
    if(typeof obj[i] === 'obj'){
      temp[i] = deepCopy01(obj[i])
    }else {
      temp[i] = obj[i]
    }
  }
  return temp
}

// jQuery源码实现的深拷贝

jQuery.extend = jQuery.fn.extend = function() {
  var src, copyIsArray, copy, name, options, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

  // 如果第一个参数是布尔类型的，说明指定了是否要进行深拷贝，则第二个参数指的是目标对象
  if ( typeof target === "boolean" ) {
      deep = target;
      target = arguments[ i ] || {};
      i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
      target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( i === length ) {
      target = this;
      i--;
  }

  for ( ; i < length; i++ ) {
      // options为源对象
      if ( (options = arguments[ i ]) != null ) {
          
          for ( name in options ) {
              src = target[ name ];
              copy = options[ name ];

              // Prevent never-ending loop
              if ( target === copy ) {
                  continue;
              }

              // 处理纯对象和数组
              if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                
                  if ( copyIsArray ) {
                      // 被拷贝的对象是数组时
                      copyIsArray = false;
                      clone = src && jQuery.isArray(src) ? src : [];

                  } else {
                      // 被拷贝对象是对象
                      clone = src && jQuery.isPlainObject(src) ? src : {};
                  }

                  // 递归调用extend方法，实现该属性的深拷贝
                  target[ name ] = jQuery.extend( deep, clone, copy );

              
              } else if ( copy !== undefined ) {
                  // 如果属性是简单数据类型，直接复制
                  target[ name ] = copy;
              }
          }
      }
  }

  // Return the modified object
  return target;
};