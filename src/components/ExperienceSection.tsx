'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import SVGComponent from './SvgComponent';
const ExperienceSection = () => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
  const shipRef = useRef<SVGRectElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef(null);
  const handleStart = () => {
    console.log("start")
    gsap.to(shipRef.current, {
      duration: 20,
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        curviness: 1,
      },
    })
  }

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
      
    </div>
  );
};

export default ExperienceSection;
