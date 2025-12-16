'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

export default function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function setLocale(nextLocale: 'es' | 'en') {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const nextPath = segments.join('/') || `/${nextLocale}`;
    router.push(nextPath);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        className={`rounded-md px-3 py-1 text-sm ${locale === 'es' ? 'bg-neutral-900 text-white' : 'bg-neutral-100'}`}
        onClick={() => setLocale('es')}
        type="button"
      >
        ES
      </button>
      <button
        className={`rounded-md px-3 py-1 text-sm ${locale === 'en' ? 'bg-neutral-900 text-white' : 'bg-neutral-100'}`}
        onClick={() => setLocale('en')}
        type="button"
      >
        EN
      </button>
    </div>
  );
}
