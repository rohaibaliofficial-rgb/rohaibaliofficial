import React from 'react';
import { SKILLS, ABOUT_ME_TEXT } from '../constants';
import { Skill } from '../types';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>{ABOUT_ME_TEXT}</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-indigo-300 mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {SKILLS.map((skill: Skill) => (
                <div key={skill.name}>
                  <h4 className="text-xl font-semibold text-indigo-200 mb-2 flex items-center">
                    {skill.icon && <span className="mr-2">{skill.icon}</span>}
                    {skill.name}
                  </h4>
                  {skill.subSkills && (
                    <div className="flex flex-wrap gap-3 ml-4">
                      {skill.subSkills.map((subSkill) => (
                        <span
                          key={subSkill.name}
                          className="bg-indigo-700 text-indigo-100 px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-md transform hover:scale-105 transition-transform duration-200"
                        >
                          {subSkill.name}
                        </span>
                      ))}
                    </div>
                  )}
                   {!skill.subSkills && skill.icon && ( // For standalone skills that still have an icon
                    <span
                      className="bg-indigo-700 text-indigo-100 px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-md transform hover:scale-105 transition-transform duration-200"
                    >
                      {skill.icon} <span className="ml-2">{skill.name}</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;