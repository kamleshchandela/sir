import { useEffect , useState } from "react"

function project2 () {
    var [arr , setarr] = useState([]) ;
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setarr(data) ;
        })
    },[])
    return (
        <>
        <div className="all">
            {
                arr.map((e)=>{
                    return (
                        <>
                        <div key={e.id} className="box">
                            <img className="image" src={e.image} alt="" />
                            <p className="text">{e.title}</p>
                            <p className="text">$ {e.price}</p>
                        </div>
                        </>
                        
                    )
                    
                })
            }
            </div>
        </>
    )
}

export default project2 ;