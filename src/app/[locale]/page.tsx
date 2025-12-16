import PageWrapper from '@/motion/page-wrapper';
import Hero from '@/components/hero/hero';
import {getFeaturedProjects} from '@/lib/content';
import type {Locale} from '@/content/types';
import ProjectsSection from '@/components/sections/projects-section';
import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  const featured = getFeaturedProjects();

  return (
    <PageWrapper>
      <Hero />
      <ProjectsSection locale={locale} items={featured} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </PageWrapper>
  );
}
