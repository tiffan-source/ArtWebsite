import React from 'react';
import dividerL from '../../assets/images/dividerL.svg';
import divider from '../../assets/images/divider.svg';

function Events() {
  return (
    <div className='bg-tertiary flex flex-col py-6 px-6 max-w-6xl2 mx-auto gap-y-10 mb-16 md:py-14 md:px-12'>
      <div>
        <p className='font-semibold text-3xl mb-4'>Dont’ Miss</p>
        <p className='font-bold text-4xl'>Upcoming Events</p>
      </div>

      <div className='self-center flex flex-col items-center gap-x-8 md:flex-row'>
        <div className='hidden md:block'><img src={dividerL} alt="" /></div>
        <div className='mb-6 md:mb-0'>
          <h2 className='font-semibold underline text-3xl mb-3'>Temporarly Closed</h2>
          <h3 className='text-secondary text-3xl mb-3'>Until June, 16</h3>
          <p className='max-w-md text-justify'>Lorem ipsum dolor sit amet consectetur. Enim cursus dolor nulla in. Tincidunt ullamcorper gravida sit sapien lacus risus. Amet arcu lacinia varius aliquam sagittis fames mattis. Tellus ipsum eu ornare feugiat bibendum morbi ut. Hac tincidunt aliquet non mattis tortor massa lacus.</p>
        </div>
        <div className='hidden md:block'><img src={divider} alt="" /></div>
        <p className='font-semibold text-2xl text-center xl:text-3xl'>Enjoy A Virttual <br className='hidden md:block' /> tour while you <br className='hidden md:block' /> wait</p>
      </div>
    </div>
  )
}

export default Events