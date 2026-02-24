function component (propes) {
    return (
        <>
            <img className="image1" src={propes.obj?.image} alt="" />
            <p className="text">{propes.obj?.title}</p>
        </>
    )
}

export default component ;