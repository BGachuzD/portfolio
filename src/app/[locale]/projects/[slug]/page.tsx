import {notFound} from 'next/navigation';
import type {Locale} from '@/content/types';
import {getProjectBySlug} from '@/lib/content';
import TechBadges from '@/components/projects/tech-badges';
import {getTranslations} from 'next-intl/server';

import {routing} from '@/i18n/routing';
import {getProjects} from '@/lib/content';

import type {Metadata} from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: Locale; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: 'Project' };

  return {
    title: project.name,
    description: project.summary[locale]
  };
}


export function generateStaticParams() {
  const items = getProjects();
  const params: Array<{locale: 'es' | 'en'; slug: string}> = [];

  for (const locale of routing.locales) {
    for (const p of items) {
      params.push({locale, slug: p.slug});
    }
  }

  return params;
}


export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{locale: Locale; slug: string}>;
}) {
  const {locale, slug} = await params;
  const t = await getTranslations('projects');

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">{project.name}</h1>
      <p className="mt-2 text-neutral-600">{project.summary[locale]}</p>

      <TechBadges stack={project.stack} />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">{t('role')}</h2>
          <p className="mt-2 text-neutral-700">{project.role[locale]}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">{t('highlights')}</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-700">
            {project.highlights[locale].map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
