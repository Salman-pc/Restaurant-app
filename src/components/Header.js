import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import image from '../asetes/image.png';

function Header() {
  const [showNavItems, setShowNavItems] = useState(true);

  const handleCheckoutClick = () => {
    setShowNavItems(false);
  };

  return (
    <header className='heder bg-[#dba607] flex fixed z-10 items-center w-full h-[75px] shadow-lg p-2'>
      <nav className='flex h-full w-full'>
        <div className='logo w-16 h-7'>
          <RouterLink to='/'>
            <img className='rounded-full ml-2' src={image} alt="Logo" />
          </RouterLink>
        </div>
        <ul className='flex ml-auto space-x-4 items-center mr-4'>
          <li>
            <RouterLink to='/' className='homecheckout hover:text-gray-500' onClick={() => setShowNavItems(true)}>Home</RouterLink>
          </li>
          <li>
            <RouterLink to='/checkout' className='homecheckout hover:text-gray-500' onClick={handleCheckoutClick}>Checkout</RouterLink>
          </li>
          {showNavItems && (
            <>
              <li>
                <ScrollLink to="about-section" smooth={true} duration={500} offset={-70} className='cursor-pointer homecheckout hover:text-gray-500'>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact-section" smooth={true} duration={500} offset={-70} className='homecheckout cursor-pointer hover:text-gray-500'>
                  Contact
                </ScrollLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
