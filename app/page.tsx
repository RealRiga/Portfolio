'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionId === 'home' ? 0 : elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-dark-950 dark:text-slate-100 overflow-x-hidden selection:bg-brand-emerald selection:text-black transition-colors duration-300">
      {/* Navigation Header */}
      <Nav openNav={openNav} />
      <MobileNav nav={nav} closeNav={closeNav} scrollToSection={scrollToSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonial />
      </main>

      {/* Footer & Contact Section */}
      <Footer />
    </div>
  );
}
