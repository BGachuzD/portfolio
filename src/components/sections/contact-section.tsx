import Reveal from '@/motion/reveal';
import {getTranslations} from 'next-intl/server';
import type {Locale} from '@/content/types';

export default async function ContactSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'contact'});

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-5xl px-6 py-14">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">{t('title')}</h2>
      </Reveal>
      <Reveal>
        <p className="mt-3 text-neutral-600">{t('body')}</p>
      </Reveal>

      <Reveal className="mt-6">
        <a
          className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          href="mailto:tu_correo@ejemplo.com"
        >
          {t('cta')}
        </a>
      </Reveal>
    </section>
  );
}
