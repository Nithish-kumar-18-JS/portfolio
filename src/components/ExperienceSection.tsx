'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ExperienceSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const animateTimeline = (
      lineClass: string,
      startCircle: string,
      endCircle: string,
      textClass: string
    ) => {
      tl.to(startCircle, { opacity: 1, duration: 0.4, ease: 'power1.out' })
        .to(lineClass, { scaleY: -1, opacity: 1, duration: 1 })
        .to(endCircle, { opacity: 1, duration: 0.4, ease: 'power1.out' })
        .to(textClass, { opacity: 1, duration: 0.4, ease: 'power1.out' });
    };

    animateTimeline('.timeline_1_line', '.timeline_1_circle_start', '.timeline_1_circle_end', '.exp_text_1');
    animateTimeline('.timeline_2_line', '.timeline_2_circle_start', '.timeline_2_circle_end', '.exp_text_2');
    animateTimeline('.timeline_3_line', '.timeline_3_circle_start', '.timeline_3_circle_end', '.exp_text_3');
    animateTimeline('.timeline_4_line', '.timeline_4_circle_start', '.timeline_4_circle_end', '.exp_text_4');
    animateTimeline('.timeline_5_line', '.timeline_5_circle_start', '.timeline_5_circle_end', '.exp_text_5');
  }, []);

  return (
    <div ref={container} className="flex items-center justify-center flex-col relative">
      <h1 className="text-white text-[40px]">Experience</h1>

      <div className="w-[80%] h-[1200px] relative flex flex-col justify-center mt-[20%]">

        {/* Timeline Items */}
        {[
          { id: 1, left: '70px', top: '-70px', height: '300px', color: '#0065FB', rotate: '220deg' },
          { id: 2, left: '505px', top: '-94px', height: '400px', color: '#0065FB', rotate: '-220deg' },
          { id: 3, left: '486px', top: '-192px', height: '500px', color: '#00FF7F', rotate: '220deg' },
          { id: 4, left: '792px', top: '-375px', height: '300px', color: '#00FF7F', rotate: '321deg' },
          { id: 5, left: '965px', top: '-436px', height: '600px', color: '#FF0000', rotate: '213deg' },
        ].map((item) => (
          <div
            key={item.id}
            className={`timeline_${item.id}_line absolute w-[10px]`}
            style={{
              height: item.height,
              backgroundColor: item.color,
              left: item.left,
              top: item.top,
              transform: `rotate(${item.rotate}) scaleY(0)`,
              transformOrigin: 'bottom',
              opacity: 0,
              boxShadow: `0 0 30px ${item.color}`,
            }}
          >
            {/* Start Circle */}
            <div
              className={`timeline_${item.id}_circle_start w-[40px] h-[40px] rounded-full absolute`}
              style={{
                backgroundColor: item.color,
                top: `calc(${item.height} - 35px)`,
                left: '-13px',
                opacity: 0,
                boxShadow: `0 0 30px ${item.color}`,
              }}
            />
            {/* End Circle */}
            <div
              className={`timeline_${item.id}_circle_end w-[40px] h-[40px] rounded-full absolute`}
              style={{
                backgroundColor: item.color,
                top: '-8px',
                right: '-13px',
                opacity: 0,
                boxShadow: `0 0 30px ${item.color}`,
              }}
            />
          </div>
        ))}

        {/* Texts */}
        {[
          { id: 1, left: '1%', top: '19%', text: '2020 - 2021 - Started Learning MERN Stack Completed Udemy Course' },
          { id: 2, left: '13%', top: '-14%', text: '2020 - 2021 - Started Learning MERN Stack Completed Udemy Course' },
          { id: 3, left: '30%', top: '26%', text: '2020 - 2021 - Started Learning MERN Stack Completed Udemy Course' },
          { id: 4, left: '52%', top: '-20%', text: '2020 - 2021 - Started Learning MERN Stack Completed Udemy Course' },
          { id: 5, left: '64%', top: '14%', text: '2020 - 2021 - Started Learning MERN Stack Completed Udemy Course' },
          
        ].map((item, i) => (
          <p
            key={i}
            className={`exp_text_${item.id} text-white text-[18px] w-[200px] mt-[30px] opacity-0 absolute`}
            style={{
              left: item.left,
              top: item.top,
            }}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
