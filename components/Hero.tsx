'use client';

import { ArrowDownTrayIcon, ChevronDownIcon, CodeBracketIcon } from '@heroicons/react/20/solid';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Particle from './Particle';
import TextEffect from './TextEffect';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-emerald/10 dark:bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-cyan/10 dark:bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle particle constellation */}
      <Particle />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" data-aos="fade-up">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time & Freelance Roles</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] font-heading mb-3">
              Hi, I&apos;m <span className="accent-gradient">Adeola Yisa</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="mb-6">
              <TextEffect />
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              A results-driven <strong className="text-slate-900 dark:text-white font-semibold">Full-Stack Software Engineer & Mobile Developer</strong> passionate about engineering scalable, elegant, and user-centric digital experiences. Versatile across modern frontend frameworks, cloud-ready APIs, and cross-platform mobile architectures.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollToSection('project')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-brand-emerald via-teal-400 to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-emerald/20 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>View Featured Projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="/my_resume.pdf"
                download="Yisa_Adeola_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-dark-900/90 dark:hover:bg-dark-850 border border-slate-200 dark:border-white/[0.1] hover:border-brand-emerald/40 dark:hover:border-brand-emerald/40 transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm hover:text-slate-900 dark:hover:text-white"
              >
                <ArrowDownTrayIcon className="w-4 h-4 text-brand-emerald group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-transparent dark:hover:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <SparklesIcon className="w-4 h-4 text-brand-cyan" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-white/[0.08] w-full">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mr-2 flex items-center gap-1.5">
                <CodeBracketIcon className="w-4 h-4 text-brand-emerald" /> Core Stack:
              </span>
              {['React', 'Next.js', 'TypeScript', 'Flutter', 'Node.js', 'C#', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-dark-900/80 border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Showcase & Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-slate-200/60 via-slate-100/40 to-transparent dark:from-white/[0.1] dark:via-white/[0.03] dark:to-transparent border border-slate-200 dark:border-white/[0.1] backdrop-blur-xl shadow-xl dark:shadow-2xl">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-emerald/20 to-brand-cyan/20 rounded-3xl blur-xl -z-10 opacity-70" />

              {/* Main Photo Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-dark-900">
                <Image
                  src="/image/riga.jpg"
                  alt="Adeola Yisa (Riga)"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 420px"
                />

                {/* Ambient photo gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 dark:bg-dark-950/85 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-md flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">Adeola Yisa</h3>
                    <p className="text-xs text-brand-emerald font-semibold">Software Engineer & Creator</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Pro
                  </div>
                </div>
              </div>

              {/* Floating Highlight Pill (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-6 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-dark-900/90 backdrop-blur-md border border-slate-200 dark:border-white/[0.1] shadow-lg flex items-center gap-2 animate-float">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-brand-emerald font-bold text-xs">
                  ⚡
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Experience</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">3+ Years Pro</div>
                </div>
              </div>

              {/* Floating Highlight Pill (Top Right) */}
              <div className="absolute top-10 -right-3 sm:-right-6 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-dark-900/90 backdrop-blur-md border border-slate-200 dark:border-white/[0.1] shadow-lg flex items-center gap-2 animate-float [animation-delay:1.5s]">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center text-brand-cyan font-bold text-xs">
                  🚀
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Delivered</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">15+ Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-brand-emerald transition-colors group focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <ChevronDownIcon className="w-4 h-4 animate-bounce group-hover:text-brand-emerald" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;