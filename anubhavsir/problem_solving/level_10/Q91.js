
var arr = [1, 2, 2, 3] ;
var obj = {} ;
var count = 0 ;
var key = 0;

arr.forEach( (e) => {
    if( obj[e] ){
        obj[e] = obj[e] + 1;
    }
    else{
        obj[ e ] = 1;
    }
});


console.log(obj)

var arr1 = obj.filter((e)=>{e>0})

console.log(arr1)



// baki he





