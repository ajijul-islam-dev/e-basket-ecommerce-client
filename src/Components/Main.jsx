import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Navbar/Nav'

function Main() {
  return (
    <>  
        <Nav/>
        <Outlet/>
    </>
  )
}

export default Main