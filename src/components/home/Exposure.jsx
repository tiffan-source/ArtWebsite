import React from 'react';
import firstExpo from '../../assets/images/firstExpo.svg';
import secondExpo from '../../assets/images/secondExpo.svg';
import thirdExpo from '../../assets/images/thirdExpo.svg';
import ExposureDescription from './ExposureDescription'

function Exposure() {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center gap-16 py-12 px-8 max-w-6xl2 my-0 mx-auto'>
                <ExposureDescription />

                <div className='grow shrink basis-default'><img src={firstExpo} alt="" className='w-full' /></div>
            </div>


            <div className='flex items-center gap-16 py-12 px-8 max-w-6xl2 my-0 mx-auto'>
                <div className='grow shrink basis-default'><img src={secondExpo} alt="" className='w-full' /></div>
                <ExposureDescription />
            </div>



            <div className='flex items-center gap-16 py-12 px-8 max-w-6xl2 my-0 mx-auto'>
                <ExposureDescription />

                <div className='grow shrink basis-default'><img src={thirdExpo} alt="" className='w-full' /></div>
            </div>
        </div>


    )
}

export default Exposure