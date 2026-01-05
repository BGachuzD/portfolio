import type {Locale, Project} from '@/content/types';
import ProjectCardAnimated from './project-card-animated';

export default function ProjectGridAnimated({
  projects,
  locale
}: {
  projects: Project[];
  locale: Locale;
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
      {projects.map((p) => (
        <ProjectCardAnimated key={p.slug} project={p} locale={locale} />
      ))}
    </div>
  );
}