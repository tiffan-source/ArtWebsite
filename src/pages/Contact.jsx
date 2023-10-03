import React from 'react'
import owner from '../assets/images/owner.jpg'
function Contact() {
  return (
    <div className='md:grid md:grid-cols-2'>
        <div className='flex justify-center flex-col items-center py-24'>
            <span className='mb-2 text-sm'>About and Contact</span>
            <h1 className='mb-4 text-4xl font-bold'>Johana Jones</h1>
            <h2 className='mb-12 font-bold text-primary'>Gallery Owner</h2>
            <p className='px-4 max-w-[34rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi deleniti iusto, eos iure dolore nemo magnam. Debitis repellendus sint aperiam perspiciatis minus maxime reprehenderit aliquam iste cum earum. Maxime?</p>
        </div>
        <div className='overflow-hidden'>
            <img className='w-full h-auto' src={owner} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Contact