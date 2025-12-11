var arr = [ 1 , 2 , 3 , 4 , 5 ];
arr.forEach((data , i)=>{
    console.log(data , i);
})

var arr = arr.map((data)=>{
    return data*2;
})

console.log(arr);

var arr = [
    { user : "kamlesh" , age : 17 },
    { user : "het" , age : 14 },
    { user : "purnansh" , age : 13 },
    { user : "jonty" , age : 15 },
    { user : "jal" , age : 16 },
    { user : "khush" , age : 47 }
]


var arr1 = arr.map((data)=>{
    
        console.log(data.user);
        console.log(data.age);
    
    
})


// map ko filter ke jese banana hoto iska use karte he
console.log("map filter")
var arr1 = arr.map((data)=>{
    if(data.age > 15){
        console.log(data.user);
        console.log(data.age);
    }
})




// filter
console.log("filter")
var arr1 = arr.filter((data)=> 
    ( data.age >15 )

    
)

console.log(arr1)


// object ki sari key and valu console karne ke liye for in ka use hota he

var obj = {
    name : "kamlesh",
    age : "17",
    mobile : [ 12345 , 67890 , 23456 ]
}

for(let e in obj){
    console.log("key :" , e);
    console.log("value :" , obj.e);
    console.log( e , ":" , obj.e );

}


// Object.keys(obj) -> ka use
// niche key1 and value1 vale variable arr he kyuki Object.keys(objName) & Object.values(objName) arr ke formet me value deta he 
// is methodse ham obj ke andar ki keys and values ko aasanise dhund ne ke liye use kar sakte he kese  use karnahe vo upar vale code ko dhyanse padhane par samj aajae ga    
    
var key1 = Object.keys(obj);
console.log(key1);

var value1 = Object.values(obj);
console.log(value1);

