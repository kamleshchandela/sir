function TodoItems ({todoName , todoData}) {
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

export default TodoItems ;
