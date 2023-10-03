import React, {useState, useEffect} from 'react'
import logoImage from '../../assets/images/logo.svg';
import logoImage2 from '../../assets/images/logoBlack.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import NavList from '../../routes/NavList';
import { useLocation } from 'react-router-dom';
import ModalNavbar from './ModalNavbar';


function Navbar() {
    const clip = ['clip-none', 'clip-active']; // Add more colors as needed
    const [currentclip, setCurrentclip] = useState(0);
    const [logo, setLogo] = useState(logoImage);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const changeTextColor = () => {
        setCurrentclip((currentclip + 1) % clip.length);
    };

    useEffect(() => {
        if(location.pathname.includes('contact')) {
            setLogo(logoImage2);
        }else{
            setLogo(logoImage);
        }
    }, [location.pathname]);



  return (
    <>
        <ModalNavbar isOpen={isOpen} onClose={()=>{
            setIsOpen(false);
        }} />
        <nav className='absolute top-0 w-screen px-4 py-4 z-10 container left-1/2 -translate-x-1/2'>
        <div className='flex justify-between items-center'>
          <a href="/">
            <img src={logo} alt="My Logo" />
          </a>
          <ul className='gap-12 text-white hidden md:flex'>
            {NavList.map((item, index) => {
                return (
                    <li key={index} className='cursor-pointer'>
                    <a href={item.url}>
                        {item.title}
                    </a>
                    </li>
                )
            })}
          </ul>
          <div id="menu-btn" className='block cursor-pointer md:hidden' onClick={()=>{
                setIsOpen(!isOpen);
          }}>
            <FontAwesomeIcon icon={faBars} className={`text-${location.pathname.includes('contact') ? 'black' : 'white'} text-2xl`} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar