/* function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;
  console.log("I need more code");
  return sum;
  // return "hello done";
  // return "i am hungry";
  // return 15;
  // console.log(sum);
  // return 15;
}

// add(45,15);
var total = add(80, 20);
console.log(total);
 */

function bringSingara(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log(singaras);
