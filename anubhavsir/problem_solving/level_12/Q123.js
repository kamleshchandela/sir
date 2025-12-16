function check (e1 , e2 , e3) {
    if(e1 < e2 && e1 < e3){
        console.log(e1);
    }
    else if(e2 < e1 && e2 < e3){
        console.log(e2);
    }
    else{
        console.log(e3);
    }
}

check(20 , 5 , 7) ;

