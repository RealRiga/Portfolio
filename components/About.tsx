'use client';

import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

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

  return (
    <section id="about" className="py-24 bg-slate-50/70 dark:bg-dark-900 relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />

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
          {/* Left Column: Visual Card with Profile Image */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel p-4 shadow-xl">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 dark:bg-dark-950">
                <Image
                  src="/image/about.jpg"
                  alt="Adeola Yisa working"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid Quote Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-dark-950/90 backdrop-blur-md border border-slate-200 dark:border-white/[0.08] shadow-md">
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic mb-2">
                    &ldquo;Clean code is not just about syntax—it&apos;s about building resilient systems that stand the test of time.&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">Adeola Yisa</span>
                    <span className="text-brand-emerald font-semibold">Software Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Highlights */}
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
                href="https://wa.me/2348106040478"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-dark-850 dark:hover:bg-dark-800 border border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 shadow-sm"
              >
                <CheckCircleIcon className="w-4 h-4 text-brand-emerald" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;