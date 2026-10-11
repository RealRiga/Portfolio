'use client';

import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div className="inline-block min-h-[44px] md:min-h-[56px]">
      <TypeAnimation
        sequence={[
          'Full-Stack Developer',
          1800,
          'Mobile App Specialist',
          1800,
          'Next.js & React Engineer',
          1800,
          'Flutter & Cross-Platform Dev',
          1800,
          'Backend & API Architect',
          1800,
        ]}
        speed={45}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-brand-emerald via-teal-300 to-brand-cyan bg-clip-text text-transparent font-heading"
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;