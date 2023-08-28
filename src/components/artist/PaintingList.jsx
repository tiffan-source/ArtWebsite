import React from 'react';
import painting1 from '../../assets/images/painting1.svg';

function PaintingList() {
    return (
        <div className='flex gap-x-20 justify-center my-6'>
            <div className='flex flex-col gap-y-6 max-w-max'>
                <div className='font-bold text-2xl'>Type Art</div>
                <div className='w-full h-1 bg-primary'></div>
                <div>
                    <img src={painting1} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                    <h5>Date making Table</h5>
                </div>
            </div>

            <div className='flex flex-col gap-y-6 max-w-max'>
                <div className='font-bold text-2xl'>Type Art</div>
                <div className='w-full h-1 bg-primary'></div>
                <div>
                    <img src={painting1} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                    <h5>Date making Table</h5>
                </div>
            </div>

            <div className='flex flex-col gap-y-6 max-w-max'>
                <div className='font-bold text-2xl'>Type Art</div>
                <div className='w-full h-1 bg-primary'></div>
                <div>
                    <img src={painting1} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-xl mb-2'>Title table Title table</h2>
                    <h4 className='mb-2'>Artiste Name</h4>
                    <h5>Date making Table</h5>
                </div>
            </div>
        </div>


    )
}

export default PaintingList