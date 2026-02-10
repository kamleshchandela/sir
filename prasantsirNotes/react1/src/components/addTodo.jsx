import TodoItems from "./todoitems"

function creat () {
    return (
        <div className="data1">
          <p className='data11'>
            {todoName}
          </p>
          <p className='data11'>
            {todoData}
          </p>
          <button className="red-btn">DELETE</button>
        </div>
    )
}


function AddTodo(){
    return (
        <>
        <div className="data1">
          <input type="text" name="" className='input' placeholder='Enter To Do...' id="" />
          <input type="date" name="" className='date' id="" />
          <button onClick={creat} className="green-btn">ADD</button>
        </div>

        <TodoItems />

            {function one (params) {
                <div className="data1">
                <p className='data11'>
                    {todoName}
                </p>
                <p className='data11'>
                    {todoData}
                </p>
                <button className="red-btn">DELETE</button>
                </div>
            }}



        </>
    )
}


export default AddTodo ;
