// src/components/AboutSection.tsx

'use client'; // Required for Next.js 13+ App Router

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  // Create refs for the elements we want to animate
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const headingEl = headingRef.current;
    const contentEl = contentRef.current;
    const imageEl = imageRef.current;

    // Set initial states (hidden)
    gsap.set([headingEl, contentEl, imageEl], { opacity: 0, y: 50 });

    // Create a GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 80%', // Start animation when the top of the section is 80% from the top of the viewport
        end: 'bottom 20%',
        toggleActions: 'play none none none', // Play the animation once on entering the viewport
      },
    });

    // Add animations to the timeline
    tl.to(headingEl, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out' 
      })
      .to(contentEl, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.5') // Overlap with the previous animation by 0.5s
      .to(imageEl, { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }, '-=0.5'); // Overlap as well

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Make sure to add the id="about" if your header navigation links to it
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading" ref={headingRef}>
            About Me
          </h2>
          <div className="about-text" ref={contentRef}>
            <p>
              Hello! I'm Nithish Kumar, a passionate and creative full-stack developer based in India. With a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in building dynamic, responsive, and user-friendly web applications from the ground up.
            </p>
            <p>
              My journey in tech is driven by a love for problem-solving and a desire to bring ideas to life. I thrive on turning complex challenges into elegant, efficient, and scalable solutions. When I'm not coding, you can find me exploring the latest technology trends or contributing to open-source projects.
            </p>
          </div>
        </div>
        <div className="about-image-wrapper" ref={imageRef}>
          {/* You can replace this with an <Image> component in Next.js */}
          <img 
            src="profolio_pic.jpeg" // Replace with your actual image URL
            alt="A portrait of the developer" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;