/* 
4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
 */


// ----------------------------------------
// ● Has return + Has parameter
// ----------------------------------------
function odd_even(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(odd_even(2));
console.log(odd_even(3));

// ----------------------------------------
// ● No return + Has parameter
// ----------------------------------------
function odd_even1(num1) {
  if (num1 % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

odd_even1(2);
odd_even1(3);
