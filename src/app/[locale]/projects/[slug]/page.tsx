import TechBadges from "@/components/projects/tech-badges";
import { Locale } from "@/content/types";
import { getProjectBySlug } from "@/lib/content";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{locale: Locale; slug: string}> }) {
  const {locale, slug} = await params;
  const t = await getTranslations('projects');
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-20">
      <section className="border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/20 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.summary[locale]}
              </p>
              <div className="mt-8">
                <TechBadges stack={project.stack} />
              </div>
            </div>

            <div className="flex gap-4">
              <button className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-neutral-950 shadow-lg">
                Live Preview
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                {t('role')}
              </h2>
              <p className="mt-4 text-lg font-medium text-neutral-900 dark:text-neutral-200">
                {project.role[locale]}
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 p-8 border border-neutral-100 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-neutral-950 dark:text-white mb-4">Stack Principal</h3>
              <ul className="space-y-3">
                {project.stack.slice(0, 4).map((s) => (
                  <li key={s} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t('highlights')}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {project.highlights[locale].map((h, i) => (
                <div key={i} className="group relative rounded-2xl border border-neutral-100 dark:border-neutral-800 p-6 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
                  <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 text-xs font-bold shadow-sm dark:text-white">
                    {i + 1}
                  </span>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    {h}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 aspect-video w-full overflow-hidden rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-inner flex items-center justify-center">
              <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
                Mockup / Image Placeholder
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}