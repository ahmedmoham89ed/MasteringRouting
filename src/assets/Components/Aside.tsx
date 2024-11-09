import React from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <div>
        <nav className='naviegate' >
        <ul className=''>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn" end>Quick Start</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn/Download">installation</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn/Describing">Describing the UI</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn/AddingInteractivity">Adding Interactivity</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn/ManagingState">Managing State</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn/Tutorial">Tutorial</NavLink></li>
            <li className='hover:text-[#d5d4d4] transition-all delay-100'><NavLink to="/Learn/EscapeHatches">Escape Hatches</NavLink></li>   
        </ul> 
      </nav>
    </div>
  )
}

export default Aside