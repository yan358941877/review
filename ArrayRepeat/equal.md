// 判断相等

0 === NaN // false

var a = NaN
isNaN(a)  // true

var a1 = 'a'
var a2 = new String('a')
var a3 = new String('a')

a1 == a2 // true
a1 == a3 // true
a2 == a3 // true
a1 === a2 // false
a1 === a3 // false
a2 === a3 // false

indexOf()进行比较使用的是 ===

includes()进行比较时和indexOf()类似，但是includes()是可以正确判断是否包含了NaN的

```
var arr = [1,2,NaN]
arr.indexOf(NaN) // -1
arr.includes(NaN) // true
```