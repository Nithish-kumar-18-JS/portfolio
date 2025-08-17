'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Note: ScrollTrigger should be registered in your app's entry file

// Data for the stats section
const statsData = [
  {
    label: "Years of Experience",
    value: 3,
  },
  {
    label: "No of Projects Worked",
    value: 10,
  },
  {
    label: "Technologies Mastered",
    value: 14,
  },
];

const AnimatedStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((ref, index) => {
        const stat = statsData[index];
        // Create a proxy object to animate a numeric value
        const counter = { value: 0 };
        
        gsap.to(counter, {
          value: stat.value,
          duration: 2,
          ease: 'power1.out',
          // Trigger the animation when the container scrolls into view
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%', // Starts when the top of the container is 85% down from the top of the viewport
            toggleActions: 'play none none none',
          },
          // On each update of the animation, update the text content of the element
          onUpdate: () => {
            if (ref) {
              ref.textContent = Math.ceil(counter.value).toString();
            }
          },
        });
      });
    }, containerRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <div className=" py-16 sm:py-24">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3">
          {statsData.map((stat, index) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">{stat.label}</dt>
              <dd className="order-first text-5xl font-semibold tracking-tight dark : text-white text-white sm:text-6xl">
                <span ref={(el) => (numberRefs.current[index] = el)}>0</span>+
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default AnimatedStats;