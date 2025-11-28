var n1 = 10;
console.log(n1);


function f1(){
  var n1 = 11;
  console.log(n1);
  function f2(){
    n1=12;
    console.log(n1);
    function f3(){
      n1=13;
      console.log(n1);
    }
    f3();
  }
  f2();
}

f1();