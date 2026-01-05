// src/app/[locale]/projects/page.tsx
import {getProjects} from '@/lib/content';
import ProjectGrid from '@/components/projects/project-grid';
import type {Locale} from '@/content/types';
import * as motion from 'framer-motion/client'; // Importante para Server Components en Next 15
import {staggerContainer} from '@/motion/variants';
import Link from 'next/link';

export default async function ProjectsPage({ params }: { params: Promise<{locale: Locale}> }) {
  const {locale} = await params;
  const items = getProjects();

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-24">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-16 max-w-2xl">
          <Link 
            href={`/${locale}`} 
            className="group mb-8 inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <svg className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
          
          <h1 className="text-4xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
            {locale === 'es' ? 'Proyectos Seleccionados' : 'Selected Projects'}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Una colección de trabajos enfocados en interfaces intuitivas y soluciones técnicas robustas.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Usamos el grid que ya mejoramos antes */}
          <ProjectGrid projects={items} locale={locale} />
        </motion.div>
      </section>
    </main>
  );
}