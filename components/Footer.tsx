import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-90 py-8 text-center text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Rohaib Ali. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS, powered by Gemini API.</p>
      </div>
    </footer>
  );
};

export default Footer;