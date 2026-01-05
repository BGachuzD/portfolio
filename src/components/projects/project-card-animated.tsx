'use client';

import Link from 'next/link';
import {motion, useReducedMotion} from 'framer-motion';
import type {Locale, Project} from '@/content/types';
import TechBadges from './tech-badges';
import {fadeUp} from '@/motion/variants';

export default function ProjectCardAnimated({
  project,
  locale
}: {
  project: Project;
  locale: Locale;
}) {
  const href = `/${locale}/projects/${project.slug}`;
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      className="group relative flex flex-col h-full rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-7 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:hover:shadow-none"
    >
      <Link href={href} className="absolute inset-0 z-10" aria-label={project.name} />

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
            {project.name}
          </h3>
          
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 transition-transform group-hover:-rotate-45 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <p className="mt-4 grow text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {project.summary[locale]}
        </p>

        <div className="mt-8">
          <TechBadges stack={project.stack} />
        </div>
        
        <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
          {locale === 'es' ? 'Explorar caso' : 'Explore case'}
          <span className="ml-2 h-px w-4 bg-neutral-200 dark:bg-neutral-700 group-hover:w-8 group-hover:bg-neutral-950 dark:group-hover:bg-white transition-all" />
        </div>
      </div>
    </motion.article>
  );
}