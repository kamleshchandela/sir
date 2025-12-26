function card(props) {

    console.log(props.image)
    return (
        <div className="card">
            <img src={props.image} alt="" className="img" />
            <p className="title">
                {props.title} 
            </p>
            <button className='btn'>MORE</button>
        </div>
    )
}


export default card;
