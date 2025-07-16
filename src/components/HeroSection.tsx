'use client'

import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <div
      className="w-full min-h-[500px] flex flex-col lg:flex-row items-center justify-center py-8 md:px-8 md:py-12 lg:px-20 lg:py-20 gap-8 md:gap-12 lg:gap-20 "
    >
        {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative">
        <img
          src="hero-transparent.png"
          className="w-[30%] h-[30%] object-cover rounded-lg shadow-2xl"
          alt="hero"
        />
        {/* vertical line only on large screens */}
        <div className="hidden lg:block w-[2px] h-[60%] bg-white/50 absolute top-[50%] left-[100%] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:px-20 z-1">
        <h1
          className="text-xl sm:text-2xl md:text-[20px] lg:text-4xl font-normal mb-4 md:mb-6 lg:mb-8"
        >
          Hi, I'm <strong className="lg:text-4xl sm:text-[20px] md:text-[20px]">Nithish Kumar</strong>{' '}
          <span className="font-bold text-2xl sm:text-xl md:text-xl lg:text-4xl text-amber-400">
            <Typewriter
              words={["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed px-2 sm:px-4 lg:px-0">
          “<strong className="text-lg md:text-xl">Full Stack Developer</strong>” specialized in the MERN
          stack, building clean and modern web applications. 4+ years of
          experience crafting scalable, high-performance solutions with{' '}
          <strong>React</strong>, <strong>Node.js</strong>, and{' '}
          <strong>MongoDB</strong>, <strong>Express</strong>.
        </p>
      </div> 
    </div>
  );
}