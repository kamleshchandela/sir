var N = "3"
var str = "" ; 

for ( let i = 0 ; i < N ; i++ ){
    str = "";
    for ( let j = 0 ; j < N ; j++ ){
        if( j == i || j < i ){
        str = str + "*" ;
    }
    }
    console.log(str);
}










