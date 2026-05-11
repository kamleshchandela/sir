import React from "react";
import { useState } from "react";

function Input () {
    let [value , setValue] = useState("") ;
    function fun (e) {
        setValue(e.target.value) ;
        console.log(value) ;
        console.log(e.target.value) ;
    }
    return  (
        <>
            <input onChange={fun} type="text" value={value} />
        </>
    )
}

export default Input ;