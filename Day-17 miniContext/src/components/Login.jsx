import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
//
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
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
