import React, { useEffect, useReducer, useRef, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const initialState={
    message:"Hello"
  }
  const reducer = (state, action)=>{
    switch (action.type){
      case "whisper":
        return {
          message:'ssh!!!'
        }
      case "loud":
        return {
          message:"dont shout !!!"
        }
    }

  }
  const [state, dispatch] = useReducer(reducer, initialState)
 return (
   <>
   <p>{state.message}</p>
   <button onClick={()=> dispatch({type:"whisper"})}> Whisper</button>
   <button onClick={()=> dispatch({type:"loud"})}>loud</button>
   </>
 )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
