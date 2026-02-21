function Check (propes) {

    return (
        <>

            <p>{propes.states.age}</p>
            <button onClick={()=>propes.fun ({type : "add"})}>++++++++++++++++++++++</button>
            <button onClick={()=>propes.fun ({type : "sub"})}>----------------------</button>
        </>
    )
    
}

export default Check ;