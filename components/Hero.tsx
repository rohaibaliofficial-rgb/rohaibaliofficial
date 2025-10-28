import React from 'react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-950 text-center px-4 py-20 md:py-0">
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Hi, I'm <span className="text-indigo-400">Rohaib Ali</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up delay-200">
          A passionate Digital Marketing & Artificial Intelligence (AI) Specialist
        </p>
        <button
          onClick={() => scrollToSection('work')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;