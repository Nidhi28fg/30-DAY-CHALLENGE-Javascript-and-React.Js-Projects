import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
//
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) 
    // setUser is a method that is used to send data. 
    // The data is sent in the form of a user object, which contains the username and password.

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password}) // This is a method to send data. 
        //The data is sent in the form of a user object, which contains the username and password.
    }
  return (
    <div>
        <h2>Login YOU ACCOUNT</h2>
        <input type='text'
        value={username} // When you write "username" in the value field, the useState hook makes a connection with the value.
        onChange={(e) => setUsername(e.target.value) } // onChange is an event handler that listens for changes to the value of an input field. In this case, onChange is being used to change the value of the username field.
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

// Redux, Redux Toolkit, React-Redux, Context API, and Zustand are all state management techniques.
//State management is a technique for passing data around an application. 
// It helps to ensure that the data is consistent and that it is available where it is needed.
