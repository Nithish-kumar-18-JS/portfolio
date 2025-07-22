'use client'

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // 1. Import the ScrollToPlugin

// 2. Register the plugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

// Data for navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 3. Create the GSAP scroll handler function
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault(); // Prevent the default anchor jump
    
    gsap.to(window, {
      duration: 3, // Animation duration in seconds
      scrollTo: {
        y: href, // The element to scroll to
        offsetY: 80 // Offset to account for the 80px (h-20) fixed header
      },
      ease: 'power3.inOut' // Easing function for a smooth effect
    });
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        hasScrolled ? 'bg-black/70 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-white">
              MyPortfolio
            </a>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  // 4. Update onClick to use the new handler
                  onClick={(e) => {
                      handleLinkClick(e, link.href);
                      setActiveLink(link.name);
                  }}
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

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-20 z-60 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center" 
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // 4. Update onClick here as well
                onClick={(e) => {
                  handleLinkClick(e, link.href);
                  setActiveLink(link.name);
                }}
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