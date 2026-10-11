'use client';

import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

interface Props {
  name: string;
  role: string;
  image: string;
  text: string;
  project?: string;
}

const ClientReview = ({ name, role, image, text, project }: Props) => {
  return (
    <div className="mx-3 my-4 p-8 rounded-3xl bg-white dark:bg-dark-900/90 border border-slate-200 dark:border-white/[0.08] hover:border-brand-emerald/40 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none flex flex-col justify-between h-full">
      <div>
        {/* Quote & Stars */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 text-amber-400" />
            ))}
          </div>
          <span className="text-3xl text-brand-emerald/30 font-serif font-black leading-none select-none">
            &ldquo;
          </span>
        </div>

        {/* Review Text */}
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-8">
          &ldquo;{text}&rdquo;
        </p>
      </div>

      {/* Client Profile */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-emerald/40 shrink-0 bg-slate-100 dark:bg-dark-950">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading">
            {name}
          </h4>
          <p className="text-xs text-brand-emerald font-semibold">{role}</p>
          {project && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Collab: {project}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;