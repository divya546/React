import React from 'react'

const Button = ({color ,onClick}) => {
    
  return (
    <button className='bg-black text-white rounded p-2 mb-10 flex flex-row items-center justify-center' onClick={onClick}>{color}</button>
  )
}

export default Button