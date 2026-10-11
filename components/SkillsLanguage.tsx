import React from 'react';

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;
  skill6: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
  level6: string;
}

const SkillsLanguage = ({
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
}: Props) => {
  const skills = [
    { name: skill1, level: level1 },
    { name: skill2, level: level2 },
    { name: skill3, level: level3 },
    { name: skill4, level: level4 },
    { name: skill5, level: level5 },
    { name: skill6, level: level6 },
  ];

  return (
    <div className="space-y-4">
      {skills.map((s, idx) => (
        <div key={idx} className="p-4 rounded-xl bg-dark-900 border border-white/[0.06] relative overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm text-white uppercase tracking-wider">{s.name}</span>
            <span className="text-xs text-brand-emerald font-semibold">{s.level.replace('w-[', '').replace('%]', '%')}</span>
          </div>
          <div className="w-full h-1.5 bg-dark-950 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-brand-emerald to-brand-cyan ${s.level} rounded-full`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsLanguage;