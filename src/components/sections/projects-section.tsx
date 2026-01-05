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
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              {t('featured')}
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t('subtitle')}
            </p>
          </Reveal>
        </div>
        
        {/* Línea decorativa opcional */}
        <div className="hidden h-px flex-1 bg-neutral-200 dark:bg-neutral-800 ml-8 mb-4 md:block" />
      </div>

      <Stagger>
        <ProjectGridAnimated projects={items} locale={locale} />
      </Stagger>
    </section>
  );
}