var arr = [] ;
function print (e) {
    for (let i = e ; i >=1 ; i-- ){
        // console.log(i)
        arr.push(i)
    }
}
 
print(6)
console.log(...arr)


