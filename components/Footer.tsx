'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpIcon,
  CheckIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending / prepare mailto link
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:adeolayisa32@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Hi Adeola,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white dark:bg-dark-950 pt-24 pb-12 relative overflow-hidden border-t border-slate-200 dark:border-white/[0.08] transition-colors duration-300">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-emerald/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="section-badge mb-3">Let&apos;s Connect</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Have a Project in Mind? <span className="accent-gradient">Let&apos;s Build Together</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Whether you are looking to hire a full-stack engineer, develop a cross-platform mobile app, or need advice on technical architecture—I am just a message away.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to reach out directly via WhatsApp or email. I usually respond within a few hours.
              </p>
            </div>

            {/* Email Card */}
            <a
              href="mailto:adeolayisa32@gmail.com"
              className="p-5 rounded-2xl glass-panel hover:border-brand-emerald/40 transition-all flex items-center gap-4 group block shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-brand-emerald flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Email Address</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-emerald transition-colors truncate">
                  adeolayisa32@gmail.com
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/2348106040478"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel hover:border-brand-emerald/40 transition-all flex items-center gap-4 group block shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">WhatsApp & Phone</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-teal transition-colors">
                  +234 810 604 0478
                </div>
              </div>
            </a>

            {/* GitHub & LinkedIn 2-Col Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/RealRiga"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel hover:border-brand-emerald/40 transition-all flex items-center gap-3.5 group block shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/[0.06] text-slate-900 dark:text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">GitHub</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-emerald transition-colors font-mono">
                    @RealRiga
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/adeola-yisa-1536b4239"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel hover:border-brand-cyan/40 transition-all flex items-center gap-3.5 group block shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-brand-cyan flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">LinkedIn</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors">
                    Adeola Yisa
                  </div>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-panel flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-brand-cyan flex items-center justify-center shrink-0">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Location</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Lagos, Nigeria (Available for Global Remote)
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-500/20 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white font-semibold">Immediate Availability:</strong> Open for Full-Time, Contract, & High-Impact Freelance Roles.
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-900/90 border border-slate-200 dark:border-white/[0.08] shadow-md dark:shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-brand-emerald flex items-center justify-center">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
                    Your message draft has been initiated. If your mail client didn&apos;t automatically launch, feel free to email me directly at{' '}
                    <strong className="text-brand-emerald">adeolayisa32@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-dark-800 dark:hover:bg-dark-750 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-slate-200 dark:border-white/[0.08] focus:border-brand-emerald focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-slate-200 dark:border-white/[0.08] focus:border-brand-emerald focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Collaboration / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-slate-200 dark:border-white/[0.08] focus:border-brand-emerald focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or scope..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-950/80 border border-slate-200 dark:border-white/[0.08] focus:border-brand-emerald focus:outline-none text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-brand-emerald via-teal-400 to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-emerald/20 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <PaperAirplaneIcon className="w-4 h-4 text-dark-950 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-emerald to-brand-cyan p-[1px]">
              <div className="w-full h-full bg-white dark:bg-dark-950 rounded-[7px] flex items-center justify-center font-bold text-slate-900 dark:text-white text-sm font-heading">
                R.
              </div>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              © {currentYear} <strong className="text-slate-900 dark:text-white font-medium">Adeola Yisa (RealRiga)</strong>. Built with Next.js 14 & Tailwind CSS.
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="https://github.com/RealRiga" target="_blank" rel="noopener noreferrer" className="hover:text-brand-emerald transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/adeola-yisa-1536b4239" target="_blank" rel="noopener noreferrer" className="hover:text-brand-emerald transition-colors">
              LinkedIn
            </a>
            <a href="https://wa.me/2348106040478" target="_blank" rel="noopener noreferrer" className="hover:text-brand-emerald transition-colors">
              WhatsApp
            </a>
            <a href="mailto:adeolayisa32@gmail.com" className="hover:text-brand-emerald transition-colors">
              Email
            </a>
            <Link
              href="/admin"
              className="text-slate-400 hover:text-brand-emerald transition-colors opacity-75 hover:opacity-100"
              title="Admin Portal"
            >
              Admin
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-dark-900 dark:border dark:border-white/[0.08] dark:hover:border-brand-emerald/40 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUpIcon className="w-3.5 h-3.5 text-brand-emerald" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;