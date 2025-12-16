function getObjectKeys(obj) {
  return Object.keys(obj);
}

// Test cases
console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); 
// ["a", "b", "c"]

console.log(getObjectKeys({ name: "Neel", age: 25 })); 
// ["name", "age"]

console.log(getObjectKeys({})); 
// []
