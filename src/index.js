import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

function ChangingColor() {
  const [color, setColor] = useState("blue");
  const updateColor=() =>{
    setColor((color)=>{
      if(color=="blue") return "green";
      if(color=="green")  return "red";
      if(color=="red")  return "blue";
    })
  }
  return (<>
    <h1 style={{color}}>Hello React</h1>
    <button onClick={updateColor}>Change a color,plz!!</button>
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChangingColor />);