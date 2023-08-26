import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Gallery() {
    return (
        <div className='font-serif'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Gallery