import React, { useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import AIPrompt from './components/AIPrompt';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import WorkExperience from './components/WorkExperience';
import Certificates from './components/Certificates'; // Import the new Certificates component

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null); // New ref for certificates
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aiChatRef = useRef<HTMLDivElement>(null);

  const refs = {
    hero: heroRef,
    about: aboutRef,
    experience: experienceRef,
    work: workRef,
    certificates: certificatesRef, // Add certificates ref
    testimonials: testimonialsRef,
    contact: contactRef,
    'ai-chat': aiChatRef,
  };

  const scrollToSection = useCallback((id: string) => {
    const ref = refs[id as keyof typeof refs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [refs]);

  return (
    <div className="font-sans antialiased">
      <Header scrollToSection={scrollToSection} />

      <main>
        <div ref={heroRef}><Hero scrollToSection={scrollToSection} /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={experienceRef}><WorkExperience /></div>
        <div ref={workRef}><Work /></div>
        <div ref={certificatesRef}><Certificates /></div> {/* Render Certificates component */}
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={contactRef}><Contact /></div>
        <div ref={aiChatRef}><AIPrompt /></div>
      </main>

      <Footer />
    </div>
  );
}

export default App;