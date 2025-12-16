'use client';

import * as React from 'react';
import type {Locale} from '@/content/types';
import type {Project} from '@/content/types';
import ProjectGrid from './project-grid';
import ProjectsFilter from './projects-filter';

export default function ProjectsList({
  items,
  locale,
  tFilterLabel,
  tAll
}: {
  items: Project[];
  locale: Locale;
  tFilterLabel: string;
  tAll: string;
}) {
  const stacks = React.useMemo(() => {
    const set = new Set<string>();
    for (const p of items) for (const s of p.stack) set.add(s);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const [selected, setSelected] = React.useState('');

  const filtered = React.useMemo(() => {
    if (!selected) return items;
    return items.filter((p) => p.stack.includes(selected));
  }, [items, selected]);

  return (
    <div>
      <div className="mb-4">
        <div className="mb-2 text-sm font-medium text-neutral-700">{tFilterLabel}</div>
        <ProjectsFilter stacks={stacks} value={selected} onChange={setSelected} allLabel={tAll} />
      </div>

      <ProjectGrid projects={filtered} locale={locale} />
    </div>
  );
}
