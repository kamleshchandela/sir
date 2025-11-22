var n = 5;


//  Q 1
if(n % 2 == 0){
    console.log(n ,"is even")
}
else{
    console.log(n ,"is add")
}




//  Q 2
var n1 = 5;
var n2 = 10;

n1 > n2 ? console.log(n1 , "is big") :  console.log(n2 , "is big");
console.log(Math.max(n1,n2));
if(n1>n2){
    console.log(n1 , "is big")
}
else{
    console.log(n2 , "is big")
}



// Q 3
var m1 = 5;
var m2 = 6;
var m3 = 7;

if(m1>m2 && m1>m3){
    console.log(m1 , "is larg" )
}
else if(m2>m1 && m2>m3){
    console.log(m2 , "is larg" )
}
else{
    console.log(m3 , "is larg" )
}


// Q 4
var o1 = -1;

if(o1 > 0){
    console.log(o1 , "is positive");
}
else if (o1 < 0){
    console.log(o1 , "is negative");
}
else{
    console.log(o1 , "zero");
}

// Q 5
var age = 25;

if(age >0 && age <= 12){
    console.log(age , "Child");
}
else if(age > 12 && age <= 19){
    console.log(age , "Teenager");
}
if(age > 19 ){
    console.log(age , "Adult");
}













