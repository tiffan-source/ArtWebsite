import React from 'react';
import logoImage from '../assets/images/logo.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import insta from '../assets/icons/instagram.svg';
import whatsApp from '../assets/icons/whatsapp.svg';

function Footer() {
  return (
    <footer className='bg-primary'>
      <section className='flex flex-col gap-y-8 justify-between items-center relative py-6 px-4 md:flex-row md:gap-y-0'>
        <a href="#home" className="logo 2md:self-start"><img src={logoImage} alt="" className='h-10' /></a>
        <div className='max-w-xs text-white text-left md:text-center 2md:self-start'>
          <p>Lorem ipsum dolor sit amet consectetur. Dolor orci egestas aliquam sed nibh. Sed in tempus sed posuere.</p>
        </div>
        <div className='flex justify-between items-center w-60 2md:self-start'>
          <a href="#menu" className='w-6'><img src={facebook} alt=""/></a>
          <a href="#gallery" className='w-6'><img src={twitter} alt=""/></a>
          <a href="#team" className='w-6'><img src={insta} alt=""/></a>
          <a href="#contact" className='w-6'><img src={whatsApp} alt=""/></a>
        </div>
      </section>
    </footer>
  )
}

export default Footer