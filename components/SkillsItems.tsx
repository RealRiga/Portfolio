import React from 'react';

interface Props {
  title: string;
  year: string;
  text: string;
}

const SkillsItems = ({ title, year, text }: Props) => {
  return (
    <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-brand-emerald/40 transition-colors mb-6">
      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-brand-emerald border border-emerald-500/20 mb-3">
        {year}
      </div>
      <h3 className="text-xl font-bold text-white font-heading mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default SkillsItems;