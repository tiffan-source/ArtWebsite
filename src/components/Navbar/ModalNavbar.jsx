// ModalNavbar.js

import React from 'react';
import NavList from '../../routes/NavList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalNavbar = ({ isOpen, onClose }) => {
  return (
    // La modal est affichée uniquement si isOpen est true
    isOpen && (
      <div className="fixed w-screen h-screen inset-0 flex items-center justify-center z-50 bg-[#00000083]">
        <div className="modal bg-white p-6 rounded-3xl relative">
          <ul className="list-none p-0">
            <span
                className="absolute top-6 right-6 text-gray-600 cursor-pointer"
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faXmark} />
            </span>

            {/* <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                Accueil
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                À propos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                Contact
              </a>
            </li> */}
            {
                NavList.map((item, index) => {
                    return (
                        <li key={index} className='cursor-pointer py-8 px-6 min-w-[18rem] text-center' >
                            <Link to={item.url} onClick={()=>{
                                onClose();
                            }}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
          </ul>
        </div>
      </div>
    )
  );
};

export default ModalNavbar;
