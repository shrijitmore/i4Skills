import { useRef } from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import CourseShowcase from "./landing/CourseShowcase";
import VirtualLabDemo from "./landing/VirtualLabDemo";
import AIAssistantSection from "./landing/AIAssistantSection";
import TestimonialsSection from "./landing/TestimonialsSection";
import AboutSection from "./landing/AboutSection";
import ContactSection from "./landing/ContactSection";

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const assistantRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleSectionClick = (section: string) => {
    // This function is handled by the Navbar component
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar onSectionClick={handleSectionClick} />

      <div id="hero" ref={heroRef}>
        <HeroSection />
      </div>

      <div id="courses" ref={coursesRef}>
        <CourseShowcase />
      </div>

      <div id="features" ref={featuresRef}>
        <VirtualLabDemo />
      </div>

      <div id="assistant" ref={assistantRef}>
        <AIAssistantSection />
      </div>

      <div id="testimonials" ref={testimonialsRef}>
        <TestimonialsSection />
      </div>

      <div id="about" ref={aboutRef}>
        <AboutSection />
      </div>

      <div id="contact" ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
}

export default Home;
