import React, { useEffect, useReducer, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";

function App() {
  const [soundProps,resetSoundProps]= useInput("");
  const [colorProps, resetColorProps]= useInput("");

  const submit=(e)=>{
    e.preventDefault();
    alert (`${soundProps.value} has ${colorProps.value}`);
    resetColorProps();
    resetSoundProps();
   
  }
  return (
    <>
   <form onSubmit={submit}>
     <input type="text" placeholder="Enter the sound" {...soundProps} />
     <input type="color" placeholder="Enter the color" {...colorProps} />
     <button type="submit" >Submit</button>
   </form>

    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
