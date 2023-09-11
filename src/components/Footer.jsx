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
          <a href="#menu" className=''><img src={facebook} alt="" className='h-10' /></a>
          <a href="#gallery" className=''><img src={twitter} alt="" className='h-10' /></a>
          <a href="#team" className=''><img src={insta} alt="" className='h-10' /></a>
          <a href="#contact" className=''><img src={whatsApp} alt="" className='h-10' /></a>
        </div>
      </section>
    </footer>
  )
}

export default Footer