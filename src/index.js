import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import App from './App'

 const TreesContext = createContext();
 export const useTrees = ()=> useContext(TreesContext)
 const Trees=[
   {id:1, type:"Maple"},
   {id:2, type:"Teak"},
   {id:2, type:"Oak"}
 ]

ReactDOM.render(
  <TreesContext.Provider value={Trees}>
    <App />
  </TreesContext.Provider >,
  document.getElementById("root")
);
