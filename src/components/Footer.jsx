import React from 'react';
import logoImage from '../assets/images/logo.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import insta from '../assets/images/instagram.svg';
import whatsApp from '../assets/images/whatsapp.svg';

function Footer() {
  return (
    <footer className='bg-slate-800'>
      <section className='flex justify-between items-center relative py-6 px-10'>
        <a href="#home" clasName="logo"><img src={logoImage} alt="" className='h-10' /></a>
        <div className='max-w-xs text-white text-center'>
          <p>Lorem ipsum dolor sit amet consectetur. Dolor orci egestas aliquam sed nibh. Sed in tempus sed posuere.</p>
        </div>
        <div className='flex justify-between items-center w-60'>
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