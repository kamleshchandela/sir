import TodoItems from "./todoitems";

function todoItems({arr}) {
    return (
        <>

            {
                arr.map((a)=>{
                   return <TodoItems todoName={a.name} todoData={a.dueDate} />
                })
            }
            
        </>
    )
}

export default todoItems;

