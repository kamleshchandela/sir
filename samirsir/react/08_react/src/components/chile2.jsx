import { CounterContext } from "./context"
import { useContext } from "react";
import { namecon } from "./nametext";

function child2 () {
    var count = useContext(CounterContext) ;
    var name = useContext(namecon) ;
    return (
        <>
            <p>OKOKOKO</p>
            <p>{count}</p>
            <p>{name}</p>
        </>
    )
}

export default child2 ;