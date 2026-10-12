export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'fullstack';
  categoryLabel: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl?: string;
  technologies: string[];
  featured: boolean;
  visible?: boolean;
}

export const defaultProjects: Project[] = [
  {
    id: 'fan-nation',
    title: 'Fan Nation - Interactive Community Platform',
    category: 'web',
    categoryLabel: 'Web Application',
    description:
      'A comprehensive fan engagement web platform delivering real-time media streams, dynamic community feeds, and high-performance interactive interfaces.',
    image: '/image/project1.png',
    demoUrl: 'https://fan0fannation.netlify.app/',
    githubUrl: 'https://github.com/RealRiga',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Netlify', 'REST APIs'],
    featured: true,
  },
  {
    id: 'crystal-store',
    title: 'Crystal Store - Modern E-Commerce',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description:
      'An elegant digital retail store with responsive product galleries, interactive cart functionality, checkout workflow, and clean UI components.',
    image: '/image/project3.png',
    demoUrl: 'https://crystal-store.vercel.app/',
    githubUrl: 'https://github.com/RealRiga',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    featured: true,
  },
  {
    id: 'personal-portfolio',
    title: 'Adeola Yisa - Developer Portfolio',
    category: 'fullstack',
    categoryLabel: 'Portfolio & Brand',
    description:
      'Modern, high-performance portfolio website engineered with Next.js 14, Tailwind CSS, dual light & dark mode aesthetics, and micro-animations for showcasing engineering craft.',
    image: '/image/project2.png',
    demoUrl: 'https://adeolaportfolio.vercel.app/',
    githubUrl: 'https://github.com/RealRiga/New_Portfolio',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'AOS', 'SEO Optimized'],
    featured: true,
  },
  {
    id: 'dashboard-system',
    title: 'Enterprise Analytics & Management Dashboard',
    category: 'fullstack',
    categoryLabel: 'SaaS Platform',
    description:
      'Comprehensive data dashboard providing metric visualizations, multi-user role management, responsive tables, and secure backend integration.',
    image: '/image/p1.jpg',
    demoUrl: 'https://fan0fannation.netlify.app/',
    githubUrl: 'https://github.com/RealRiga',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    featured: false,
  },
  {
    id: 'cross-platform-app',
    title: 'Mobile Task & Workflow Organizer',
    category: 'mobile',
    categoryLabel: 'Mobile & Web',
    description:
      'Cross-platform task tracking application featuring local persistence, categorized priority boards, and synchronization across devices.',
    image: '/image/p2.jpg',
    demoUrl: 'https://crystal-store.vercel.app/',
    githubUrl: 'https://github.com/RealRiga',
    technologies: ['Flutter', 'Dart', 'Firebase', 'State Management'],
    featured: false,
  },
  {
    id: 'api-service-hub',
    title: 'Distributed API Gateway & Service Hub',
    category: 'fullstack',
    categoryLabel: 'Backend Architecture',
    description:
      'High-performance backend API service built with C# and Java, handling token authentication, rate limiting, and structured JSON payloads.',
    image: '/image/p3.jpg',
    demoUrl: 'https://adeolaportfolio.vercel.app/',
    githubUrl: 'https://github.com/RealRiga',
    technologies: ['C#', '.NET', 'Java', 'REST APIs', 'SQL Database'],
    featured: false,
  },
];
