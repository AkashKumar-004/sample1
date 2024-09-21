import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'

function WebLayout() {
  return (
    <>
       <NavBar/>
       <Outlet/>
    </>
  )
}
export default WebLayout;
