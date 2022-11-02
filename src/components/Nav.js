import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='nav-link-container'>
            <Link className='nav-logo' to='/'>
              Logo here
            </Link>
            <button
              className='hamburger-menu'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className='menu-bar'></span>
              <span className='menu-bar'></span>
              <span className='menu-bar'></span>
            </button>
          </div>
          <div className={`menu ${navbarOpen ? 'visible' : 'hidden'}`}>
            <ul
              className='link-list'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <li className='link-item'>
                <Link className='react-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='link-item'>
                <Link className='react-link' to='/upload'>
                  Upload
                </Link>
              </li>
              <li className='link-item'>
                <Link className='react-link' to='/videos'>
                  Videos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
