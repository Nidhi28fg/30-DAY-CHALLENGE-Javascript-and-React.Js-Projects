import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
    //TODOS is an array in which the object has an ID, a description, and a completion status.
// YOU HAVE ALL TODO IN THE TODOS
 
  //All methods are defined in the code.
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
    //The seTodos((prev)) => [] is used to create a new array by using the previous value.
    //The setTodos prev gives you the previous todos. The ...todo helps to add current todos. 
    // The ...prev helps to add previous todos. To give a dynamic ID, you must use date.now(). 
 
  
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
    //The updateTodo function is used to update a todo. The id parameter is the id of the todo to update. 
    //The prevtodo.id is the previous id of the todo. The id is the id of the todo to update.
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    // IDs that do not match the todo ID are kept, while those that do are removed. 
    //When you apply a filter, a new array is created, and the matching IDs are filtered out."
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }
  // Toggling a value means setting a true value to false, or a false value to true. 
  //In this case, we are toggling the completed value of a todo item.
 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    //JSON helps to store data in a format that can be easily shared and understood.
    // The localStorage.getItem() method in JavaScript is used to get an item from the local storage.

    if (todos && todos.length > 0) {
      // todos && todos.length is a JavaScript expression that evaluates to true if todos is defined and has a length greater than 0. 
      //If this expression is true, then the if block is executed and the todos array is set to the value of todos.
      setTodos(todos)
    }
  }, [])
 
  //[] is an empty array. In this code, it is used in the second useEffect to indicate that
  //this effect should only run when the component is first mounted.

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    // localStorage.setItem is a method that stores data in the browser's local storage.
  }, [todos])
  
// We can use multiple useEffects at the same time. This is a very useful feature.


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
