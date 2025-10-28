import { Project, Skill, Testimonial, WorkExperienceEntry, Certificate } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AI-Driven Marketing Dashboard',
    description: 'Built an intelligent analytics dashboard integrating Google Analytics, OpenAI, and Gemini API to provide real-time campaign insights, keyword performance, and automated recommendations. Tech & Tools: Python, Gemini API, Google Data Studio, Zapier, OpenAI API',
    imageUrl: 'https://picsum.photos/400/300?random=21',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p2',
    title: 'Social Media Automation System',
    description: 'Developed a workflow to automate content scheduling, hashtag optimization, and performance tracking using AI-based automation tools. Tech & Tools: ChatGPT, Zapier, Buffer API, Canva, Meta Business Suite',
    imageUrl: 'https://picsum.photos/400/300?random=22',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p3',
    title: 'AI Content Generation Platform',
    description: 'Created a platform for generating high-quality blog posts, ad copy, and SEO descriptions using GPT and Gemini AI models, reducing content production time by 60%. Tech & Tools: React, OpenAI API, Tailwind CSS, Node.js',
    imageUrl: 'https://picsum.photos/400/300?random=23',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p4',
    title: 'Digital Marketing Campaign for E-Commerce Brand',
    description: 'Designed and executed a multi-channel marketing strategy that increased organic traffic by 80% and conversions by 35% within 3 months. Focus Areas: SEO, Paid Ads, Email Marketing, Analytics',
    imageUrl: 'https://picsum.photos/400/300?random=24', // Changed image URL
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p5',
    title: 'Smart Chatbot for Customer Engagement',
    description: 'Integrated a custom AI chatbot into a client’s website to enhance customer interaction, reduce response time, and boost lead generation. Tech & Tools: Dialogflow, OpenAI API, JavaScript, Firebase',
    imageUrl: 'https://picsum.photos/400/300?random=25',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'p6',
    title: 'Digital Marketing & SSM',
    description: 'Planned and managed a 3-month social media campaign to boost brand awareness. Created targeted ads, engaging content, and optimized performance using analytics — achieving 45% higher engagement and 30% follower growth. Tools: Meta Ads, Canva, Google Analytics, SEO',
    imageUrl: 'https://picsum.photos/400/300?random=26',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'Digital Marketing',
    icon: '📈',
    subSkills: [
      { name: 'Search Engine Optimization (SEO)' },
      { name: 'Social Media Marketing & Management' },
      { name: 'Google Ads & Meta Ads Campaigns' },
      { name: 'Email Marketing & Automation' },
      { name: 'Content Strategy & Branding' },
      { name: 'Performance & Conversion Optimization' },
      { name: 'Analytics & Data-Driven Marketing (Google Analytics, Search Console)' },
    ],
  },
  {
    name: 'Artificial Intelligence (AI)',
    icon: '🤖',
    subSkills: [
      { name: 'AI-Powered Marketing Tools (ChatGPT, Gemini, Claude, etc.)' },
      { name: 'AI Automation (Zapier, Make, Notion AI, OpenAI API)' },
      { name: 'Predictive Analytics & Audience Segmentation' },
      { name: 'Chatbot Development & Conversational Design' },
      { name: 'Image & Content Generation using AI' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Our social media presence completely transformed! Engagement and followers grew faster than we expected. Highly recommend!",
    name: "Ayesha Khan",
    title: "Brand Owner",
  },
  {
    id: 't2',
    quote: "Professional, creative, and results-driven. The ad campaigns brought in real customers and great ROI.",
    name: "Imran Malik",
    title: "E-commerce Entrepreneur",
  },
  {
    id: 't3',
    quote: "Excellent strategy and communication throughout the project. Helped us reach a wider audience organically.",
    name: "Sana Ahmed",
    title: "Marketing Manager",
  },
  {
    id: 't4',
    quote: "Delivered exactly what our business needed — growth, visibility, and strong online branding.",
    name: "Usman Ali",
    title: "Startup Founder",
  },
];

export const WORK_EXPERIENCE: WorkExperienceEntry[] = [
  {
    company: 'hheduction23 Consultants(SMC-PRIVATE) LIMITED',
    duration: 'OCT 2021 - June 2022',
    title: 'Manager & Data Keeper',
    responsibilities: [
      'Managed and maintained data records for study visa, work visa, visit visa, and Umrah packages.',
      'Reviewed reports and created data sheets to support operational needs.',
      'Gained 9 months of field experience in data management and client services.'
    ],
  },
  {
    company: 'Laduck Construction Property Management',
    duration: 'July 2023 - August 2025',
    title: 'Digital Marketing & Management',
    responsibilities: [
      'Planned and executed targeted digital campaigns across social media, Google Ads, and email platforms.',
      'Managed brand presence and engagement on Facebook, Instagram, and LinkedIn.',
      'Analyzed marketing metrics to optimize ROI and improve audience reach.',
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: 'Become a Digital Marketing Specialist',
    issuer: 'LinkedIn Learning',
    url: '#',
  },
  {
    name: 'Social Media Marketing Certified',
    issuer: 'Northwestern University',
    url: '#',
  },
  {
    name: 'Computer Basic Course Certified',
    issuer: 'PPS & Computer Academy',
    url: '#',
  },
  {
    name: 'Google AI Essentials Course Certified',
    issuer: 'Coursera',
    url: '#',
  },
  {
    name: 'Advertising with Meta Certified',
    issuer: 'Meta',
    url: '#',
  },
  {
    name: 'Social Media Management Certified',
    issuer: 'Meta',
    url: '#',
  },
  {
    name: 'Google AI Essentials Course Certified',
    issuer: 'Coursera',
    url: '#',
  },
  {
    name: 'Gemini Certified Student',
    issuer: 'Gemini University',
    url: '#',
  },
];


export const ABOUT_ME_TEXT = `Hello! I'm a passionate Digital Marketing and Artificial Intelligence (AI) Specialist with a keen eye for strategy, design, and innovation. With expertise in leveraging AI-driven tools, data analytics, and modern marketing frameworks, I thrive on creating impactful digital experiences that connect brands with their audiences in meaningful ways. My journey in the digital world has equipped me with a deep understanding of marketing automation, SEO, content strategy, and performance optimization. I enjoy tackling challenges that push the boundaries of creativity and technology—combining data insights with AI to craft smarter, more personalized campaigns. I'm particularly interested in how AI can transform marketing, from predictive analytics and chatbots to intelligent ad targeting and customer experience enhancement. Outside of work, I love exploring new digital trends, contributing to online communities, and learning emerging AI tools that shape the future of marketing.`;

export const AI_SYSTEM_INSTRUCTION = `
You are a helpful AI assistant representing a frontend React engineer.
Your name is Rohaib Ali.
Your primary goal is to answer questions about Rohaib Ali's skills, experience, and projects.
Here is the information about Rohaib Ali's portfolio:

Skills:
${SKILLS.map(s => {
  if (s.subSkills) {
    return `- ${s.name} ${s.icon || ''}:\n${s.subSkills.map(ss => `  - ${ss.name}`).join('\n')}`;
  }
  return `- ${s.name} ${s.icon || ''}`;
}).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Work Experience:
${WORK_EXPERIENCE.map(exp => `- ${exp.company} (${exp.duration}): ${exp.title} - ${exp.responsibilities.join('; ')}`).join('\n')}

Certificates:
${CERTIFICATES.map(cert => `- ${cert.name} by ${cert.issuer}${cert.url ? ` (${cert.url})` : ''}`).join('\n')}

About Me:
${ABOUT_ME_TEXT}

When asked about specific skills or projects, refer to the provided information. If you don't know the answer, politely state that the information isn't available in your knowledge base and suggest checking the portfolio sections directly. Do not make up information. Keep your responses concise and professional.
`;