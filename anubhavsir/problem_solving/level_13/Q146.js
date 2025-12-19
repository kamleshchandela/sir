
var str = "Are you ok?" ;
var str1 = "" ;


for(let i in str){
    // console.log(str[i]);
    if(str[i] == "?"){
        str1 = str1 + "!"; 
    }
    else{
        str1 = str1 + str[i]; 
    }
    
}

console.log(str1)



// method 2 
var str = "kamleshabababa?" ;
console.log(str.replaceAll("?" , "!"));


// replace and replaceAll
var str = "kamleshabababa" ;
console.log(str.replaceAll("a" , "z"));

var str = "kamleshabababa" ;
console.log(str.replace("a" , "z"));
// replace("a" , "z") me first "a" hi "z" me converd hoga baki esehi rahe ge ; 





