'use client'

import React, { useState, useEffect } from 'react';

// Data for navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  // State to track if the header should have a background
  const [hasScrolled, setHasScrolled] = useState(false);
  // State for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for the active link
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        hasScrolled ? 'bg-black/70 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo or Site Name */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white">
              MyPortfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeLink === link.name
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeLink === link.name && (
                     <span className="block h-0.5 w-full bg-cyan-400 mt-1"></span>
                  )}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                // Close Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
    // UPDATED: Added classes for fixed positioning, background, and centering
    <div 
      className="md:hidden fixed inset-0 top-20 z-60 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center" 
      id="mobile-menu"
      onClick={() => setIsMenuOpen(false)} // Optional: Close modal by clicking the background
    >
      <div className="flex flex-col items-center space-y-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from closing when a link is clicked
              setActiveLink(link.name);
              setIsMenuOpen(false);
            }}
            // UPDATED: Increased text size for better modal presentation
            className={`block px-3 py-2 rounded-md text-2xl font-medium ${
              activeLink === link.name 
                ? 'text-cyan-400' 
                : 'text-gray-200 hover:text-white'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )}
    </header>
  );
};

export default Header;