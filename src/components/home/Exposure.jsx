import React from 'react';
import firstExpo from '../../assets/images/firstExpo.svg';
import secondExpo from '../../assets/images/secondExpo.svg';
import thirdExpo from '../../assets/images/thirdExpo.svg';
import ExposureDescription from './ExposureDescription'

function Exposure() {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center flex-col gap-16 max-w-6xl2 mb-16 mx-5 md:mx-auto md:flex-row md:py-12 md:px-4 md:mb-0'>
                <ExposureDescription />

                <div className='md:grow md:shrink md:basis-default -order-1 md:order-1'><img src={firstExpo} alt="" className='w-full' /></div>
            </div>


            <div className='flex items-center flex-col gap-16 max-w-6xl2 mb-16 my-0 mx-5 md:mx-auto md:flex-row md:py-12 md:px-4 md:mb-0'>
                <div className='md:grow md:shrink md:basis-default'><img src={secondExpo} alt="" className='w-full' /></div>
                <ExposureDescription />
            </div>



            <div className='flex items-center flex-col gap-16 max-w-6xl2 mb-16 mx-5 md:mx-auto md:flex-row md:py-12 md:px-4 md:mb-0'>
                <ExposureDescription />

                <div className='md:grow md:shrink md:basis-default -order-1 md:order-1'><img src={thirdExpo} alt="" className='w-full' /></div>
            </div>
        </div>


    )
}

export default Exposure