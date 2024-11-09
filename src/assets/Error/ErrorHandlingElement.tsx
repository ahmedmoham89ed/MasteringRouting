import React from 'react'
import { BiSolidError } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
interface Iprops{
    statusCode?:number;
    title?:string;
}
const ErrorHandlingElement = ({statusCode=500,title="server error handler"}:Iprops) => {
  const PathName=useLocation();
  return (
    <>
    <div className="container flex flex-col items-center justify-center gap-4 mt-40 ">
       <p className='text-8xl text-yellow-400'><BiSolidError /></p>
       <h1 className='text-4xl font-bold text-indigo-700'>{title} - {statusCode}</h1>
       <p className='text-2xl font-semibold text-center'>error: The error that was thrown. In practice, it will usually be an instance of Error but this is not guaranteed because JavaScript allows to throw any value, including strings or even null</p>
       <div className="flex gap-4">
         <Link to={"/"} reloadDocument className='bg-[#0ea5e9] text-white py-3 rounded-xl px-5 text-2xl ' >Home</Link>
         <Link to={PathName} reloadDocument className='bg-[#0ea5e9] text-white py-3 rounded-xl px-5 text-2xl ' >Refresh</Link>
       </div>
    </div>
      
    
    </>
  )
}

export default ErrorHandlingElement