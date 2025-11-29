console.log("var & let");

function sum2(n1, n2){
  console.log(n1+n2);
  console.log("sum2");
  return n1+n2;
}

var f1 = function sum(n1,n2){
  console.log(n1+n2);
  console.log("sum");
  return n1+n2;
}

sum2(10,12);
f1(4,6);



