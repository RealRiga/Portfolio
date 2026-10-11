'use client';

import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/20/solid';

const About = () => {
  const highlights = [
    {
      title: 'Frontend Engineering',
      desc: 'Expertise in building scalable, accessible, and high-performance user interfaces with Next.js, React, and Tailwind CSS.',
      icon: CodeBracketIcon,
    },
    {
      title: 'Backend & Systems',
      desc: 'Designing resilient microservices, secure authentication flows, and RESTful APIs with Node.js, C#, and Java.',
      icon: CommandLineIcon,
    },
    {
      title: 'Mobile App Development',
      desc: 'Crafting fluid, native-feel cross-platform mobile apps for iOS and Android using Flutter and React Native.',
      icon: DevicePhoneMobileIcon,
    },
    {
      title: 'Performance & Architecture',
      desc: 'Committed to clean code principles, fast load times, SEO optimization, and maintainable software architecture.',
      icon: SparklesIcon,
    },
  ];

  const quickStats = [
    { label: 'Role', value: 'Full-Stack & Mobile Engineer' },
    { label: 'Location', value: 'Lagos, Nigeria (Remote Worldwide)' },
    { label: 'Experience', value: '3+ Years Professional Development' },
    { label: 'Availability', value: 'Available Immediately' },
  ];

  const engineeringPrinciples = [
    {
      icon: CubeTransparentIcon,
      title: 'Modular Architecture',
      desc: 'Decoupled, reusable components and clean separation of concerns.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Type Safety & Testing',
      desc: 'End-to-end type safety with TypeScript, automated tests, and strict linting.',
    },
    {
      icon: BoltIcon,
      title: 'High-Performance Standards',
      desc: 'Sub-second load times, optimized asset delivery, and efficient state trees.',
    },
    {
      icon: CpuChipIcon,
      title: 'Scalable Systems',
      desc: 'Cloud-ready architectures designed to handle growth gracefully.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/70 dark:bg-dark-900 relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="section-badge mb-3">About Me</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Transforming Visions into <span className="accent-gradient">High-Impact Realities</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A passionate software engineer focused on crafting intuitive, high-performance web and mobile products that solve real-world problems.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technical Principles & Architecture Showcase */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="p-6 rounded-3xl bg-white dark:bg-dark-950/80 border border-slate-200 dark:border-white/[0.08] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-emerald/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/[0.06] mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                    Engineering Philosophy
                  </h3>
                  <p className="text-xs text-brand-emerald font-semibold">Core Architectural Pillars</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  v3.0 Production
                </div>
              </div>

              {/* Principles List */}
              <div className="space-y-4 mb-6">
                {engineeringPrinciples.map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-900 border border-slate-200/80 dark:border-white/[0.05] hover:border-brand-emerald/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-brand-emerald shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Code Quality Promise */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-500/20">
                <p className="text-xs text-slate-700 dark:text-slate-300 italic mb-2">
                  &ldquo;Clean code is not just about syntax—it&apos;s about building resilient systems that stand the test of time and scale effortlessly.&rdquo;
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white">Adeola Yisa</span>
                  <span className="text-brand-emerald font-semibold">@RealRiga</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Competencies & Social CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center" data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
              Engineering with Purpose, Precision, & Passion
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
              I am a versatile full-stack software engineer with a deep passion for modern web technologies and mobile ecosystems. My journey is defined by a curiosity to understand complex systems and the discipline to turn intricate requirements into clean, scalable applications.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
              Whether building dynamic reactive web apps with Next.js and TypeScript, crafting performant cross-platform mobile apps with Flutter, or architecting backend services with C#, Java, or Node.js, I bridge the gap between design and technical execution.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 rounded-xl bg-white dark:bg-dark-850/80 border border-slate-200 dark:border-white/[0.06] shadow-sm flex flex-col"
                >
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Core Competencies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-dark-950/60 border border-slate-200 dark:border-white/[0.06] shadow-sm hover:border-brand-emerald/40 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-brand-emerald shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/my_resume.pdf"
                download="Yisa_Adeola_Resume.pdf"
                className="px-6 py-3 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-brand-emerald to-brand-teal hover:opacity-95 shadow-md shadow-brand-emerald/20 transition-all flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="https://github.com/RealRiga"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-dark-850 dark:hover:bg-dark-800 border border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-slate-700 dark:text-slate-300" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-dark-850 dark:hover:bg-dark-800 border border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-slate-700 dark:text-slate-300" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://wa.me/2348106040478"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-dark-850 dark:hover:bg-dark-800 border border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 shadow-sm"
              >
                <CheckCircleIcon className="w-4 h-4 text-brand-emerald" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;