import Reveal from '@/motion/reveal';
import {getTranslations} from 'next-intl/server';
import type {Locale} from '@/content/types';
import Image from 'next/image';

export default async function AboutSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'about'});

  return (
    <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-24 items-start">
        
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              {t('title')}
            </h2>
          </Reveal>
          
          <Reveal>
            <div className="mt-8 relative group">
              <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl transition-transform duration-500 group-hover:-rotate-2">
                <Image
                  src="/assets/yo.jpg"
                  alt="Professional portrait"
                  fill
                  className="object-cover  transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  sizes="(max-w-768px) 100vw, 400px"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">
                    {locale === 'es' ? 'Localizado en' : 'Located in'}
                  </p>
                  <p className="text-sm font-medium text-white">
                    Mexico City, MX
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="mb-8 h-1 w-12 rounded-full bg-neutral-900 dark:bg-white" />
              
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl md:leading-loose">
                {t('body')}
              </p>
              
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="group rounded-3xl border border-neutral-100 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-950/50 shadow-sm transition-all hover:shadow-xl hover:border-neutral-200 dark:hover:border-neutral-700">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 dark:bg-neutral-900 text-neutral-950 dark:text-white group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path d="M12 8v4l3 3" /></svg>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                    {locale === 'es' ? 'Filosofía' : 'Philosophy'}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {locale === 'es' 
                      ? 'Menos es más. Diseño interfaces limpias que priorizan la experiencia del usuario.' 
                      : 'Less is more. I design clean interfaces that prioritize user experience.'}
                  </p>
                </div>
                
                <div className="group rounded-3xl border border-neutral-100 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-950/50 shadow-sm transition-all hover:shadow-xl hover:border-neutral-200 dark:hover:border-neutral-700">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 dark:bg-neutral-900 text-neutral-950 dark:text-white group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 transition-colors">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                    {locale === 'es' ? 'Aprendizaje' : 'Learning'}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {locale === 'es' 
                      ? 'Actualmente profundizando en animaciones avanzadas y sistemas distribuidos.' 
                      : 'Currently diving deep into advanced animations and distributed systems.'}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}