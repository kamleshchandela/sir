import React, { useEffect, useRef, useState } from "react";

function Form () {

        
    const a1 = useRef() ;
    const a2 = useRef() ;
    const a3 = useRef() ;

    var [ans,setans] = useState([])


    function fun () {
        console.log(a1.current.value) ;
        setans([a1.current.value,a2.current.value,a3.current.value])
        a1.current.value = "" ;
        a2.current.value = "" ;
        a3.current.value = "" ;
    }

    return (
        <>
        <form action="">
        <label htmlFor="name"></label>
        <input ref={a1} id="name" type="text" />
        <label htmlFor="email"></label>
        <input ref={a2} id="email" type="email" />
        <label htmlFor="pass"></label>
        <input ref={a3} id="pass" type="password" />

        <button type="button" onClick={()=>fun()}>Submit</button>

        


        

        </form>




        {
            ans.map((e,i)=>{
                return (
               <p key={i}>{e}</p>
            )
            })
        }




        </>

        

    )
}



export default Form ;

