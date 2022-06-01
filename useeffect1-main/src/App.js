import React, { useEffect, useState } from "react"
import Name from "./Components/Name";

import './App.css';

function App() {
  // fetch("http://localhost:3004/todo")
  //   .then((r) => r.json())
  //     .then((d) => {

  //       console.log(d)
        
  //     })
  //     .catch((err)=>
  //     {
  //       console.log(err)
  //     })

  return (
  
    
      <div className="App" >
      <Name/>
      </div>
   
  );
}

export default App;
