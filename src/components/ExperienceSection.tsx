'use client';
import React, { useEffect, useRef, useState } from 'react';
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
      image: "planet_1.png",
      className: "shadow-[0_0_30px_#ad116f]"
    },
    {
      title: "2021 - 2022 - Intern at App innovation technologies pvt Ltd",
      image: "planet_2.png",
      className: "shadow-[0_0_30px_#8a274b]"
    },
    {
      title: "2022 - 2024 - MERN Stack Developer - App innovation technologies pvt Ltd",
      image: "planet_3.png",
      className: "shadow-[0_0_30px_#3558f2]"
    },
    {
      title: "2024(May) - 2024 (Nov) - Nodejs Developer - Top Class Entertainment Pvt Ltd",
      image: "planet_4.png",
      className: "shadow-[0_0_30px_#4e2e9e]"
    },
    {
      title: "2024(Nov) - Present - Full Stack Engineer - Asign Pvt Ltd",
      image: "planet_5.png",
      className: "shadow-[0_0_30px_#87efff]"
    }
  ];

  const handleStart = () => {
    gsap.to(shipRef.current, {
      duration: 20,
      motionPath: {
        path: pathRef?.current,
        align: pathRef?.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      onUpdate: () => {
        const rect = shipRef?.current?.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + rect?.top - window.innerHeight / 2,
          left: window.scrollX + rect?.left - window.innerWidth / 2,
          behavior: 'auto'
        });
      }
    });
  };
  

  return (
    <div id='experience' className='h-screen relative'>
      <div className='flex flex-col justify-center items-center h-20'>
        <p className='text-4xl font-normal text-white'>Experience</p>
      </div>
      <div className='flex flex-col justify-center items-center h-20'>
        <button onClick={handleStart} className='border-2 border-whitet text-white px-10 py-2 rounded-full z-10 cursor-pointer'>Start</button>
      </div>
      <div className='flex justify-center items-center h-full mt-20 max-sm:mt-0 max-md:mt-0 max-lg:mt-0 max-xl:mt-10' ref={containerRef}>
        <SVGComponent className='mt-100 max-sm:mt-0 max-md:mt-0 max-lg:mt-0 max-xl:mt-10 max-md:scale-150' pathRef={pathRef} shipRef={shipRef} />
      </div>
      <div className="
      grid 
      grid-cols-2          /* mobile default: 1 column */
      sm:grid-cols-2       /* small screens: 1 column */
      md:grid-cols-2       /* medium screens: 2 columns */
      w-full
      max-sm:gap-13
      max-md:gap-15
      mt-20
      max-sm:mt-11
      max-md:mt-11
      max-lg:mt-20
      max-xl:mt-10
      max-sm:w-[100%]
      max-md:w-[100%]
      max-lg:w-[100%]
      max-xl:w-[100%]
      h-[50%]
      max-sm:h-[400px]
      max-md:h-[400px]
      max-lg:h-[400px]
      max-xl:h-[400px]
      mx-auto
      max-sm:mx-0
      max-md:mx-0
      max-lg:mx-0
      max-xl:mx-0
      absolute
      bottom-0
      top-50
      max-sm:top-40
      max-md:top-50
      max-lg:top-50
      max-xl:top-50
      left-0
      right-0
">
  {experiences.map((exp, idx) =>
    idx % 2 === 0 ? (
      // Even rows: right side
      <React.Fragment key={exp.title}>
        <div className="block"></div>
        <div className="
            flex flex-col justify-center items-center
            h-auto
            min-h-[200px]
            max-sm:min-h-[80px]
            max-md:min-h-[80px]
            max-lg:min-h-[400px]
            max-xl:min-h-[400px]
            p-4
            w-full
            max-w-xs
            mx-auto
          ">
          <p className="text-center text-sm max-sm:text-[8px] max-md:text-[10px] max-lg:text-[12px] max-xl:text-[12px] w-full max-w-[200px] max:sm:w-[120px] max:md:w-[200px] max:lg:w-[250px] max:xl:w-[250px]">{exp.title}</p>
          <img src={exp.image} alt="" className="w-32 h-32 object-cover max-sm:w-20 max-sm:h-20 max-md:w-20 max-md:h-20 max-lg:w-32 max-lg:h-32 max-xl:w-32 max-xl:h-32" />
        </div>
      </React.Fragment>
    ) : (
      // Odd rows: left side
      <React.Fragment key={exp.title}>
        <div className="
            flex flex-col justify-center items-center
            h-auto
            min-h-[200px]
            max-sm:min-h-[80px]
            max-md:min-h-[80px]
            max-lg:min-h-[400px]
            max-xl:min-h-[400px]
            p-4
            w-full
            max-w-xs
            mx-auto
          ">
          <p className="text-center text-sm max-sm:text-[8px] max-md:text-[10px] max-lg:text-[12px] max-xl:text-[12px] z-100 w-full max-w-[200px] max:sm:w-[110px] max:md:w-[110px] max:lg:w-[250px] max:xl:w-[250px]">{exp.title}</p>
          <img src={exp.image} alt="" className="w-32 h-32 object-cover max-sm:w-16 max-sm:h-16 max-md:w-20 max-md:h-20 max-lg:w-32 max-lg:h-32 max-xl:w-32 max-xl:h-32" />
        </div>
        <div className="block"></div>
      </React.Fragment>
    )
  )}
      </div>

    </div>
  );
};

export default ExperienceSection;
