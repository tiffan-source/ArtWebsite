import React from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <header className='min-h-[calc(100vh-10rem)] bg-header-cover bg-no-repeat bg-center bg-cover relative flex justify-center items-center z-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[#000a]'></div>
        <div className='text-center text-white relative z-50 flex items-center justify-center flex-col gap-8'>
            <h1 className='text-3xl font-bold max-w-[34rem]'>Plongez dans un monde d'émotions capturées sur toile</h1>
            <p className='max-w-[50rem]'>
                Explorez un univers d'émotions figées dans chaque toile, où l'art s'exprime avec passion et où les histoires prennent vie. Notre galerie vous ouvre les portes d'une expérience artistique unique, où la créativité rencontre l'âme.
            </p>
            <a className='animate-bounce hover:cursor-pointer scroll-smooth' href='#start'>
                <FontAwesomeIcon icon={faArrowDown}/>
            </a>
        </div>
    </header>
  )
}

export default Header