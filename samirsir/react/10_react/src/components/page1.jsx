import { useState } from "react";
import { useRef } from "react"
import Component from "./component";

function project1 () {
    const [obj , setobj] = useState() ;
    var ok = useRef() ;
    function fun () {
        console.log(ok.current.value) ;
        fetch(`https://fakestoreapi.com/products/${ok.current.value}`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setobj(data)
        })
    }
    return (
        <>
            <input ref={ok} type="number" name="" id="" />
            <button onClick={fun}>click</button>
            <br />
            <Component obj={obj} />
        </>
    )
}

export default project1 ;