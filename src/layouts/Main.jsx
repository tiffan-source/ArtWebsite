import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

function Main() {
  return (
	<div className='font-serif'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Main