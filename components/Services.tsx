'use client';

import {
  CheckIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      id: 'web',
      title: 'Frontend & Web Development',
      badge: 'Modern Web',
      icon: CodeBracketSquareIcon,
      accent: 'from-emerald-500/20 to-teal-500/10',
      borderAccent: 'hover:border-emerald-500/50 dark:group-hover:border-emerald-500/40',
      description:
        'Engineering interactive, ultra-fast, and accessible web experiences using Next.js, React, and TypeScript. Focused on high conversion, SEO, and fluid UX.',
      features: [
        'Single Page Applications (SPAs) & SSR',
        'Next.js 14 App Router & Server Components',
        'Tailwind CSS & Custom Responsive Design',
        'Core Web Vitals & Performance Optimization',
      ],
    },
    {
      id: 'mobile',
      title: 'Cross-Platform Mobile Apps',
      badge: 'iOS & Android',
      icon: DevicePhoneMobileIcon,
      accent: 'from-cyan-500/20 to-blue-500/10',
      borderAccent: 'hover:border-cyan-500/50 dark:group-hover:border-cyan-500/40',
      description:
        'Building native-feel, responsive cross-platform mobile apps using Flutter and React Native. Delivering seamless user flows with offline capabilities.',
      features: [
        'Cross-platform iOS and Android builds',
        'State management & offline data caching',
        'Clean MVVM architecture & riverpod/bloc',
        'Native device integrations & smooth 60fps UI',
      ],
    },
    {
      id: 'backend',
      title: 'Backend Systems & APIs',
      badge: 'Scalable Systems',
      icon: CommandLineIcon,
      accent: 'from-purple-500/20 to-indigo-500/10',
      borderAccent: 'hover:border-purple-500/50 dark:group-hover:border-purple-500/40',
      description:
        'Designing secure, resilient server-side architectures, RESTful APIs, and database structures using C# (.NET), Java, and Node.js.',
      features: [
        'RESTful API contract design & documentation',
        'Secure token authentication & data validation',
        'Relational (SQL) & NoSQL database schemas',
        'Reliable error handling & serverless endpoints',
      ],
    },
    {
      id: 'fullstack',
      title: 'End-to-End Product Engineering',
      badge: 'Turnkey Solutions',
      icon: RocketLaunchIcon,
      accent: 'from-amber-500/20 to-orange-500/10',
      borderAccent: 'hover:border-amber-500/50 dark:group-hover:border-amber-500/40',
      description:
        'Turning product specifications and Figma wireframes into polished, production-grade applications with modern continuous delivery.',
      features: [
        'Complete frontend-to-backend integration',
        'Automated CI/CD pipelines & Vercel deployment',
        'Clean code refactoring & security reviews',
        'Payment gateways & third-party API integration',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50/70 dark:bg-dark-900 relative overflow-hidden transition-colors duration-300">
      {/* Background radial light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-emerald/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="section-badge mb-3">What I Offer</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Specialized Services for <span className="accent-gradient">Modern Products</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Delivering high-caliber engineering solutions tailored to scale, engage users, and achieve real business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`p-8 rounded-3xl bg-white dark:bg-dark-950/80 border border-slate-200 dark:border-white/[0.06] ${service.borderAccent} transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-brand-emerald/5 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-900 dark:text-white group-hover:scale-105 transition-transform shadow-sm`}>
                      <Icon className="w-7 h-7 text-brand-emerald" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mb-3 group-hover:text-brand-emerald transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <CheckIcon className="w-3 h-3 text-brand-emerald" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="https://wa.me/2348106040478"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-emerald hover:text-emerald-700 dark:hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Discuss this project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;