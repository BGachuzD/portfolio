export type Locale = 'es' | 'en';

export type Localized<T> = Record<Locale, T>;

export type ProjectLinkType = 'website' | 'repo' | 'demo' | 'caseStudy';

export type ProjectLink = {
  type: ProjectLinkType;
  label: string;
  href: string;
};

export type Project = {
  slug: string;              // unique id para URL
  featured?: boolean;        // para home
  name: string;              // nombre del proyecto (marca)
  summary: Localized<string>;
  role: Localized<string>;
  highlights: Localized<string[]>;
  stack: string[];           // tags simples para filtros
  links?: ProjectLink[];
  timeframe?: {
    start: string; // 'YYYY-MM'
    end?: string;  // 'YYYY-MM' o undefined si actual
  };
};
