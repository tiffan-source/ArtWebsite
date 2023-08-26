import React from 'react';

function HeaderNd(props) {
    return (
        <header className={`min-h-[calc(100vh-20rem)] relative flex justify-center items-center z-0 ${props.bgc}`}>
            <div className='absolute top-0 left-0 w-full h-full bg-[#000a]'></div>
            <div className='text-center text-white relative z-50 flex items-center justify-center flex-col gap-8'>
                <h1 className='text-3xl font-bold max-w-[34rem]'>{props.title}</h1>
                <a href="https://google.com" className='w-36 border-solid border-1 border-primary cursor-pointer py-3 px-4'>Discover</a>
            </div>
        </header>
    )
}

export default HeaderNd