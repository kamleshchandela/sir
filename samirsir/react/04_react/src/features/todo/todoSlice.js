import {createSlice} from '@reduxjs/toolkit' ;

const initialState = {
    todos : [{id : 1 , text : "kamlesh"}]
}



export const todoSlice = createSlice({
    name : 'todo' ,
    initialState ,
    reducers : {
        addTodo : (state, action) =>{
            const todo = {
                // id : Date.now() ,
                id : nanoid() ,
                text : action.payload
            } 
            state.todos.push(todo) ;
        } ,
        removeTodo : (state , action) => {
                state.todos.filter((todo)=>{
                    todo.id != action.payload
                })
        }
    }
})
