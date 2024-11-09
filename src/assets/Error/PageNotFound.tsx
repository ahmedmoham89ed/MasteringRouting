import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const PageNotFound = () => {
    const PathName=useLocation();
  return (
   <>
     <div className="container mx-auto flex flex-col items-center justify-center gap-4 mt-24">
            <h1 className='text-8xl text-indigo-400 font-black'>404</h1>
            <p className='text-2xl font-semibold'><span className='text-red-500 text-3xl font-extrabold pr-2'>OOPS!</span>Page Not Found</p>
            <p className='text-3xl font-semibold'>The Page you are looking is not exist</p>
            <div className="flex gap-4">
            <Link to={"/"} reloadDocument className='bg-[#0ea5e9] text-white py-3 rounded-xl px-5 text-2xl ' >Home</Link>
            <Link to={PathName} reloadDocument className='bg-[#0ea5e9] text-white py-3 rounded-xl px-5 text-2xl ' >Refresh</Link>
            </div>
     </div>
   </>
  )
}

export default PageNotFound