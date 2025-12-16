import {getProjects} from '@/lib/content';
import ProjectGrid from '@/components/projects/project-grid';
import type {Locale} from '@/content/types';
import {motion} from 'framer-motion';
import {staggerContainer} from '@/motion/variants';

import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: Locale}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'projects'});

  return {
    title: t('title'),
    description: t('subtitle')
  };
}

export default async function ProjectsPage({
  params
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  const items = getProjects();
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-2 text-neutral-600">
        Selected work across web, mobile, and fullstack systems.
      </p>

      <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
        <ProjectGrid projects={items} locale={locale} />
      </motion.div>
    </section>
  );
}
