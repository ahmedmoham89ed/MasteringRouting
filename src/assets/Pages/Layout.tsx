import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutRoot = () => {
  return (
    <>
        <Navbar/><Outlet/> 
        {/* <h1>LayoutRoot</h1> */}
    </>
  )
}

export default LayoutRoot