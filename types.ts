export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SubSkill {
  name: string;
}

export interface Skill {
  name: string;
  icon?: string; // Icon is optional for category headers
  subSkills?: SubSkill[]; // Sub-skills array
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}

export interface WorkExperienceEntry {
  company: string;
  duration: string;
  title: string;
  responsibilities: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  url?: string;
}