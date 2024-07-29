import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
  //useRef doesn’t cause a component to re-render when the value or state changes. 
  //Essentially, useRef is like a “box” that can hold a mutable value in its (.current) property.
  //useRef allows referencing DOM elements.

  const passwordGenerator = useCallback(() => {
    let pass = ""
    // where our password will create
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // it help to create new password
    if (numberAllowed) str += "0123456789"
    // 
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // it help to create index
      pass += str.charAt(char)
      // then charAt(index value) of str add in pass 
    }
    setPassword(pass)
    // pass update thourgh setPassword
  }, [length, numberAllowed, charAllowed, setPassword])
  // the function will only be recreated if length, numberAllowed, charAllowed, or setPassword change.

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // The ?. optional chaining operator ensures that the code doesn't throw an error 
    // if passwordRef.current is null or undefined.
    passwordRef.current?.setSelectionRange(0, 999);
    //Sets the selection range
    window.navigator.clipboard.writeText(password)
    // Writes the password string to the system clipboard.
  }, [password])
  // Selects the entire text content within the element referenced by passwordRef.

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  // The useEffect hook calls passwordGenerator to generate an initial password.

  return (
    <div className='w-full h-screen shadow-md rounded-lg p-[50px] bg-gray-800 text-orange-500 animate-container'>
     <div>
      <h1 className='w-full text-white text-center my-3 animate-heading'>Password generator</h1>
      <div className="w-full flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 animate-button'
        >
          Copy
        </button>
      </div>
      <div className='flex w-full text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value); }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default App