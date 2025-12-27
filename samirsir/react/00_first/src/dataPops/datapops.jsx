function dadaStor(popes , discription , date , img) {
    return (
        <div class="box">
            <img class="img" src={img} />
            <div class="data">
                <div class="data1">{popes}</div>
                <div title="World news" class="data2">{popes}</div>
                <div title="India revokes order to preload smartphones with state-owned security app" class="data3">{discription}</div>
                <div title="2025-12-03T13:53:04Z" class="data4">{date}</div>
            </div>
        </div>

    )
}

export default dadaStor;