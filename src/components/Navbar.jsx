import React from 'react'
import logoImage from '../assets/images/logo.svg';

function Navbar() {
  return (
    <header className='sticky top-0 left-0 right-0 bg-blue-200'>
      <section className='my-0 mx-auto flex justify-between items-center relative py-6 px-10'>
        <a href="#home" className="logo"><img src={logoImage} alt="" className='h-10' /></a>
        <nav>
          <a href="#home" className='ml-8 text-xl hover:text-amber-700 hover:underline'>Home</a>
          <a href="#about" className='ml-8 text-xl hover:text-amber-700 hover:underline' >About</a>
          <a href="#menu" className='ml-8 text-xl hover:text-amber-700 hover:underline'>Menu</a>
          <a href="#gallery" className='ml-8 text-xl hover:text-amber-700 hover:underline'>Gallery</a>
          <a href="#team" className='ml-8 text-xl hover:text-amber-700 hover:underline'>Team</a>
          <a href="#contact" className='ml-8 text-xl hover:text-amber-700 hover:underline'>Contact</a>
        </nav>
        <div id="menu-btn" className='hidden text-xl cursor-pointer'></div>
      </section>
    </header>
  )
}

export default Navbar