'use client';

import { useState, useEffect } from 'react';
import { ArrowDownTrayIcon, ChevronDownIcon, CodeBracketIcon } from '@heroicons/react/20/solid';
import { SparklesIcon, CommandLineIcon, CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import Particle from './Particle';
import TextEffect from './TextEffect';
import { SiteSettings, defaultSettings } from '@/lib/settings';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data?.settings) {
          setSettings(data.settings);
        }
      })
      .catch((err) => console.error('Failed to load settings:', err));
  }, []);

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

  const copyEmail = () => {
    navigator.clipboard.writeText('adeolayisa32@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-6">
              A versatile <strong className="text-slate-900 dark:text-white font-semibold">Software Engineer & Full-Stack / Mobile Specialist</strong> with <strong className="text-emerald-600 dark:text-brand-emerald font-semibold">5+ years</strong> of hands-on experience engineering scalable web applications, cross-platform mobile apps published on the Play Store, and high-throughput backend services.
            </p>

            {/* Primary Social Badges: GitHub, LinkedIn, WhatsApp, Email */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {/* GitHub */}
              <a
                href="https://github.com/RealRiga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-dark-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-brand-emerald hover:text-brand-emerald dark:hover:text-brand-emerald hover:shadow-md transition-all group"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">@RealRiga</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adeola-yisa-1536b4239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-dark-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-brand-cyan hover:text-brand-cyan dark:hover:text-brand-cyan hover:shadow-md transition-all group"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348106040478"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-dark-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:shadow-md transition-all group"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Email Copy Pill */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-dark-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] hover:border-brand-emerald hover:text-brand-emerald dark:hover:text-brand-emerald hover:shadow-md transition-all group"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-brand-emerald" />
                    <span className="text-brand-emerald font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <ClipboardDocumentIcon className="w-4 h-4 text-slate-400 group-hover:text-brand-emerald transition-colors" />
                    <span>adeolayisa32@gmail.com</span>
                  </>
                )}
              </button>
            </div>

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

          {/* Right Column: Interactive Developer Workstation & Terminal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative w-full max-w-[460px] rounded-3xl p-1 bg-gradient-to-b from-slate-200 via-slate-100 to-transparent dark:from-white/[0.12] dark:via-white/[0.04] dark:to-transparent border border-slate-200 dark:border-white/[0.1] shadow-2xl">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-emerald/20 via-brand-cyan/20 to-teal-500/10 rounded-3xl blur-2xl -z-10 opacity-70" />

              {/* Terminal Window Card */}
              <div className="w-full rounded-[22px] overflow-hidden bg-slate-900 text-slate-200 shadow-2xl border border-slate-800">
                {/* Window Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <CommandLineIcon className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>adeola-yisa.config.ts</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>active</span>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                  <div className="text-slate-500 mb-2">{`// Full-Stack & Mobile Engineer Specification`}</div>
                  <div>
                    <span className="text-purple-400 font-bold">export const</span>{' '}
                    <span className="text-amber-300 font-semibold">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">name</span>: <span className="text-emerald-400">&apos;Adeola Yisa (Riga)&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">role</span>: <span className="text-emerald-400">&apos;Software Engineer&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">location</span>: <span className="text-emerald-400">&apos;Lagos, Nigeria 🌍&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">experience</span>: <span className="text-emerald-400">&apos;5+ Years Production&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">specialties</span>: [
                  </div>
                  <div className="pl-8 text-teal-300 space-y-0.5">
                    {/* Admin Toggleable - Commented out / disabled by default per user request */}
                    {settings.showEnterpriseMonorepos && (
                      <div>&apos;Enterprise Web Apps &amp; Monorepos (Turborepo)&apos;,</div>
                    )}
                    {settings.showPublishedApps && (
                      <div>&apos;Published Mobile Apps (Billia, Billvault, ZappaPay)&apos;,</div>
                    )}
                    {settings.showCrossPlatform && (
                      <div>&apos;Cross-Platform (Flutter/Dart &amp; React Native)&apos;,</div>
                    )}
                    {settings.showBackendMicroservices && (
                      <div>&apos;Backend Microservices (Django, Node.js, NestJS, C#, Java)&apos;</div>
                    )}
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-cyan-300">skills</span>: &#123;
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">frontend:</span> [<span className="text-emerald-400">&apos;Next.js&apos;</span>, <span className="text-emerald-400">&apos;React&apos;</span>, <span className="text-emerald-400">&apos;TypeScript&apos;</span>, <span className="text-emerald-400">&apos;Angular&apos;</span>, <span className="text-emerald-400">&apos;Vue&apos;</span>],
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">mobile:</span> [<span className="text-emerald-400">&apos;Flutter&apos;</span>, <span className="text-emerald-400">&apos;Dart&apos;</span>, <span className="text-emerald-400">&apos;React Native&apos;</span>],
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">backend:</span> [<span className="text-emerald-400">&apos;Node.js&apos;</span>, <span className="text-emerald-400">&apos;NestJS&apos;</span>, <span className="text-emerald-400">&apos;Python/Django&apos;</span>, <span className="text-emerald-400">&apos;C#&apos;</span>, <span className="text-emerald-400">&apos;Java&apos;</span>],
                  </div>
                  <div className="pl-8">
                    <span className="text-slate-400">databases:</span> [<span className="text-emerald-400">&apos;MySQL&apos;</span>, <span className="text-emerald-400">&apos;MongoDB&apos;</span>, <span className="text-emerald-400">&apos;PostgreSQL&apos;</span>, <span className="text-emerald-400">&apos;Prisma&apos;</span>]
                  </div>
                  <div className="pl-4">&#125;,</div>
                  <div className="pl-4">
                    <span className="text-cyan-300">openToWork</span>: <span className="text-amber-400 font-semibold">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">getInTouch</span>: () =&gt; <span className="text-brand-emerald font-semibold">&apos;adeolayisa32@gmail.com&apos;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Bottom Status Terminal Bar */}
                <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span className="text-slate-300">git status: 0 errors, 100% test pass</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-cyan">
                    <span>UTF-8</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badges around terminal */}
              <div className="absolute -top-3 -left-3 sm:-left-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-dark-900/90 backdrop-blur-md border border-slate-200 dark:border-white/[0.1] shadow-lg flex items-center gap-2 animate-float">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-brand-emerald font-bold text-xs">
                  ⚡
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Track Record</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">15+ Projects Shipped</div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 sm:-right-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-dark-900/90 backdrop-blur-md border border-slate-200 dark:border-white/[0.1] shadow-lg flex items-center gap-2 animate-float [animation-delay:1.5s]">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center text-brand-cyan font-bold text-xs">
                  🎯
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Reliability</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">100% Code Quality</div>
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