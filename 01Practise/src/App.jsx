import { useEffect, useState } from "react";
import Temp from "./Temp";
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  const [name, setName] = useState("");
  const [num, setnum] = useState(0);
  const changeName = (name) => {
    setName(name);
  };

  return (
    <>
      {name && <h1> Name: {name}</h1>}
      <p>num: {num}</p>
      <Temp name={name} />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          changeName(e.target.value);
        }}
      />
      <button type="button" onClick={() => {
        setnum(num+1)
      } }></button>t
    </>
  );
}

export default App;
