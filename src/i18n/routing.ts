export const routing = {
  locales: ['es', 'en'] as const,
  defaultLocale: 'es' as const
};

export type AppLocale = (typeof routing.locales)[number];
