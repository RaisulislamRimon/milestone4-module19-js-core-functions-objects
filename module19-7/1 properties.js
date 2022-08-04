var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};
console.log(shoppingCart);

var penCount = shoppingCart.pen;
console.log(penCount);

console.log(shoppingCart.pen);

// alternative system
var penBox = shoppingCart["pen"];
console.log(penBox);

var properties = Object.keys(shoppingCart);
console.log(properties);
var keys = Object.values(shoppingCart);
console.log(keys);

var propertyName = "mouse";
var propertyName = "books";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// set property values
console.log(shoppingCart);
shoppingCart.mouse = 22;
console.log(shoppingCart);

shoppingCart["mouse"] = 44;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);
