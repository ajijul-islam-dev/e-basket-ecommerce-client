import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Navbar/Nav'
import CartBtn from './CartBtn/CartBtn'

function Main() {
  return (
    <>  
        <Nav/>
        <Outlet/>
        <CartBtn/>
    </>
  )
}

export default Main