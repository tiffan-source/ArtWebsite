import React from 'react'
import otherBoard1 from '../../assets/images/otherBoard1.svg';
import otherBoard2 from '../../assets/images/otherBoard2.svg';
import otherBoard3 from '../../assets/images/otherBoard3.svg';
import otherBoard5 from '../../assets/images/otherBoard5.svg';
import otherBoard6 from '../../assets/images/otherBoard6.svg';
import otherBoard7 from '../../assets/images/otherBoard7.svg';

function OtherBoardList() {
    return (
        <div className='flex justify-center gap-x-14 mb-20'>
            <div>
                <div className='mb-8'>
                    <img src={otherBoard1} alt="" />
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>

                <div className=''>
                    <img src={otherBoard1} alt="" />
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>
            </div>

            <div>
                <div className='mb-11'>
                    <img src={otherBoard3} alt="" />
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>

                <div className=''>
                    <img src={otherBoard2} alt="" />
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>
            </div>

            <div>
                <div className='mb-11'>
                    <img src={otherBoard5} alt="" />
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>

                <div className=''>
                    <img src={otherBoard6} alt="" />
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>
            </div>

            <div>
                <div className='mb-10'>
                    <div className='w-60'>
                        <img src={otherBoard5} alt="" className='w-full ' />
                    </div>
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>

                <div className=''>
                    <img src={otherBoard7} alt="" />
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                </div>
            </div>
        </div>
    )
}

export default OtherBoardList