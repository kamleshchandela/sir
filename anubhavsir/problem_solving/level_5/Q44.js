var str = "kamlesh";
var str1 = "kamlesh";

var count = 1;
if(str.length === str1.length){
    for(let i = 0; i < str.length ; i++ ){
    if(str[i] != str1[i]){
        console.log(false);
        count = 2;
        break;
        
        }
    
    }

    if(count == 1){
        console.log(true);
    }

}
else{
    console.log(false);
}












