import React, { createContext, useEffect, useReducer, useRef, useState, } from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const TreesContext = createContext()

const Trees= [
  { id: 1, type:"Maple"},
  { id: 2, type:"Oak"},
  { id: 3, type:"Teak"}
]
ReactDOM.render(
  <TreesContext.Provider value={Trees}>
    <App />
  </TreesContext.Provider >,
  document.getElementById("root")
);
