import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import image from '../asetes/image.png'; // Ensure this path is correct

function Header() {
  const [showNavItems, setShowNavItems] = useState(true);

  const handleHomeClick = () => {
    setShowNavItems(true); // Ensure "Home" shows the navbar items
  };

  const handleCartClick = () => {
    setShowNavItems(false); // Hide "About" and "Account" when "Cart" is clicked
  };

  const handleAccountClick = () => {
    setShowNavItems(false); // Hide navbar items when account icon is clicked
  };

  return (
    <header className='heder bg-[#dba607] flex fixed z-10 items-center w-full h-[75px] shadow-lg p-2'>
      <nav className='flex h-full  justify-center items-center w-full'>
        <div className='logo w-[55px] mb-6 h-7'>
          <RouterLink to='/Restaurant-app'>
            <img className='rounded-full ml-2 transition-transform duration-300 hover:scale-105' src={image} alt="Logo" />
          </RouterLink>
        </div>
        <ul className='flex ml-auto space-x-4 items-center mr-4'>
          <li>
            <RouterLink to='/Restaurant-app' className='homecheckout hover:text-gray-500' onClick={handleHomeClick}>Home</RouterLink>
          </li>
          <li>
            <RouterLink to='/checkout' className='homecheckout hover:text-gray-500' onClick={handleCartClick}>Cart</RouterLink>
          </li>
          {showNavItems && (
            <>
              <li>
                <ScrollLink to="footer-section" smooth={true} duration={500} offset={-70} className='cursor-pointer homecheckout hover:text-gray-500'>
                  About
                </ScrollLink>
              </li>
              <li>
              <RouterLink to="/login"> 
                  <button className='focus:outline-none' onClick={handleAccountClick}>
                    <i  className="fas fa-user-circle text-3xl hover:text-gray-500"></i>
                  </button>
              </RouterLink>
                
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
