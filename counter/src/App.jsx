import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount]= useState(0);
  function addValue(){
    if(count<20){
      setCount(count+1);
    }else{
      setCount(count);
    }
    

  }
  const removeValue =()=>{
    if(count>0){
         setCount(count-1);
    }else{
      setCount(0);
    }
   
  }
 
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value :{count} </h2>
      <button onClick={addValue}
      >Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
