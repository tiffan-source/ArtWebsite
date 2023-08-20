import React from 'react'
import logoImage from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Navbar() {
  const clip = ['clip-none', 'clip-active']; // Add more colors as needed
  const [currentclip, setCurrentclip] = useState(0);

  const changeTextColor = () => {
    setCurrentclip((currentclip + 1) % clip.length);
  };
  return (
    <>
      <nav className='absolute top-0 left-0 container mx-auto py-4 z-10'>
        <div className='flex justify-between items-center'>
          <a href="#home">
            <img src={logoImage} alt="My Logo" />
          </a>
          <ul className='flex gap-6'>
            <li>
              <a href="#home" className=''>Home</a>
            </li>
            <li>
              <a href="#gallery" className=''>Gallery</a>
            </li>
            <li>
              <a href="#artiste" className=''>Artiste</a>
            </li>
            <li>
              <a href="#contact" className=''>Contact</a>
            </li>
          </ul>
          <div id="menu-btn" className='hidden cursor-pointer'></div>
        </div>
      </nav>

      <nav className='absolute left-0 right-0 z-10 md:hidden'>
        <div className='flex justify-between items-center relative my-0 mx-auto py-6 px-4'>
          <a href="#home" className="logo"><img src={logoImage} alt="" className='h-4' /></a>
          <div className={`absolute bg-white text-primary top-3/4 left-0 right-0 border-solid border-y-2 border-y-primary transition-all duration-200 ease-linear ${clip[currentclip]}`}>
            <a href="#home" className='block m-2'>Home</a>
            <a href="#gallery" className='block m-2'>Gallery</a>
            <a href="#artiste" className='block m-2'>Artiste</a>
            <a href="#contact" className='block m-2'>Contact</a>
          </div>
          <span className='text-white text-xl' onClick={changeTextColor}>
            {currentclip === 0 ? <FontAwesomeIcon icon={faBars} className='transition-all duration-200 ease-linear' /> : <FontAwesomeIcon icon={faXmark} className='transition-all duration-200 ease-linear rotate-180' />}
          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar