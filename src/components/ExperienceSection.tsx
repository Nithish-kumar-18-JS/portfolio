'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import SVGComponent from './SvgComponent';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const ExperienceSection = () => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollToPlugin);
  const shipRef = useRef<SVGRectElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef(null);
  const handleStart = () => {
    gsap.to(shipRef.current, {
      duration: 20,
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        curviness: 1,
      },
      onUpdate: () => {
        // Get spaceship's position on screen
        const rect = shipRef.current.getBoundingClientRect();

        // Scroll the window to center spaceship (You may want containerRef if your container scrolls!)
        gsap.to(window, {
          scrollTo: {
            y: window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2,
            x: window.scrollX + rect.left + rect.width / 2 - window.innerWidth / 2,
          },
          duration: 0.2,
        });
      },
    });
  };



  React.useEffect(() => {
    if (!shipRef.current || !pathRef.current) return;
    gsap.to(shipRef.current, {
      duration: 10,  // 1 as the duration with `scrub`
      ease: "none",
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        curviness: 1,
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",    // when the trigger enters the viewport
        end: "bottom center",   // when the trigger leaves the viewport
        scrub: true,            // ties animation progress to scrollbar
      }
    });
    // cleanup
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const experiences = [
    {
      title: "2020 - 2021 - Started Learning MERN Stack Completed Udemy Course",
      image: "google.png",
    },
    {
      title: "2021 - 2022 - Intern at App innovation technologies pvt ltd",
      image: "amazon.png",
    },
    {
      title: "2022 - 2024 - MERN Stack Developer - App innovation technologies pvt ltd",
      image: "microsoft.png",
    },
    {
      title: "2024(May) - 2024 (Nov) - Nodejs Developer - Top Class Entertainment Pvt ltd",
      image: "apple.png",
    },
    {
      title: "2024(Nov) - Present - Full Stack Engineer - Asign Pvt ltd",
      image: "meta.png",
    }
  ];
  

  return (
    <div className='h-screen'>
      <div className='flex flex-col justify-center items-center h-20'>
        <p className='text-4xl font-normal text-white'>Experience</p>
      </div>
      <div className='flex flex-col justify-center items-center h-20'>
        <button onClick={handleStart} className='border-2 border-whitet text-white px-10 py-2 rounded-full z-50 cursor-pointer'>Start</button>
      </div>
      <div className='flex justify-center items-center h-full mt-20 max-sm:mt-0 max-md:mt-0 max-lg:mt-0 max-xl:mt-10' ref={containerRef}>
        <SVGComponent className='mt-100 max-sm:mt-0 max-md:mt-0 max-lg:mt-0 max-xl:mt-10 max-sm:scale-200 max-md:scale-150 max-lg:scale-100 max-xl:scale-100' pathRef={pathRef} shipRef={shipRef} />
      </div>

      {/* Experince Section zig zag 5 rows */}
      <div className="grid grid-cols-2 gap-4 mt-20">
        {experiences.map((exp, idx) =>
          idx % 2 === 0 ? (
            // Even rows: right side
            <React.Fragment key={exp.title}>
              <div></div>
              <div className="flex flex-col justify-center items-center  h-[284px] w-[349px]">
                <p className="text-center">{exp.title}</p>
                <img src={exp.image} alt="" />
              </div>
            </React.Fragment>
          ) : (
            // Odd rows: left side
            <React.Fragment key={exp.title}>
              <div className="flex flex-col justify-center items-center  h-[284px] w-[349px]">
                <p className="text-center">{exp.title}</p>
                <img src={exp.image} alt="" />
              </div>
              <div></div>
            </React.Fragment>
          )
        )}
      </div>

    </div>
  );
};

export default ExperienceSection;
