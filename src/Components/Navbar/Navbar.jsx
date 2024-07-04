
import React,{useEffect, useState} from 'react'
import './Navbar.css';
import Home from '../Home/Home';

import { Link } from 'react-router-dom';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'


function Navbar({isNavbarOpen,setIsNavbarOpen}) {
  const [isSmallScreen,setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  // this function gets called everytime user resize the screen
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(()=>{
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsNavbarOpen(!isNavbarOpen)

  };

  return (
    <div className='navContainer justify-between flex items-center'>
      <div className='logoContainer '>
        <img src='/Assets/habot-logo.jpg'
        alt="logo"
        className='logo md:ml-20 ml-2 h-11 w-44 object-cover'/>
      </div>
      
      {/* Nav links */}
      <div className={`navLinksContainer items-center md:flex mr-16 gap-16
         menu ${isOpen ? "open" : ""} flex items-center md:gap-6  text-white `}
         id="navlink"
         onClick={toggleMenu} >
        <Link onClick={toggleMenu}>Find Suppliers</Link>
        <Link className='flex items-center gap-1'
          onClick={toggleMenu}>
          Find Service Tags
          <FontAwesomeIcon icon={faAngleDown} />
        </Link>
        <Link>
          <Button 
            styles ='text font-bold h-12 w-48 font-inter
             text-sm border-customGreen border border-solid'
            text = 'Login / Sign up'
            onClick={toggleMenu}
            />
        </Link>
      </div>
      {isSmallScreen &&
       <div className={`hamburger ${isOpen ? "open" : ""} `} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
      }

    </div>
  ) 
}

export default Navbar