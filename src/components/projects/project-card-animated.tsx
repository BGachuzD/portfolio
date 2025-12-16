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
      whileHover={reduceMotion ? undefined : {y: -4}}
      transition={{duration: 0.2}}
      className="rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <Link
          href={href}
          className="text-sm text-neutral-700 hover:text-neutral-950"
        >
          {locale === 'es' ? 'Ver →' : 'View →'}
        </Link>
      </div>

      <p className="mt-3 text-sm text-neutral-600">{project.summary[locale]}</p>

      <TechBadges stack={project.stack} />
    </motion.article>
  );
}
