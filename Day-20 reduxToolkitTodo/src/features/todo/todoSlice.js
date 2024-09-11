import {createSlice, nanoid } from '@reduxjs/toolkit';
//createSlice is used to create a slice of state. A slice is a part of the state that you want to manage separately.
//nanoid is used to generate unique identifiers for todo items.

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}
//This is the code for the initial state. It's a JavaScript object that contains an array of todo items.


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // In reducers, you should define a property and a function that operates on that property. 
        //The function should accept the current state and an action as arguments.
        addTodo: (state, action) => {
        // state and action are arguments to the reducer function.
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
