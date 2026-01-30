import { getLanguages } from '@/lib/content';
import { ShabrangHome } from '@/components/pages/ShabrangHome';

export function generateStaticParams() {
  return getLanguages().map(lang => ({ lang }));
}

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function ContentHub({ params }: Props) {
  const { lang } = await params;
  return <ShabrangHome lang={lang} />;
}
