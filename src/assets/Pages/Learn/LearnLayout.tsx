import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Aside from '../../Components/Aside'

const LearnLayout = () => {
  return (
    <div>
        <Navbar/>
        <Aside/>
        <Outlet/>
    </div>
  )
}

export default LearnLayout