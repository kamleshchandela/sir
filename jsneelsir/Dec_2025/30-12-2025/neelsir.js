setTimeout(() => {
  console.log("400 1 sec");
}, 205);
setTimeout(() => {
  console.log("400 2 sec");
}, 200);

for (let i = 1; i <= 3; i++) { console.log("Loop count:", i);
}

console.log("Program started");

setTimeout(() => {
  console.log("This runs after 200 seconds");
}, 200);

console.log("Program ended");