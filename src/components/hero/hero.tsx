'use client';

import * as React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TECNOLOGIESTAGS } from '@/constants/tags';

export default function Hero() {
  const t = useTranslations('home');
  const reduceMotion = useReducedMotion();

  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -140]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const headline = t('headline');
  const words = React.useMemo(() => headline.split(' '), [headline]);

  return (
    <section ref={ref} id="home" className="relative min-h-[90vh] overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-500">
      {/* Background Decorativo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {!reduceMotion && (
          <>
            <motion.div
              aria-hidden
              className="absolute -top-24 -left-24 h-400 w-400 rounded-full bg-neutral-100/80 dark:bg-neutral-900/40 blur-[100px]"
              animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
              style={{ translateY: y2 }}
            />
            <motion.div
              aria-hidden
              className="absolute top-1/2 -right-24 h-350 w-350 rounded-full bg-neutral-200/50 dark:bg-neutral-800/20 blur-[100px]"
              animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              style={{ translateY: y1 }}
            />
          </>
        )}
      </div>

      <motion.div
        style={{ opacity }}
        className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:px-8 lg:py-40"
      >
        <div className="grid gap-16 md:grid-cols-12 md:items-center lg:gap-24">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <div className="flex flex-col items-center text-center md:col-span-7 md:items-start md:text-left">
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 ring-1 ring-inset ring-neutral-200 dark:ring-neutral-800"
            >
              {t('eyebrow')}
            </motion.span>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
              {words.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 * i,
                    ease: [0.21, 1.11, 0.81, 0.99]
                  }}
                  className="inline-block"
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
            >
              {t('subheadline')}
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-900 dark:bg-white px-8 py-4 text-sm font-bold text-white dark:text-neutral-950 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-neutral-200 dark:shadow-none"
              >
                {t('ctaPrimary')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-transparent px-8 py-4 text-sm font-bold text-neutral-900 dark:text-white transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                {t('ctaSecondary')}
              </a>
              <a
                href="/assets/CV Brayan Gachuz Davila.pdf"
                download="CV-Brayan-Gachuz-Davila.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-transparent px-8 py-4 text-sm font-bold text-neutral-900 dark:text-white transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                {t('ctaResume')}
              </a>
            </motion.div>
          </div>

          {/* LADO DERECHO: PANEL VISUAL */}
          <div className="relative md:col-span-5">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={!reduceMotion ? { translateY: y1 } : undefined}
              className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-2xl dark:shadow-none"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                  {t('panelTitle')}
                </p>
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-400/20" />
                  <div className="h-2 w-2 rounded-full bg-amber-400/20" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400/20" />
                </div>
              </div>

              <ul className="mt-8 space-y-5">
                {[1, 2, 3].map((item) => (
                  <motion.li 
                    whileHover={{ x: 5 }}
                    key={item} 
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-neutral-950 dark:bg-white transition-transform group-hover:rotate-12">
                      <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-neutral-950" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                      {t(`panelItem${item}`)}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                {TECNOLOGIESTAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors hover:text-neutral-950 dark:hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Elemento Decorativo */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-neutral-100 dark:bg-neutral-900 blur-2xl" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
