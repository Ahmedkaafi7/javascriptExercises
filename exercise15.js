const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Los Angeles" },
];
console.log("properties and values of each person:");
for (let person of people) {
  console.log("---");
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
}
