import React from 'react';

function ExposureDescription() {
    return (
        <div className='flex flex-col gap-y-6 md:grow md:shrink md:basis-default'>
            <div className='w-16 h-1 bg-primary'></div>
            <div className='text-2xl font-bold'>Text Head Inspi</div>
            <p>Until 24 Juin 2023 <br /> Location Ivory Coast</p>
            <div>Lorem ipsum dolor sit amet consectetur. Felis dignissim lacinia tincidunt cras. Pretium eu tortor justo nec.</div>
            <div>Sed id fusce porta pulvinar vestibulum justo sed arcu eu. Massa enim leo justo non. Suspendisse vel sit placerat posuere dictum cras.</div>
            <a href="https://google.com" className='max-w-max inline-block border-solid border-1 border-primary cursor-pointer py-2 px-4'>Discover</a>
        </div>
    )
}

export default ExposureDescription