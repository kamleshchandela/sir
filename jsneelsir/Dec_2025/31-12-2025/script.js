
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`setInterval running (${count}) (async)`);

  if (count === 2) {
    clearInterval(intervalId);
    console.log("setInterval stopped");
  }
}, 0);

setTimeout(() => {
  console.log("setTimeout callback executed (async)");
}, 0);


setImmediate(() => {
  console.log("setImmediate callback executed (async)");
});



