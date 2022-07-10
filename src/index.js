import React, { useEffect, useReducer, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useFetch from "./useFetch";

function App({login}) {
  const {data, loading, error } = useFetch(`https://api.github.com/users/${login}`);

   if(loading) return <h1>Loading...</h1>
   if(error) return (
      <pre> {JSON.stringify(error, null, 2)}</pre>
    )
  if(data) return (
    <div>
      <img src={data.avatar_url}  alt={data.login} style={{maxHeight:'10%'}}/>
      {data.login && <p>{data.login}</p>}
      {data.name && <p>{data.name}</p>}

    </div>
    )

}

ReactDOM.render(
  <React.StrictMode>
    <App login={"dhirajchhetri"}/>
  </React.StrictMode>,
  document.getElementById("root")
);
