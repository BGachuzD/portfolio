import type {Locale, Project} from '@/content/types';
import {getTranslations} from 'next-intl/server';
import Reveal from '@/motion/reveal';
import Stagger from '@/motion/stagger';
import ProjectGridAnimated from '@/components/projects/project-grid-animated';

export default async function ProjectsSection({
  locale,
  items
}: {
  locale: Locale;
  items: Project[];
}) {
  const t = await getTranslations({locale, namespace: 'projects'});

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-14">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">{t('featured')}</h2>
      </Reveal>

      <Reveal>
        <p className="mt-2 text-neutral-600">{t('subtitle')}</p>
      </Reveal>

      <Stagger className="mt-8">
        <ProjectGridAnimated projects={items} locale={locale} />
      </Stagger>
    </section>
  );
}
