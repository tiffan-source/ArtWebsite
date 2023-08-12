import React from 'react'
import logoImage from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
        <nav className='absolute top-0 left-0 container mx-auto py-4'>
            <div className='flex justify-between items-center'>
                <a href="#home">
                    <img src={logoImage} alt="My Logo"/>
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
        <div className=''>
          <div className='sticky top-0 left-0 right-0 bg-blue-200'>
            <section className='my-0 mx-auto flex justify-between items-center relative py-6 px-10'>
              <a href="#home" className="logo"><img src={logoImage} alt="" className='h-10' /></a>
              <nav>
                <a href="#home"    className=''>Home</a>
                <a href="#gallery"   className='' >Gallery</a>
                <a href="#artiste"    className=''>Artiste</a>
                <a href="#contact"    className=''>Contact</a>
              </nav>
              <span>
                <FontAwesomeIcon icon={faArrowDown}/>
            </span>
            </section>
          </div>
        </div>
    </>
  )
}

export default Navbar