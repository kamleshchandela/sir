
var num = 123321 ;
var temp = num ; 
var stornum = num;
var new1 = 0;
while(num >= 1){
    temp = num % 10;
    new1 = new1 * 10 + temp;
    
    num = Math.floor(num / 10);
}


// stornum is liye banayahe kyuki ipar me num ko harbar 10se devide karke num me save kar rahahu is liye num ki value change horahihe ab use use karneke liye ye banaya

console.log(new1);

if(new1 == stornum){
    console.log("Yes, palindrome");
}
else{
    console.log("No, palindrome");
}
















