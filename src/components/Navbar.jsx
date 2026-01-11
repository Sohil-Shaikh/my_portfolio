import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo" id='hname'>
          <Link to="/">Sohil</Link>
        </div>

        <button className="mobile-menu" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>

        {/* <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            
            <Link 
              to="about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/skills"
              className={location.pathname === '/skills' ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/resume"
              className={location.pathname === '/resume' ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li> */}

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="theme-toggle-item">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </nav>
    </header >
  );
};

export default Navbar;
