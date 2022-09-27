x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);  // 10
  console.log(a);  // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); /// 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); /// 9
}
c(8,9,10);
console.log(b); /// 10 
console.log(x); /// 1


console.log(bar);       /// undefined???
console.log(baz);       /// is not defined
foo();                  /// "hola"
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;