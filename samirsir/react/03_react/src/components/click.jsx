import { useState } from "react";

import Change from "./change.jsx"


function click (){
    
    
        var num ;
        var [count , change1] = useState(0) ;

        function badal () {
        change1(count + 1);
        }   
        

        
    
    
    return (
        <>
        



        <p>count : {count} </p>
        <button onClick={badal}>click</button>
        <Change count1 = {count}/>


        </>
    )
}

export default click ;
export var count ;

