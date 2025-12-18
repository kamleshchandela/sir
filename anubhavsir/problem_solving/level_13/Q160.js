
// saro Q chhe practice kira jevo

var str = "The quick brown fox Jumps over a lazy dog" ;
var arr1 = str.split("");
var str2 = "abcdefghijklmnopqrstuvwxyz"
var count = 1;

var arr2 = arr1.filter((e)=>{
    return e != " " ;
})

for(let i in arr2){
    if(arr2[i] == arr2[i].toUpperCase()){
        arr2[i] = arr2[i].toLowerCase();
        
    }
}

var str3 = arr2.join("") ;
console.log(str3)

for(let i in str2){
    if(!(str3.includes(str2[i])) && count == 1){
        console.log(false) ;
        console.log(str2[i]) ;
        count = 0 ;
        break ;
    }
    
}

if(count == 1 ){
        console.log(true) ;
    }





