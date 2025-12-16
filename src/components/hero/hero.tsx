'use client';

import * as React from 'react';
import {motion, useReducedMotion, useScroll, useTransform} from 'framer-motion';
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('home');
  const reduceMotion = useReducedMotion();

  // Scroll progress relativo al Hero para parallax suave
  const ref = React.useRef<HTMLElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Parallax transforms (solo si no reduce motion)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  // Animación de entrada del headline
  const headline = t('headline');
  const words = React.useMemo(() => headline.split(' '), [headline]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-neutral-50 to-white" />

        {/* Blobs animados (sutiles) */}
        {!reduceMotion && (
          <>
            <motion.div
              aria-hidden
              className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-neutral-200/60 blur-3xl"
              animate={{x: [0, 18, -10, 0], y: [0, -12, 8, 0]}}
              transition={{duration: 14, repeat: Infinity, ease: 'easeInOut'}}
              style={{translateY: y2}}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-neutral-200/50 blur-3xl"
              animate={{x: [0, -14, 12, 0], y: [0, 10, -10, 0]}}
              transition={{duration: 16, repeat: Infinity, ease: 'easeInOut'}}
              style={{translateY: y1}}
            />
          </>
        )}
      </div>

      {/* Content */}
      <motion.div
        style={{opacity}}
        className="mx-auto max-w-5xl px-6 py-20 md:py-28"
      >
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            {/* Eyebrow */}
            <motion.p
              initial={reduceMotion ? false : {opacity: 0, y: 10}}
              animate={reduceMotion ? undefined : {opacity: 1, y: 0}}
              transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
              className="text-sm font-medium text-neutral-600"
            >
              {t('eyebrow')}
            </motion.p>

            {/* Headline (word-by-word reveal) */}
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              {words.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  initial={reduceMotion ? false : {opacity: 0, y: 14, filter: 'blur(6px)'}}
                  animate={reduceMotion ? undefined : {opacity: 1, y: 0, filter: 'blur(0px)'}}
                  transition={{
                    duration: 0.45,
                    delay: 0.06 * i,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="inline-block"
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={reduceMotion ? false : {opacity: 0, y: 10}}
              animate={reduceMotion ? undefined : {opacity: 1, y: 0}}
              transition={{duration: 0.35, delay: 0.25, ease: [0.16, 1, 0.3, 1]}}
              className="mt-5 text-lg leading-relaxed text-neutral-600"
            >
              {t('subheadline')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduceMotion ? false : {opacity: 0, y: 10}}
              animate={reduceMotion ? undefined : {opacity: 1, y: 0}}
              transition={{duration: 0.35, delay: 0.35, ease: [0.16, 1, 0.3, 1]}}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
              >
                {t('ctaPrimary')}
              </a>
              <a
                href="#contact"
                className="rounded-xl border bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:bg-neutral-50"
              >
                {t('ctaSecondary')}
              </a>
            </motion.div>
          </div>

          {/* Right column: “feature panel” con parallax */}
          <div className="md:col-span-5">
            <motion.div
              initial={reduceMotion ? false : {opacity: 0, y: 16}}
              animate={reduceMotion ? undefined : {opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
              style={!reduceMotion ? {translateY: y1} : undefined}
              className="rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <p className="text-sm font-medium text-neutral-900">
                {t('panelTitle')}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{t('panelItem1')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{t('panelItem2')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                  <span>{t('panelItem3')}</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Next.js', 'React', 'React Native', 'Prisma', 'Firebase', 'DevOps'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
