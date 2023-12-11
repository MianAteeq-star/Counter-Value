import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
const addValue = ()=>{
   setCount(count +1)
   if (count === 20) {
    setCount(count)
    
   }
}
const removeValue = ()=>{
   setCount(count -1)
   if (count===0) {
    setCount(count)
    
   }
}

  return (
    <>
     
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        
        <button onClick={addValue}>
          Add Value
        </button>
        <button onClick={removeValue}>
          Remove Value
        </button>
      </div>
      <h2>After useState Hook = {count}</h2>
     
     
    </>
  )
}

export default App
