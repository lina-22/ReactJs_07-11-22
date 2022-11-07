"use strict";

var x = 3;

// let func =functon(v)
// {return v*v}

// let iffe = (function (v){
//     return v*v
// })(x)

var y = function (v) {
  return v * v;
}(x);
// console.log("nodeLa valeur de y est : " + y);
console.log("La valeur de y est : ".concat(y));