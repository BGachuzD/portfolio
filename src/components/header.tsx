'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';

import LocaleSwitch from './locale-switch';

type SectionId = 'home' | 'projects' | 'about' | 'contact';

function getBasePath(pathname: string, locale: string) {
  return pathname.startsWith(`/${locale}`) ? `/${locale}` : `/${locale}`;
}

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const base = getBasePath(pathname, locale);

  const nav: Array<{id: SectionId; label: string}> = [
    {id: 'home', label: t('home')},
    {id: 'projects', label: t('projects')},
    {id: 'about', label: t('about')},
    {id: 'contact', label: t('contact')}
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link
          href={`${base}#home`}
          className="rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-neutral-900 hover:bg-neutral-100"
        >
          Gachuz
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={`${base}#${item.id}`}
              className="rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Móvil: menú simple (opcional) */}
          <div className="md:hidden">
            <Link
              href={`${base}#projects`}
              className="rounded-xl bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              {t('projects')}
            </Link>
          </div>

          <LocaleSwitch />
        </div>
      </div>
    </header>
  );
}
