
var str = "kamlesh" ;
var count = 0 ;
for(let i in str){
    // console.log(str[i]) ;
    count ++;

}
if(count == 1)[
    console.log(str)

]
else if(count % 2 == 1){
    console.log(str[count/2 + 0.5])
}
else {
    console.log(str[count/2 - 1] + " " + str[count/2])

}













