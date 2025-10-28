import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-indigo-300 mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-base">{project.description}</p>
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full text-sm transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-2 px-4 rounded-full text-sm transition-colors duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
