var shoppingItems = ["books", "sunglass", "keyboard", "mouse", "pen"];
console.log(shoppingItems);

var friendsAge = [12, 23, 34, 45, 56, 67];
console.log(friendsAge);
var friendsAge = {
  john: 44,
  Murray: 23,
  Fairfax: 34,
  Pearl: 45,
  Cherry: 56,
  Jessica: 67,
  Tony: 68,
  Walsh: 69,
  Yuri: 70,
  Cedric: 71,
};
console.log(friendsAge);

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
};

console.log(shoppingCart);
console.log(Object.keys(shoppingCart));
console.log(Object.values(shoppingCart));

var keys = Object.keys(shoppingCart);
var values = Object.values(shoppingCart);

console.log(values);

console.log(Object.keys(shoppingCart).length);

for (var i = 0; i < Object.keys(shoppingCart).length; i++) {
  console.log(Object.keys(shoppingCart)[i]);
}

for (var i = 0; i < Object.values(shoppingCart).length; i++) {
  console.log(Object.values(shoppingCart)[i]);
}

for (var i = 0; i < keys.length; i++) {
  var propName = keys[i];
  var propValue = shoppingCart[propName];
  console.log(propName, propValue);
}

// how to convert object to array
console.log(Object.entries(shoppingCart));
console.log(Object.entries(shoppingCart).length);

for (var propName in shoppingCart) {
  const value = shoppingCart[propName];
  console.log(propName, value);
}
