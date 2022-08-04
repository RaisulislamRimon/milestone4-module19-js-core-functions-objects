console.log("hello world");

var student = {
  id: 1,
  name: "Rimon",
  class: "CSE",
  marks: 100,
};
console.log(student);
console.log(student.id);
console.log(student.name);
console.log(student.class);
console.log(student.marks);

const mobile = {
  brand: "Samsung",
  price: 19000,
  storage: "64GB",
  camera: "7MP",
};
console.log(mobile);
console.log(mobile.brand);

var myComputer = {
  brand: "Dell",
  price: 60000,
  color: "black",
  processor: "core-i3",
};
console.log(myComputer);
console.log(myComputer.brand);
console.log(myComputer.price);
console.log(myComputer.color);
console.log(myComputer.processor);

myComputer.processor = "core-i5";
console.log(myComputer.processor);

console.log(Object.keys(myComputer));
console.log(Object.values(myComputer));
