import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Nav = ({ toggleHover }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <a href="#hero" className="nav-logo" onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)}>
          Shrabanti<span>.</span>
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                  onMouseEnter={() => toggleHover(true)} 
                  onMouseLeave={() => toggleHover(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle toggleHover={toggleHover} />
        </div>
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          id="hamburger"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => toggleHover(true)} 
          onMouseLeave={() => toggleHover(false)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
        {sections.map((section) => (
          <a 
            key={section}
            href={`#${section}`}
            className="mob-link"
            onClick={() => setIsOpen(false)}
            onMouseEnter={() => toggleHover(true)} 
            onMouseLeave={() => toggleHover(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <div className="mobile-theme-toggle">
          <ThemeToggle toggleHover={toggleHover} />
        </div>
      </div>
    </>
  );
};

export default Nav;
