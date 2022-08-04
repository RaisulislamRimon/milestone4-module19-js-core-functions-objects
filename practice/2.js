/* 
2) Write a function called make_avg() which will take an three integers and return the
average of those values. */

function make_avg(num1, num2, num3) {
  var total = num1 + num2 + num3;
  var avg = total / 3;
  return avg;
}
var result = make_avg(80, 90, 100);
console.log(result);
