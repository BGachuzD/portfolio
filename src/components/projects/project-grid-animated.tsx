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
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCardAnimated key={p.slug} project={p} locale={locale} />
      ))}
    </div>
  );
}
