import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()
    // The TodoForm component uses a useState hook to create a todo state. 
    //It also uses the useTodo hook to get the addTodo function from the TodoContext. 
    //When the user clicks the Add button, the todo is added to the list.

    const add = (e) => {
      e.preventDefault()

      if (!todo) return
//!todo means if nothing in todo return nothing
      addTodo({ todo, completed: false})
        // When you spread ...todo in useTodo, you are adding an object. 
        //This is a convenient way to add an object to the context. 
        // After a todo is added, the value of the todo field is cleared. 
        //This prevents the user from adding duplicate todos.
      setTodo("")
    
    }

  return (
      //onSubmit={add} is used to add a todo to the todo list. 
            <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              //When we write "todo" in the value attribute of an input field, it is called controlled input. 
              //This means that the value of the input field is controlled by the state of the component.
              onChange={(e) => setTodo(e.target.value)}
              //This code sets the state of the todo variable to the value of the target element. 
              //This is the same as the setTodo function.
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;
