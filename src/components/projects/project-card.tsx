import Link from 'next/link';
import type {Locale, Project} from '@/content/types';
import TechBadges from './tech-badges';

export default function ProjectCard({
  project,
  locale
}: {
  project: Project;
  locale: Locale;
}) {
  const href = `/${locale}/projects/${project.slug}`;

  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <Link
          href={href}
          className="text-sm text-neutral-700 hover:text-neutral-950"
        >
          View →
        </Link>
      </div>

      <p className="mt-3 text-sm text-neutral-600">
        {project.summary[locale]}
      </p>

      <TechBadges stack={project.stack} />
    </article>
  );
}
