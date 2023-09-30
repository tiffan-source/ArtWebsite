import React from 'react'
import logoImage from '../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavList from '../../routes/NavList';


function Navbar() {
  const clip = ['clip-none', 'clip-active']; // Add more colors as needed
  const [currentclip, setCurrentclip] = useState(0);

  const changeTextColor = () => {
    setCurrentclip((currentclip + 1) % clip.length);
  };
  return (
    <>
      <nav className='absolute top-0 w-screen px-4 py-4 z-10 container left-1/2 -translate-x-1/2'>
        <div className='flex justify-between items-center'>
          <a href="#home">
            <img src={logoImage} alt="My Logo" />
          </a>
          <ul className='gap-12 text-white hidden md:flex'>
            {NavList.map((item, index) => {
                return (
                    <li key={index} className='cursor-pointer'>
                    <a href={item.url}>
                        {item.title}
                    </a>
                    </li>
                )
            })}
          </ul>
          <div id="menu-btn" className='block cursor-pointer md:hidden'>
            <FontAwesomeIcon icon={faBars} className='text-white text-2xl' />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar