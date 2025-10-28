import React from 'react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90 shadow-lg px-4 py-3 md:py-4">
      <nav className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="text-xl font-bold text-indigo-400">
          Rohaib Ali
        </div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">About</button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Experience</button>
          <button onClick={() => scrollToSection('work')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Projects</button>
          <button onClick={() => scrollToSection('certificates')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Certificates</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Contact</button>
          <button onClick={() => scrollToSection('ai-chat')} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">AI Chat</button>
        </div>
        {/* Mobile menu button (can be implemented with state if needed) */}
        <div className="md:hidden">
          {/* Example: Hamburger icon */}
          <button className="text-gray-300 hover:text-indigo-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;