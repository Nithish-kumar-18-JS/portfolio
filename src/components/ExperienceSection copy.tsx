'use client'

import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ExperienceSection = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const targets = container.current;
    // Zoom in out effect for ex_1_text

    gsap.registerEffect({
      name: "fadeIn",
      effect: (targets: Element | Element[], config: { duration: number }) => {
        return gsap.to(targets, { duration: config.duration, opacity: 1 });
      },
      defaults: { duration: 2 },
      extendTimeline: true, 
    });

  // timeline_1_up it should height increase 0 to 300px from down to up
  const tl = gsap.timeline();
  // 1. Fade in start circle (bottom)
  tl.to('.timeline_1_circle_start', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // 2. Grow the line upward
  .to('.timeline_1_line', {
    scaleY: -1,
    opacity: 1,
    duration: 1,
  })

  // 3. Fade in end circle (top)
  .to('.timeline_1_circle_end', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })
  // Fade in exp_text_1 FIRST
  tl.to('.exp_text_1', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })
  // Then fade in exp_text_2 SECOND
  .to('.exp_text_2', {
    opacity: 1,
    duration: 0.3,
    ease: 'power1.out',
  });


  // timeline 2
  tl.to('.timeline_2_circle_start', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })
  // 2. Grow the line upward
  .to('.timeline_2_line', {
    scaleY: -1,
    opacity: 1,
    duration: 1,
  })
  // 3. Fade in end circle (top)
  .to('.timeline_2_circle_end', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // Fade in exp_text_2 FIRST
  tl.to('.exp_text_2', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // timeline_3_up it should height increase 0 to 300px from down to up
  tl.to('.timeline_3_circle_start', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })
  // 2. Grow the line upward
  .to('.timeline_3_line', {
    scaleY: -1,
    opacity: 1,
    duration: 1,
  })
  // 3. Fade in end circle (top)
  .to('.timeline_3_circle_end', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // Fade in exp_text_3 FIRST
  tl.to('.exp_text_3', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // timeline_4_up it should height increase 0 to 300px from down to up
  tl.to('.timeline_4_circle_start', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })
  // 2. Grow the line upward
  .to('.timeline_4_line', {
    scaleY: -1,
    opacity: 1,
    duration: 1,
  })
  // 3. Fade in end circle (top)
  .to('.timeline_4_circle_end', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // Fade in exp_text_4 FIRST
  tl.to('.exp_text_4', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // timeline_5_up it should height increase 0 to 300px from down to up
  tl.to('.timeline_5_circle_start', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })
  // 2. Grow the line upward
  .to('.timeline_5_line', {
    scaleY: -1,
    opacity: 1,
    duration: 1,
  })
  // 3. Fade in end circle (top)
  .to('.timeline_5_circle_end', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  // Fade in exp_text_5 FIRST
  tl.to('.exp_text_5', {
    opacity: 1,
    duration: 0.4,
    ease: 'power1.out',
  })

  }, []); // empty dependency array since we want this to run once on mount


  return (
   <div className='flex items-center justify-center flex-col relative'>
     <h1 className='text-[#ffffff] text-[40px]'>Experience</h1>
     {/* Experience Timeline using gsap*/}
     <div className='w-[80%] h-[600px] mt-90 relative flex flex-col justify-center'>
        {/* starting time line 1 */}
        <div className="timeline_1_line w-[20px] h-[300px] absolute bg-[#0065FB] left-[70px] -top-[30px] rotate-[220deg] origin-bottom scale-y-0 opacity-0 shadow-[0_0_30px_#0065FB]">
        {/* Bottom Start Circle */}
        <div className="timeline_1_circle_start w-[40px] h-[40px] rounded-full bg-[#0065FB] absolute -left-[10px] top-[265px] opacity-0 shadow-[0_0_30px_#0065FB]">        
        </div>
        {/* Top End Circle */}
        <div className="timeline_1_circle_end w-[40px] h-[40px] rounded-full bg-[#0065FB] absolute -right-[10px] -top-[8px] opacity-0 shadow-[0_0_30px_#0065FB]"></div>
        </div>
        {/* timeline 2 */}
        <div className="timeline_2_line w-[20px] h-[400px] absolute bg-[#0065FB] left-63 top-10 -rotate-[220deg] origin-top scale-y-0 opacity-0 shadow-[0_0_30px_#0065FB]">
        {/* Bottom Start Circle */}
        {/* Top End Circle */}
        <div className="timeline_2_circle_end w-[40px] h-[40px] rounded-full bg-[#0065FB] absolute -right-[10px] -top-[8px] opacity-0 shadow-[0_0_30px_#0065FB]" />
        <div>
        </div>
      </div>

        {/* timeline 3 */}
        <div className="timeline_3_line w-[20px] h-[500px] absolute bg-[#00FF7F] left-125  -top-[150px] rotate-[220deg] origin-bottom scale-y-0 opacity-0 shadow-[0_0_30px_#00FF7F]">
        {/* Bottom Start Circle */}
        <div className="timeline_3_circle_start w-[40px] h-[40px] rounded-full bg-[#00FF7F] absolute -left-[10px] top-[465px] opacity-0 shadow-[0_0_30px_#00FF7F]" />
        {/* Top End Circle */}
        <div className="timeline_3_circle_end w-[40px] h-[40px] rounded-full bg-[#00FF7F] absolute -right-[10px] -top-[8px] opacity-0 shadow-[0_0_30px_#00FF7F]" />
        </div>

        {/* timeline 4 */}
        <div className="timeline_4_line w-[20px] h-[300px] absolute bg-[#00FF7F] left-201 -top-[332px] rotate-[321deg] origin-bottom scale-y-0 opacity-0 shadow-[0_0_30px_#00FF7F]">
        {/* Bottom Start Circle */}
        <div className="timeline_4_circle_start w-[40px] h-[40px] rounded-full bg-[#00FF7F] absolute -left-[10px] top-[265px] opacity-0 shadow-[0_0_30px_#00FF7F]" />
        {/* Top End Circle */}
        <div className="timeline_4_circle_end w-[40px] h-[40px] rounded-full bg-[#00FF7F] absolute -right-[10px] -top-[8px] opacity-0 shadow-[0_0_30px_#00FF7F]" />
        </div>

        {/* timeline 5 */}
        <div className="timeline_5_line w-[20px] h-[600px] absolute bg-[#FF0000] left-245 -top-[399px] rotate-[213deg] origin-bottom scale-y-0 opacity-0 shadow-[0_0_30px_#FF0000]">
        {/* Bottom Start Circle */}
        <div className="timeline_5_circle_start w-[40px] h-[40px] rounded-full bg-[#FF0000] absolute -left-[10px] top-[570px] opacity-0 shadow-[0_0_30px_#FF0000]" />
        {/* Top End Circle */}
        <div className="timeline_5_circle_end w-[40px] h-[40px] rounded-full bg-[#FF0000] absolute -right-[10px] -top-[8px] opacity-0 shadow-[0_0_30px_#FF0000]" />
        </div>
     </div>
           
   </div>
  );
}

export default ExperienceSection;