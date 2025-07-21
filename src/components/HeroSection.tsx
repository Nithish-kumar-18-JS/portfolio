'use client';

import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col xl:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-12 gap-10 xl:gap-16 2xl:gap-20">
      
      {/* Image Section */}
      <div className="w-full xl:w-1/2 flex justify-center items-center relative">
        <img
          src="hero-transparent.png"
          alt="hero"
          className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto object-contain rounded-lg shadow-2xl"
        />
        {/* vertical divider (shows from xl and up) */}
        <div className="hidden xl:block w-[2px] h-2/3 bg-white/50 absolute left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Text Section */}
      <div className="w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-start text-center xl:text-left z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 sm:mb-6 lg:mb-8">
          Hi, I'm <strong className="text-amber-500">Nithish Kumar</strong>{' '}
          <br className="block xl:hidden" />
          <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400">
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

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed px-4 sm:px-6 xl:px-0">
          <span className="font-semibold">Full Stack Developer</span> specialized in the MERN stack,
          building clean and modern web applications. 4+ years of experience
          crafting scalable, high-performance solutions with{' '}
          <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Express</strong>.
        </p>
      </div>
    </div>
  );
}
