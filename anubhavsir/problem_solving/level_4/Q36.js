function upper(str){
    let res = "";
    for(let i = 0; i < str.length; i++){
        let value = str.charCodeAt(i);

        if(value >= 65 && value <= 90){
            res += String.fromCharCode(value + 32);
        } else {
            res += str[i];
        }
    }
    console.log(res);
}

upper ("KAMLESH22392qwjwndjq12ijJJD2JS");

