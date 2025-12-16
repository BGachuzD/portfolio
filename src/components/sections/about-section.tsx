import Reveal from '@/motion/reveal';
import {getTranslations} from 'next-intl/server';
import type {Locale} from '@/content/types';

export default async function AboutSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'about'});

  return (
    <section id="about" className="scroll-mt-24 mx-auto max-w-5xl px-6 py-14">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">{t('title')}</h2>
      </Reveal>
      <Reveal>
        <p className="mt-3 text-neutral-600">{t('body')}</p>
      </Reveal>
    </section>
  );
}
