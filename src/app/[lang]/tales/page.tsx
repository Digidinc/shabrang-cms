import type { Metadata } from 'next';
import { getLanguages } from '@/lib/content';
import { TalesIndex } from '@/components/pages/TalesIndex';
import { TalesSidebar } from '@/components/TalesSidebar';

export const metadata: Metadata = {
  title: 'Tales',
  description: 'Down-to-earth notes and field reports from the Fractal Resonance Cognition project.',
};

export function generateStaticParams() {
  return getLanguages().map((lang) => ({ lang }));
}

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function TalesPage({ params }: Props) {
  const { lang } = await params;
  const basePath = `/${lang}`;

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      <TalesSidebar lang={lang} basePath={basePath} view="kasra" variant="mobile" />
      <TalesSidebar lang={lang} basePath={basePath} view="kasra" />
      <div className="flex-1 min-w-0">
        <TalesIndex lang={lang} basePath={basePath} view="kasra" embedded />
      </div>
    </main>
  );
}

