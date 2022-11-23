import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='nav-link-container'>
            <a href='/' >
              <img src="https://www.vooler.fi/wp-content/uploads/vooler_logo_horizontal.png" id="logo"></img>
            </a>
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
                <Link className='react-link' to='/LoginPage'>
                  Login
                </Link>
              </li>
              <li className='link-item'>
                <Link className='react-link' to='/video'>
                  Viewer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className='navbarbottom'>
        
      </nav>
    </>
  );
};

export default Navbar;