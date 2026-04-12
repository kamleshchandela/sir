import { useState } from "react";

function Props (props) {
    let [arr , setArr] = useState([]) ;
    function ok (e) {
        console.log(e.target.value) ;
        setArr(arr => [...arr , e.target.value])
    }
    return (
        <>
            <h1>
                My name is {props.name} Chandela !!
                <br></br>
                <br></br>
                <input type="text" onChange={ok}  />
                {
                    arr.map((e,i)=>{
                        return (
                            <>
                                <p key={i}>
                                    {e}
                                </p>
                            </>
                        )
                    })
                }
            </h1>
        </>
    )
}

export default Props ;
