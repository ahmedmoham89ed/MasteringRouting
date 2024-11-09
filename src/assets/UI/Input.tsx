import React, { InputHTMLAttributes } from 'react'
interface Iprops extends InputHTMLAttributes<HTMLInputElement>{
    title:string,
    type:string
}
const Input = ({title,type,...reset}:Iprops) => {
  return (
    <>
      <input placeholder={title} type={type} className='border-2 border-indigo-400 indent-3 outline-0 focus:ring-2 hover:border-4 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 w-80 h-14 rounded-xl  mx-12 transition-all duration-150 ' {...reset} />  
    </>
  )
}

export default Input