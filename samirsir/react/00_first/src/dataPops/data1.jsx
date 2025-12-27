function dadaStor1(data) {
    return (
        <div className="box">
            <img className="img" src={data.img} />
            <div className="data">
                <div className="data1">{data.popes}</div>
                <div title="World news" className="data2">{data.popes}</div>
                <div title="India revokes order to preload smartphones with state-owned security app" className="data3">{data.discription}</div>
                <div title="2025-12-03T13:53:04Z" className="data4">{data.date}</div>
            </div>
        </div>

    )
}

export default dadaStor1;