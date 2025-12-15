var N = 2;
var arr = [];
var res ;

for ( let i = 1 ; i < 11 ; i++ ){
    arr =  [];
    for( let j  = 1 ; j < 11 ; j++ ){
        res = j * i ;
        arr.push(res);
        // console.log(res);
    }
    console.log( ...arr );
}





















