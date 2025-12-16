'use client';

import * as React from 'react';

export default function ProjectsFilter({
  stacks,
  value,
  onChange,
  allLabel
}: {
  stacks: string[];
  value: string;
  onChange: (next: string) => void;
  allLabel: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => onChange('')}
        className={`rounded-full px-3 py-1 text-sm ${
          value === '' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'
        }`}
      >
        {allLabel}
      </button>

      {stacks.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          className={`rounded-full px-3 py-1 text-sm ${
            value === s ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-800'
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
