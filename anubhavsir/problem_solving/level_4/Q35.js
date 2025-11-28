function upper(str){
    let res = "";
    for(let i = 0; i < str.length; i++){
        let value = str.charCodeAt(i);

        if(value >= 97 && value <= 122){
            res += String.fromCharCode(value - 32);
        } else {
            res += str[i];
        }
    }
    console.log(res);
}

upper ("kamlesh12234x4xc4cxZXCVCXZ")

