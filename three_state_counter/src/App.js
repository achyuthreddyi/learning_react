import React , { useState } from "react"
import "./App.css"

function App(){
                // method that updates the variable  
  const [count ,setBount]  = useState (0)
  

  return (
    <div className = "App">
      <header>
        <h1> Counter app using State / hooks </h1>
      </header>
      <h2> current value of count is {count}</h2>
      <span> 
      <button onClick = {() => setBount(0)}>Reset Counter</button>
      <button onClick = {() => count > 10 ?  "": setBount(count +1)}>increment counter</button>
      <button onClick = {() => count <1 ? "" :  setBount(count -1 )}>decrease Counter</button>
      </span>
      
    </div>
  )
}

export default App; 