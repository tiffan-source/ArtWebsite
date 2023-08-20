import React from 'react';
import dividerL from '../../assets/images/dividerL.svg';
import divider from '../../assets/images/divider.svg';

function Events() {
  return (
    <div className='relative bg-tertiary flex flex-col py-14 px-12 max-w-6xl2 mx-auto gap-y-10 mb-16'>
      <div>
        <p className='font-semibold text-3xl mb-4'>Dont’ Miss</p>
        <p className='font-bold text-4xl'>Upcoming Events</p>
      </div>

      <div className='self-center flex items-center gap-x-8 '>
        <div><img src={dividerL} alt="" /></div>
        <div>
          <h2 className='font-semibold underline text-3xl mb-3'>Temporarly Closed</h2>
          <h3 className='text-secondary text-3xl mb-3'>Until June, 16</h3>
          <p className='max-w-md text-justify'>Lorem ipsum dolor sit amet consectetur. Enim cursus dolor nulla in. Tincidunt ullamcorper gravida sit sapien lacus risus. Amet arcu lacinia varius aliquam sagittis fames mattis. Tellus ipsum eu ornare feugiat bibendum morbi ut. Hac tincidunt aliquet non mattis tortor massa lacus.</p>
        </div>
        <div><img src={divider} alt="" /></div>
        <p className='font-semibold text-3xl text-center'>Enjoy A Virttual <br /> tour while you <br /> wait</p>
      </div>
    </div>
  )
}

export default Events