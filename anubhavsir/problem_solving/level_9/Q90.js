var arr = ["hi", "hello", "a"] ;
var str = "";
var max = -Infinity ;


arr.forEach((e)=>{
    
    if(  max < e.length ){
        max = e.length ;
        str = e ;
    }
})



console.log( str )






// method 2
// agar .length ka use kiye bina string ki length jannekeliye 
var n1 = "kamlesh";
var i = 0;
var count = 0;
while(n1[i]){
    count ++;
    i++;
}

console.log(count)





