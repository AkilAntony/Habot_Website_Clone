
import React,{useEffect, useState} from 'react'
import './Navbar.css';
import logo from '../../Assets/habot-logo.jpg'
import { Link } from 'react-router-dom';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  const [isSmallScreen,setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  // this function gets called every user resize the screen
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(()=>{
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navContainer justify-between flex items-center'>
      <div className='logoContainer flex'>
        <img src={logo}
        alt="logo"
        className='logo md:ml-16 ml-4 '/>
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
            styles ='text font-bold h-12 w-48
             text-sm border-customGreen border border-solid'
            text = 'Login / Sign up'
            onClick={toggleMenu}
            />
        </Link>
      </div>
      {isSmallScreen &&
       <div className={`hamburger ${isOpen ? "open" : ""} mr-3`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
      }
    </div>
  ) 
}

export default Navbar