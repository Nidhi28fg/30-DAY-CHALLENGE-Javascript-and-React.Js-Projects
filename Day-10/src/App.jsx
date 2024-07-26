import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState("olive");
  const [fade, setFade] = useState(false);

  const changeColor = (color) => {
    setFade(true);
    setState(color);
    setTimeout(() => setFade(false), 500);
  };

  return (
    <div className={`w-full h-screen duration-200 ${fade ? 'fade-background' : ''}`} style={{ background: state }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => changeColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => changeColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => changeColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => changeColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => changeColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => changeColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => changeColor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "brown" }}>Brown</button>
          <button onClick={() => changeColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
