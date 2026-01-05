'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitch from './locale-switch';

type SectionId = 'home' | 'projects' | 'about' | 'contact';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const base = pathname.startsWith(`/${locale}`) ? `/${locale}` : `/${locale}`;

  const nav: Array<{ id: SectionId; label: string }> = [
    { id: 'home', label: t('home') },
    { id: 'projects', label: t('projects') },
    { id: 'about', label: t('about') },
    { id: 'contact', label: t('contact') }
  ];

  return (
    <header className="fixed inset-x-0 top-5 z-50 mx-auto flex h-14 max-w-fit items-center justify-center">
      <nav className="flex items-center gap-1 rounded-full border border-neutral-200/50 bg-white/70 p-1.5 shadow-lg backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-950/70 dark:shadow-2xl">
        
        <Link
          href={`${base}#home`}
          className="group relative flex h-9 items-center justify-center rounded-full px-4 text-sm font-bold tracking-tight text-neutral-950 dark:text-white"
        >
          <span className="relative z-10 transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
            Gachuz
          </span>
          <div className="absolute inset-0 -z-10 rounded-full bg-neutral-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-800" />
        </Link>

        <div className="hidden items-center gap-1 md:flex border-l border-neutral-200 dark:border-neutral-800 ml-1 pl-1">
          {nav.slice(1).map((item) => (
            <Link
              key={item.id}
              href={`${base}#${item.id}`}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 border-l border-neutral-200 dark:border-neutral-800 ml-1 pl-1">
          <LocaleSwitch />
          
          <div className="md:hidden">
            <Link
              href={`${base}#contact`}
              className="flex h-9 items-center justify-center rounded-full bg-neutral-950 px-4 text-xs font-bold text-white dark:bg-white dark:text-neutral-950"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}