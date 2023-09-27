import React from 'react';
import artist1 from '../../assets/images/artist1.svg';
import artist2 from '../../assets/images/artist2.svg';
import artist3 from '../../assets/images/artist3.svg';
import artist4 from '../../assets/images/artist4.svg';
import artist5 from '../../assets/images/artist5.svg';
import artist6 from '../../assets/images/artist6.svg';
import '../../Gallery.css'

function ArtistGallery2() {
    return (
        <div className='py-12 px-4 my-0 mx-auto md:px-8'>
            <div className="grid gap-6 justify-center md:grid-cols-gallery">

                <div className='w-[400px] h-[650px] [perspective:1000px] mycontainer 2sm:w-[300px] 2sm:h-[450px]'>
                    <div className='mycard w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]'>
                        <div className='w-full h-full absolute [backface-visibility:hidden]'>
                            <img src={artist1} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='text-white text-center w-full h-full bg-gradient-to-r from-painting1 to-painting2 flex flex-col justify-center items-center gap-5 absolute [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                            <h1 className='text-2xl'>Painting name</h1>
                            <p className='text-xl'>A brief description of the painting</p>
                        </div>
                    </div>
                </div>

                <div className='w-[400px] h-[650px] [perspective:1000px] mycontainer 2sm:w-[300px] 2sm:h-[450px]'>
                    <div className='mycard w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]'>
                        <div className='w-full h-full absolute [backface-visibility:hidden]'>
                            <img src={artist2} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='text-white text-center w-full h-full bg-gradient-to-r from-painting1 to-painting2 flex flex-col justify-center items-center gap-5 absolute [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                            <h1 className='text-2xl'>Painting name</h1>
                            <p className='text-xl'>A brief description of the painting</p>
                        </div>
                    </div>
                </div>

                <div className='w-[400px] h-[650px] [perspective:1000px] mycontainer 2sm:w-[300px] 2sm:h-[450px]'>
                    <div className='mycard w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]'>
                        <div className='w-full h-full absolute [backface-visibility:hidden]'>
                            <img src={artist3} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='text-white text-center w-full h-full bg-gradient-to-r from-painting1 to-painting2 flex flex-col justify-center items-center gap-5 absolute [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                            <h1 className='text-2xl'>Painting name</h1>
                            <p className='text-xl'>A brief description of the painting</p>
                        </div>
                    </div>
                </div>

                <div className='w-[400px] h-[650px] [perspective:1000px] mycontainer 2sm:w-[300px] 2sm:h-[450px]'>
                    <div className='mycard w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]'>
                        <div className='w-full h-full absolute [backface-visibility:hidden]'>
                            <img src={artist4} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='text-white text-center w-full h-full bg-gradient-to-r from-painting1 to-painting2 flex flex-col justify-center items-center gap-5 absolute [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                            <h1 className='text-2xl'>Painting name</h1>
                            <p className='text-xl'>A brief description of the painting</p>
                        </div>
                    </div>
                </div>


                <div className='w-[400px] h-[650px] [perspective:1000px] mycontainer 2sm:w-[300px] 2sm:h-[450px]'>
                    <div className='mycard w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]'>
                        <div className='w-full h-full absolute [backface-visibility:hidden]'>
                            <img src={artist5} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='text-white text-center w-full h-full bg-gradient-to-r from-painting1 to-painting2 flex flex-col justify-center items-center gap-5 absolute [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                            <h1 className='text-2xl'>Painting name</h1>
                            <p className='text-xl'>A brief description of the painting</p>
                        </div>
                    </div>
                </div>


                <div className='w-[400px] h-[650px] [perspective:1000px] mycontainer 2sm:w-[300px] 2sm:h-[450px]'>
                    <div className='mycard w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]'>
                        <div className='w-full h-full absolute [backface-visibility:hidden]'>
                            <img src={artist6} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='text-white text-center w-full h-full bg-gradient-to-r from-painting1 to-painting2 flex flex-col justify-center items-center gap-5 absolute [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                            <h1 className='text-2xl'>Painting name</h1>
                            <p className='text-xl'>A brief description of the painting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ArtistGallery2