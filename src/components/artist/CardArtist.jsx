import React from 'react'
import '../../assets/styles/Gallery.css'

function CardArtist({nom, prenom, description, photo}) {
  return (
    <div className='w-[400px] h-[650px] [perspective:1000px] mycontainer 2sm:w-[300px] 2sm:h-[450px]'>
        <div className='mycard w-full h-full relative transition-all duration-700 [transform-style:preserve-3d]'>
            <div className='w-full h-full absolute [backface-visibility:hidden]'>
                <img src={photo} alt="" className='object-cover w-full h-full' />
            </div>
            <div className='text-white text-center w-full h-full bg-gradient-to-r from-painting1 to-painting2 flex flex-col justify-center items-center gap-5 absolute [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <h1 className='text-2xl'>{nom} {prenom}</h1>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    </div>
    )
}

export default CardArtist