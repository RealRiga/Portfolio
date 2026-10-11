'use client';

import { useState } from 'react';
import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon: string;
  description: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillsData: SkillItem[] = [
    // Frontend
    { name: 'Next.js (App/Pages)', category: 'frontend', level: 'Expert', icon: '▲', description: 'SSR, SSG, Server Components, API routes, Turborepo monorepos' },
    { name: 'React.js', category: 'frontend', level: 'Expert', icon: '⚛️', description: 'Component architecture, custom hooks, reactive state patterns' },
    { name: 'TypeScript', category: 'frontend', level: 'Expert', icon: 'TS', description: 'Strict type safety, generics, interfaces, scalable contracts' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Expert', icon: 'JS', description: 'Modern asynchronous JS, event loops, DOM performance' },
    { name: 'Angular', category: 'frontend', level: 'Advanced', icon: '🅰️', description: 'Enterprise single-page architecture, RxJS, modular dependency injection' },
    { name: 'Vue.js', category: 'frontend', level: 'Advanced', icon: '💚', description: 'Composition API, Vuex/Pinia, lightweight reactive interfaces' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', icon: '🎨', description: 'Design systems, responsive layouts, modern dark/light themes' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 'Expert', icon: '🌐', description: 'Semantic markup, accessibility (a11y), Flexbox, CSS Grid' },

    // Backend
    { name: 'Node.js & Express', category: 'backend', level: 'Expert', icon: '🟢', description: 'RESTful microservices, asynchronous I/O, middleware pipelines' },
    { name: 'NestJS', category: 'backend', level: 'Advanced', icon: '🦁', description: 'Scalable server-side architecture, decorators, TypeScript backend' },
    { name: 'Python (Django)', category: 'backend', level: 'Advanced', icon: '🐍', description: 'Robust web backends, ORM data modeling, authentication APIs' },
    { name: 'C# / .NET', category: 'backend', level: 'Advanced', icon: 'C#', description: 'High-throughput enterprise APIs, OOP design, security' },
    { name: 'Java', category: 'backend', level: 'Advanced', icon: '☕', description: 'Object-oriented architecture, data structures, enterprise services' },
    { name: 'Prisma & ORM', category: 'backend', level: 'Advanced', icon: '◬', description: 'Type-safe database client, schema migrations, relations' },
    { name: 'MySQL & PostgreSQL', category: 'backend', level: 'Advanced', icon: '🐬', description: 'Relational database design, query optimization, indexing' },
    { name: 'MongoDB', category: 'backend', level: 'Advanced', icon: '🍃', description: 'NoSQL document schemas, aggregation pipelines, collections' },

    // Mobile
    { name: 'Flutter (Dart)', category: 'mobile', level: 'Expert', icon: '💙', description: 'Cross-platform native iOS & Android applications published to store' },
    { name: 'React Native', category: 'mobile', level: 'Advanced', icon: '📱', description: 'Cross-platform mobile UI built with React ecosystem' },
    { name: 'Google Play Store', category: 'mobile', level: 'Expert', icon: '▶️', description: 'Published and maintained high-performance applications on Google Play Store' },

    // Tools & DevOps
    { name: 'Git & GitHub', category: 'tools', level: 'Expert', icon: '🐙', description: 'Version control, branch management, CI/CD collaboration' },
    { name: 'Turborepo (Monorepos)', category: 'tools', level: 'Advanced', icon: '⚡', description: 'Multi-package workspaces, caching, admission architectures' },
    { name: 'Vercel & Netlify', category: 'tools', level: 'Expert', icon: '🚀', description: 'Production hosting, serverless functions, automated deployments' },
    { name: 'Postman & APIs', category: 'tools', level: 'Expert', icon: '📮', description: 'Contract design, integration testing, environment mocking' },
  ];

  const categories = [
    { id: 'all', label: 'All Technologies', icon: CpuChipIcon },
    { id: 'frontend', label: 'Frontend', icon: CodeBracketIcon },
    { id: 'backend', label: 'Backend & APIs', icon: CommandLineIcon },
    { id: 'mobile', label: 'Mobile Apps', icon: DevicePhoneMobileIcon },
    { id: 'tools', label: 'Tools & DevOps', icon: WrenchScrewdriverIcon },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const careerTimeline = [
    {
      period: '06/2025 - Present',
      role: 'Frontend Developer (Mobile)',
      focus: 'SmartRob Technologies',
      desc: 'Driving B2B software development and engineering production mobile applications. Built and published high-performance apps on Google Play Store with top user satisfaction, secure transaction flows, and fluid UX.',
      techs: ['Flutter', 'Dart', 'React Native', 'Android', 'Play Store Publishing', 'REST APIs'],
    },
    {
      period: '04/2025 - 08/2025',
      role: 'Frontend Engineer (Monorepo)',
      focus: 'Eduverse',
      desc: 'Architected and built a multi-purpose educational admission platform via monorepo architecture powered by Next.js, React, and Turborepo, delivering ultra-fast builds and modular shared packages.',
      techs: ['Next.js', 'React', 'Turborepo', 'TypeScript', 'Tailwind CSS'],
    },
    {
      period: '05/2023 - 01/2024',
      role: 'Fullstack Developer',
      focus: 'LetText',
      desc: 'Completed end-to-end frontend and backend development for a cross-border international communication service, implementing real-time messaging pipelines and secure user authentication.',
      techs: ['Python (Django)', 'Node.js', 'React', 'Next.js', 'MySQL', 'REST APIs'],
    },
    {
      period: '05/2022 - 05/2023',
      role: 'Frontend Developer',
      focus: 'Aptech Computer Institute',
      desc: 'Created and maintained scalable web applications, student portals, and responsive user interfaces while completing the 2-Year Advance Diploma in Software Engineering (ADSE).',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Git'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="section-badge mb-3">Expertise & Experience</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Technical Stack & <span className="accent-gradient">Capabilities</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive overview of my technical toolkit, languages, and professional development background.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-aos="fade-up">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-emerald to-brand-teal text-dark-950 shadow-md shadow-brand-emerald/20'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200/80 dark:bg-dark-900 dark:text-slate-300 dark:hover:text-white dark:hover:bg-dark-850 dark:border-white/[0.06]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-dark-950' : 'text-slate-500 dark:text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={idx * 40}
              className="p-4 rounded-2xl bg-slate-50/90 dark:bg-dark-900/80 border border-slate-200 dark:border-white/[0.06] hover:border-brand-emerald/50 dark:hover:border-brand-emerald/40 hover:bg-white dark:hover:bg-dark-850/90 shadow-sm dark:shadow-none transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-dark-950 border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform shadow-sm">
                    {skill.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      skill.level === 'Expert'
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25'
                        : skill.level === 'Advanced'
                        ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/25'
                        : 'bg-slate-200/60 dark:bg-slate-700/30 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-600/30'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base font-heading group-hover:text-brand-emerald transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500">
                <span className="capitalize">{skill.category}</span>
                <span className="text-brand-emerald font-semibold">Production-Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Career & Experience Timeline */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading">
              Professional Journey & Experience
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Continuous delivery of high-impact web and mobile engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerTimeline.map((item, idx) => (
              <div
                key={item.role}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between hover:border-brand-emerald/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-brand-emerald border border-emerald-500/20 mb-4">
                    {item.period}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-1">
                    {item.role}
                  </h4>
                  <div className="text-xs font-semibold text-brand-teal dark:text-brand-cyan mb-3">
                    {item.focus}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                  {item.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-dark-950/80 border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;