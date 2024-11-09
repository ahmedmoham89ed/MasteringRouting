import React, { ButtonHTMLAttributes, Children, ReactNode } from 'react'
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children:ReactNode;
    className?:string;
    width?:"w-full"|"w-fit";
}
const Button = ({children,className,width,...reset}:Iprops) => {
  return (
    <>
      <button {...reset} className={`${className} ${width} rounded-lg text-white px-3 py-3 duration-300 font-medium bg-[#149eca]`} >
        {children}
      </button>
    </>
  )
}

export default Button