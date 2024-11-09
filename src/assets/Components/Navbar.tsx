import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav >
        <ul className='flex items-center justify-center gap-20 bg-[#0c4a6e] text-[#a5f3fc]  py-4 px-2 text-xl font-semibold'>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/">Home</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/About">About Us</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Blog">Blog</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/ContactUs">Contact Us</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Settings">Contribute</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Login">Login</NavLink></li>   
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn">Learn</NavLink></li>   
        </ul> 
      </nav>
    </>
  )
}

export default Navbar