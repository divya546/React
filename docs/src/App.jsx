import React, { useCallback, useEffect, useRef } from 'react'
 import { useState } from 'react';
const App = () => {
  const[password,setPassword]= useState('');
  const[isNumber ,setIsNumber]=useState('false');
  const[isCharacter,setIsCharacter] = useState('false');
  const[length,setLength]= useState('0');
  const passwordRef =useRef(null);
  const passwordGenerator= useCallback(()=>{
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(isNumber) str+= "0123456789"
      if(isCharacter) str+="@#$%^&*:"
      let pass =""
      for(let i =0;i<length;i++){
           const index = Math.floor(Math.random()*str.length+1)
           pass += str.charAt(index); 
      }
      setPassword(pass);
  },[isNumber,isCharacter,length]);
     
     const copyPassword=useCallback(()=>{
          passwordRef.current?.select();
          passwordRef.current?.setSelectionRange(0,101);
          window.navigator.clipboard.writeText(password);
     },[password])
  useEffect(()=>{
      passwordGenerator()
  },[length,isNumber,isCharacter,setPassword])

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-800'>
     <div className='w-full max-w-md shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
         <h1 className=' text-white text-center text-2xl font-semibold my-3 '>Password manager</h1>

         <div className=' flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text" value={password}
          className='outline-none w-full py-1 px-3 bg-white text-black '
          placeholder='password'
          readOnly
          ref={passwordRef}

          />
          <button onClick={copyPassword}
               className='outline-none bg-blue-700 text-white m-2 px-3 py-1 shrink-0 '
          >copy</button>
         </div>
         <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
          <input type="range" min="0" max="100" name='range'
                 value={length}
                 className='cursor-pointer accent-blue-600'
                 onChange={(e)=> setLength(e.target.value)}
          />
          <label >{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
                  checked ={isNumber}
                  onChange={()=>setIsNumber((prev)=>!prev)}
            />
          <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                 checked={isCharacter}
                 onChange={()=>setIsCharacter(prev=>!prev)}
           />
          <label htmlFor="characters">Characters</label>
          </div>
         </div>
         </div>

    </div>
  )
}

export default App