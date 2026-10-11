'use client';

import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-24 bg-slate-50/70 dark:bg-dark-900 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-emerald/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="section-badge mb-3">Client & Peer Feedback</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Trusted by Colleagues & <span className="accent-gradient">Clients</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real feedback from engineering collaborators and clients highlighting technical excellence, punctuality, and problem-solving.
          </p>
        </div>

        {/* Carousel Container */}
        <div data-aos="fade-up" data-aos-delay="100">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;