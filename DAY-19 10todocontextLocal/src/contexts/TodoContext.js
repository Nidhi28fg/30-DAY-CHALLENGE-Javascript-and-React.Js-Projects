import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [                    //This is the todos list that is shown on the dashboard. It contains a list of todo items, each of which has an id, a todo description, and a completion status.
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},        
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
