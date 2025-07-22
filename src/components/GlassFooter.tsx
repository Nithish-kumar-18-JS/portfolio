'use client';
import React from 'react';
import { gsap } from 'gsap';

const GlassFooter: React.FC = () => {
  // Create a ref for the footer container
  const footerRef = React.useRef<HTMLDivElement>(null);

  // Animate the footer on component mount
  React.useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      {
        opacity: 0,
        y: 20, // Start 20px below its final position
      },
      {
        opacity: 1,
        y: 0, // Animate to its final position
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5, // Optional delay
      }
    );
  }, []); // Empty dependency array ensures this runs only once

  return (
    <footer className="footer-container" ref={footerRef}>
      <p>
        © {new Date().getFullYear()} Nithish Kumar. Built with <span className="heart">❤️</span> using MERN Stack.
      </p>
    </footer>
  );
};

export default GlassFooter;