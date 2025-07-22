import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsShowCase from "@/components/SkillsShowCase";
import AnimatedStats from "@/components/AnimatedStats";
import CallToAction from "@/components/CallToAction";
import AboutSection from "@/components/AboutSection";  
export default function Home() {
  return (
    <div>
      {/* HeroSection */}
      <HeroSection />
       {/* Experience */}
       <ExperienceSection />
       {/* Skills */}
       <SkillsShowCase />
       {/* Stats */}
       <AnimatedStats />
       {/* About */}
      <AboutSection />
       {/* Call To Action */}
       <CallToAction />
    </div>
  );
}
