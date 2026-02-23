import type { Metadata } from 'next';
import { getLanguages } from '@/lib/content';
import { ArchetypesIndex } from '@/components/pages/ArchetypesIndex';
import { ArchetypesSidebar } from '@/components/ArchetypesSidebar';

export const metadata: Metadata = {
  title: 'Archetypes',
  description: 'Questions, summaries, and spectrum views across the Fractal Resonance Cognition corpus.',
};

export function generateStaticParams() {
  return getLanguages().map((lang) => ({ lang }));
}

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function ArchetypesPage({ params }: Props) {
  const { lang } = await params;
  const basePath = `/${lang}`;

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <ArchetypesSidebar lang={lang} basePath={basePath} view="kasra" variant="mobile" />
      <ArchetypesSidebar lang={lang} basePath={basePath} view="kasra" />
      <div className="flex-1 min-w-0">
        <ArchetypesIndex lang={lang} basePath={basePath} view="kasra" embedded />
      </div>
    </main>
  );
}

