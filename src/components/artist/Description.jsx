import React from 'react'
import description from '../../assets/images/discoverDescription.svg';

function Description() {
    return (
        <div className='flex mb-20'>
            <div className='w-1/2 bg-tertiary flex flex-col justify-center items-center gap-y-6'>
                <h2 className='text-3xl font-bold'>Welcome to the art and history</h2>
                <p className='text-base text-center w-[35rem]'>Lorem ipsum dolor sit amet consectetur. Eu habitant nec arcu massa aenean lectus tristique posuere quam. Venenatis odio proin amet suspendisse enim. Tincidunt suspendisse id quis metus dapibus pulvinar. Mauris vulputate maecenas convallis ut amet pellentesque elit. Nibh viverra semper arcu sed morbi dolor aliquam elit. Pharetra vitae scelerisque turpis cursus a natoque orci tortor amet. Viverra convallis enim pulvinar fringilla posuere nunc euismod. Proin mauris sit enim pellentesque eu lorem. Quis facilisis molestie ornare in vestibulum pulvinar et ut ornare.</p>
            </div>
            <div className='w-1/2'>
                <img src={description} alt="" />

            </div>
        </div>
    )
}

export default Description