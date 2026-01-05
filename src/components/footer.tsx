// src/components/footer.tsx
import { getTranslations } from "next-intl/server";
import type { Locale } from '@/content/types';
import Link from 'next/link';

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'nav' });
  
  return (
    <footer className="mt-20 border-t border-neutral-100 bg-neutral-50/50 py-16 dark:border-neutral-900 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* Info Principal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tighter text-neutral-950 dark:text-white">
              Gachuz Portafolio
            </h3>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xs">
              {locale === 'es' 
                ? 'Construyendo experiencias digitales con enfoque en diseño limpio y performance.' 
                : 'Building digital experiences with a focus on clean design and performance.'}
            </p>
          </div>

          {/* Navegación Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-6">
              {locale === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              {['home', 'projects', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item}`} 
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                  >
                    {t(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Estado / Disponibilidad */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white mb-6">
              {locale === 'es' ? 'Estado' : 'Status'}
            </h4>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {locale === 'es' ? 'DISPONIBLE PARA PROYECTOS' : 'AVAILABLE FOR PROJECTS'}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-neutral-200 pt-8 text-center dark:border-neutral-900">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            © {new Date().getFullYear()} — {locale === 'es' ? 'Hecho con' : 'Made with'} 
            <span className="mx-1 text-red-500">✦</span> 
            {locale === 'es' ? 'por' : 'by'} Gachuz
          </p>
        </div>
      </div>
    </footer>
  );
}