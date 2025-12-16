import type {Locale, Project} from '@/content/types';
import ProjectCard from './project-card';
import {motion} from 'framer-motion';
import {fadeUp} from '@/motion/variants';

export default function ProjectGrid({
  projects,
  locale
}: {
  projects: Project[];
  locale: Locale;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
      <motion.article variants={fadeUp} key={p.slug}>
        <ProjectCard key={p.slug} project={p} locale={locale} />
      </motion.article>
      ))}
    </div>
  );
}
