import { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{background: state}}>
      <div className=" fixed flex flex wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setState("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>
        Red </button>
        <button onClick={()=>setState("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}>
        Blue </button>
        <button onClick={()=>setState("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>
        Green </button>
        <button onClick={()=>setState("Orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Orange"}}>
        Orange </button>
        <button onClick={()=>setState("Yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Yellow"}}>
        Yellow </button>
        <button onClick={()=>setState("Pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>
        Pink </button>
        <button onClick={()=>setState("Brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Brown"}}>
        Brown </button>
        <button onClick={()=>setState("Purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Purple"}}>
        Purple </button>
    </div> </div> </div>
  );
}

export default App;
