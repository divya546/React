import React, { useEffect } from 'react'
import {useState,useCallback, useRef} from 'react'
function App() {
  const[length,setLength]=useState(8);
  const[numAllowed,setNumAllowed] = useState(false);
  const[characterAllowed,setcharacterAllowed] =useState(false);
  const[password,setPassword]=useState("");

  //ref hook
  const passwordRef = useRef(null);
  
  const passwordGenerator=useCallback(()=>{
   
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) string +="0123456789"
    if(characterAllowed) string +="#$%&*!@^<>?"
     let pass ="";
    for(let i =1;i<=length;i++){
        let char = Math.floor(Math.random()*string.length +1);
        pass += string.charAt(char);
    }  
    setPassword(pass);
  } ,[length,numAllowed,characterAllowed,setPassword])
     const copyPassword= useCallback(()=>{
     passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,101)
          window.navigator.clipboard.writeText(password);
     }, [password])
     

      useEffect(()=>{
        passwordGenerator()
      },[length,numAllowed,characterAllowed,passwordGenerator])
 
  return (
    <>
    
   <div className='w-full max-w-md mx-auto my-8 shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
    <h1 className ='text-white text-center my-3'>Password Genrator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
             value={password}
             className='outline-none w-full py-1 px-3 bg-white'
             placeholder='password'
             readOnly
             ref={passwordRef}
      />
      <button onClick={copyPassword} 
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' >
        copy
      </button>
      </div>
      <div className='flex  text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(s)=>{setLength(s.target.value)}}
          />
          <label > length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                 defaultChecked={numAllowed}
                 id='numberInput'
                 onChange={()=>{
                  setNumAllowed((pre)=>!pre)
                 }}
          
          />
          <label htmlFor='numberInput' > Numbers </label>
           </div>
           <div className='flex items-center gap-x-1'>
                  <input type="checkbox" 
                          defaultChecked={characterAllowed}
                          onChange={()=>{
                            setcharacterAllowed((pre)=>!pre);
                          }}
                          />
                        <label htmlFor="characterInput"> Characters</label>

           </div>
      </div>
   </div>
    </>
  )
}

export default App