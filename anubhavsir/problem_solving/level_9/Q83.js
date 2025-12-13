var N = 5 ;
var count = 0 ;
var str = "" ;


for ( let i = 0 ; i < N ; i++ ){
    count = 0 ;
    str = "" ;
    for ( let j = 0 ; j < N ; j++ ){
        if( j == i || j < i ){
        count ++;
        str = str + count;
        
    }
    
    }
   console.log(str);
}










