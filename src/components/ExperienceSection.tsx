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
      tl.to(startCircle, { opacity: 1, duration: 0.2, ease: 'power1.out' })
        .to(lineClass, { scaleY: -1, opacity: 1, duration: 0.5 })
        .to(endCircle, { opacity: 1, duration: 0.2, ease: 'power1.out' })
        .to(textClass, { opacity: 1, duration: 0.2, ease: 'power1.out' });
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

      <div className="w-[80%] h-[1200px] relative flex flex-col justify-center">

        {/* Timeline Items */}
        {[
          { id: 1, left: '0.5%', height: '300px', color: '#0065FB', rotate: '220deg', top: '37.5%' },
          { id: 2, left: '11.7%', height: '400px', color: '#0065FB', rotate: '321deg', top: '9.5%' },
          { id: 3, left: '27%', height: '500px', color: '#00FF7F', rotate: '220deg', top: '27.5%' },
          { id: 4, left: '46.5%', height: '300px', color: '#00FF7F', rotate: '321deg', top: '12.1%' },
          { id: 5, left: '57.6%', height: '600px', color: '#FF0000', rotate: '220deg', top: '7%' },
        ].map((item) => (
          <div
            key={item.id}
            className={`timeline_${item.id}_line absolute w-[20px]`}
            style={{
              height: item.height,
              backgroundColor: item.color,
              left: item.left,
              top: item.top,
              transform: `rotate(${item.rotate}) scaleY(0)` as React.CSSProperties['transform'],
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
                left: '-10px',
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
                right: '-10px',
                opacity: 0,
                boxShadow: `0 0 30px ${item.color}`,
              }}
            />
          </div>
        ))}
        {/* Texts */}
        {[{left: '-2.5%', top: '64.5%',id: 1,text: '2020 - 2021 - Started Learning MERN Stack Completed Udemy Course',}
        ,
        {left: '7.7%', top: '29.5%',id: 2,text: '2021 - 2022 - Intern at App innovation technologies pvt Ltd',}
        ,
        {left: '23%', top: '72.5%',id: 3,text: '2022 - 2024 - MERN Stack Developer - App innovation technologies pvt ltd',}
        ,
        {left: '42.5%', top: '23.1%',id: 4,text: '2024(May) - 2024 (Nov) - Nodejs Developer - Top Class Entertainment Pvt ltd',}
        ,
        {left: '75.6%', top: '5%',id: 5,text: '2024(Nov) - Present - Full Stack Engineer - Asign Pvt ltd',}
        ].map((i) => (
          <p
            key={i.id}
            className={`exp_text_${i.id} text-white text-[18px] mt-[30px] opacity-0 absolute`}
            style={{
              left: i.left,
              top: i.top,
              width: '220px',
            }}
          >
            {i.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
