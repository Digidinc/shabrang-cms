import { getArchetypes, matchesPerspectiveView, type PerspectiveView } from '@/lib/content';
import { ArchetypesGridClient, type ArchetypesGridItem } from '@/components/pages/ArchetypesGridClient';

export function ArchetypesIndex({
  lang,
  basePath,
  view,
  embedded = false,
}: {
  lang: string;
  basePath: string;
  view: PerspectiveView;
  embedded?: boolean;
}) {
  const archetypes = getArchetypes(lang)
    .filter((t) => matchesPerspectiveView(t.frontmatter.perspective, view))
    .sort((a, b) => (b.frontmatter.date || '').localeCompare(a.frontmatter.date || ''));

  const items: ArchetypesGridItem[] = archetypes.map((t) => {
    const fm = t.frontmatter;
    const answersCount = Array.isArray(fm.answers) ? fm.answers.length : undefined;
    return {
      id: fm.id,
      title: fm.title,
      question: fm.question,
      shortAnswer: fm.short_answer,
      abstract: fm.abstract,
      date: fm.date,
      href: `${basePath}/archetypes/${fm.id}`,
      tags: fm.tags || [],
      answersCount,
    };
  });

  const content = (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl font-light text-frc-gold tracking-tight">Archetypes</h1>
          <div className="h-px flex-1 bg-gradient-to-r from-frc-blue to-transparent" />
        </div>
        <p className="text-frc-text-dim max-w-2xl leading-relaxed">
          Questions, summaries, and spectrum views: authority citations, FRC answers, and multiple perspectives.
        </p>
      </header>

      {archetypes.length === 0 ? (
        <section className="border border-frc-blue rounded-lg p-6 text-sm text-frc-text-dim">
          No archetypes yet.
        </section>
      ) : (
        <ArchetypesGridClient items={items} />
      )}
    </div>
  );

  if (embedded) return content;
  return <main>{content}</main>;
}

