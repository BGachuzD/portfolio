import type { Locale } from '@/content/types';
import { getTranslations } from 'next-intl/server';
import { projects } from '@/content/projects';

import Stagger from '@/motion/stagger';
import Reveal from '@/motion/reveal';
import ProjectGridAnimated from '@/components/projects/project-grid-animated';

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-20">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="mb-12">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              {t('allTitle') /* agrega esta key */}
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              {t('allSubtitle') /* agrega esta key */}
            </p>
          </Reveal>
        </div>

        <Stagger>
          <ProjectGridAnimated projects={projects} locale={locale} />
        </Stagger>
      </section>
    </main>
  );
}
