import type {Locale, Project} from '@/content/types';
import {projects} from '@/content/projects';

export function getProjects(): Project[] {
  return projects.slice();
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function localizeProject(project: Project, locale: Locale) {
  return {
    ...project,
    summary: project.summary[locale],
    role: project.role[locale],
    highlights: project.highlights[locale]
  };
}
