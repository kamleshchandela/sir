var str = "swiss" ;
var ans = true ;
for(let i = 0 ; i < str.length ; i++){
    ans = true ;
    for(let j = 0 ; j < str.length ; j++){
        if(i == j){
            continue ;
        }
        else if (str[i] == str[j]) {
            ans = false ;
            break ;
        }
    }
    if(ans){
        console.log(str[i]);
        break ;
    }
}


