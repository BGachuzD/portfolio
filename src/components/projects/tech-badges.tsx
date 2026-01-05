import * as React from 'react';

const techStyles: Record<string, string> = {
  React: "hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-200 dark:hover:border-sky-800",
  Nextjs: "hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 hover:border-neutral-900 dark:hover:border-white",
  Tailwind: "hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-200 dark:hover:border-cyan-800",
  TypeScript: "hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800",
  Framer: "hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-200 dark:hover:border-purple-800",
  Firebase: "hover:bg-yellow-50 dark:hover:bg-yellow-900/30 hover:text-yellow-600 dark:hover:text-yellow-400 hover:border-yellow-200 dark:hover:border-yellow-800",
};

export default function TechBadges({ stack }: { stack: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {stack.map((tech) => {
        // Buscamos si tenemos un estilo personalizado para esta tech
        const customStyle = techStyles[tech] || "hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100";

        return (
          <span
            key={tech}
            className={`
              inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 
              bg-neutral-50/50 dark:bg-neutral-900/50 px-2.5 py-1 
              text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400
              transition-all duration-200 ease-out select-none
              ${customStyle}
            `}
          >
            {/* Pequeño punto decorativo que cambia de color en hover */}
            <span className="mr-1.5 h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-current" />
            {tech}
          </span>
        );
      })}
    </div>
  );
}