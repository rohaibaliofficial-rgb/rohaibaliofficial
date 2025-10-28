import React from 'react';
import { WORK_EXPERIENCE } from '../constants';
import { WorkExperienceEntry } from '../types';

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">Work Experience</h2>
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((entry: WorkExperienceEntry, index: number) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-indigo-300 mb-2">{entry.company}</h3>
              <p className="text-indigo-200 text-lg mb-2">{entry.title} <span className="text-gray-400 text-base ml-2">({entry.duration})</span></p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                {entry.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;