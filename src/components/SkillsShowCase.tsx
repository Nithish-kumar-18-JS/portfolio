'use client'

import React, { useRef, useEffect, FC } from 'react';
import { gsap } from 'gsap';
// Note: ScrollTrigger should be registered in your app's entry file
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// --- SVG Planet Components (Unchanged) ---
const PlanetProps = { className: "w-full h-full" };

const FrontendPlanet: FC<typeof PlanetProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg"><circle fill="#4A90E2" cx="100" cy="100" r="100" /><path fill="#50E3C2" d="M50,150 Q80,120 120,150 T180,150 L180,180 L50,180 Z" /><path fill="#7ED321" d="M40,110 Q70,90 100,110 T160,100 L160,130 L40,130 Z" /><circle fill="#FFFFFF" cx="70" cy="70" r="10" opacity="0.7"/><circle fill="#FFFFFF" cx="140" cy="60" r="15" opacity="0.6"/></svg>
);
const BackendPlanet: FC<typeof PlanetProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg"><circle fill="#D0021B" cx="100" cy="100" r="90" /><path fill="none" stroke="#F5A623" strokeWidth="12" d="M20,100 C20,60 180,60 180,100 C180,140 20,140 20,100 Z" transform="rotate(-20 100 100)" /><path fill="none" stroke="#F8E71C" strokeWidth="8" d="M10,100 C10,50 190,50 190,100 C190,150 10,150 10,100 Z" transform="rotate(-20 100 100) scale(1.1)" /></svg>
);
const TestingPlanet: FC<typeof PlanetProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg"><circle fill="#4A4A4A" cx="100" cy="100" r="100" /><circle fill="#2f2f2f" cx="55" cy="60" r="15" /><circle fill="#3a3a3a" cx="140" cy="75" r="25" /><circle fill="#3a3a3a" cx="60" cy="145" r="20" /><circle fill="#2f2f2f" cx="130" cy="150" r="10" /></svg>
);
const DevOpsPlanet: FC<typeof PlanetProps> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg"><circle fill="#56CCF2" cx="100" cy="100" r="100" /><path fill="#FFFFFF" d="M-20 80 Q 50 40 100 80 T 220 80 V 200 H -20 Z" opacity="0.5"/><path fill="#FFFFFF" d="M-20 120 Q 50 90 100 120 T 220 120 V 200 H -20 Z" opacity="0.4"/></svg>
);

// --- Data Structure (Unchanged) ---
interface SkillCategory {
  title: string;
  planetComponent: React.FC<typeof PlanetProps>;
  skills: string[];
}
const skillsData: SkillCategory[] = [
  { title: 'Front-end', planetComponent: FrontendPlanet, skills: ['HTML', 'CSS / Tailwind CSS', 'JavaScript / TypeScript', 'React.js / Next.js'] },
  { title: 'Backend', planetComponent: BackendPlanet, skills: ['Node.js', 'Next.js / Express.js', 'MongoDb / MySQL / Postgres', 'SSE / WebSockets'] },
  { title: 'Testing', planetComponent: TestingPlanet, skills: ['Jest', 'Jest Cucumber (BBD)', 'Test Driven Development', 'Automation Testing'] },
  { title: 'DevOps & Cloud', planetComponent: DevOpsPlanet, skills: ['AWS (EC2, EKS, S3)', 'Docker', 'CI/CD Pipelines', 'Infrastructure as Code'] },
];

// --- Main Component ---
const SkillsShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skill-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id='skills' className="w-full max-sm:mt-30 max-md:mt-30 mt-150 py-24 px-4 font-sans dark : text-white text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">Skills & Expertise</h1>
          <p className="text-lg text-gray-400 mt-4">A journey through my technical cosmos.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {skillsData.map((category, index) => {
            const Planet = category.planetComponent;
            return (
              <div
                key={category.title}
                className={`skill-card border border-gray-700 rounded-2xl p-6 md:p-8 opacity-0`}
              >
                {/* --- Card Header --- */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-cyan-400 pt-2">{category.title}</h3>
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                    <Planet className="w-full h-full" />
                  </div>
                </div>

                {/* --- Card Body --- */}
                <ul className="space-y-3 text-gray-300">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                       <span className="text-cyan-400 mr-3 text-xl">&#8226;</span>
                       <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;