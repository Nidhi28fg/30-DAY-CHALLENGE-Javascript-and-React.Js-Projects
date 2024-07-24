import React, { useState } from "react";



function App() {
  let [counter, setCounter] = useState(16);

  const add = () => {
    if (counter < 20){
      setCounter( counter + 1 )
    }
  }

  const ruduce = () => {
    if ( counter > 0){
    setCounter( counter - 1 )}
  }


  return (
    <>
   <h1>You can add number 0 to 20</h1>
   <button onClick={add}> Add Number {counter}</button>
   <button onClick={ruduce}> Reduce Number {counter}</button>
</>
  );
}

export default App;
