import { useState } from "react";

import Change from "./change.jsx"


function click (propes){
    
    
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
        <button onClick={propes.color}>color</button>

        </>
    )
}

export default click ;
export var count ;

