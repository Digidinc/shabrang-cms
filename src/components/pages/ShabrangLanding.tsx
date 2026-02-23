import Link from 'next/link';
import Image from 'next/image';
import { getGlossary } from '@/lib/content';
import type { PerspectiveView } from '@/lib/content';

const LEVELS = [
  { level: 1, title: 'Roots', theme: 'Geography', slug: 'the-hollow-fortress', icon: '⛰️' },
  { level: 2, title: 'Rhythm', theme: 'Time', slug: 'calendar-of-resilience', icon: '⏳' },
  { level: 3, title: 'Fire', theme: 'Ethics', slug: 'apron-and-flag', icon: '🔥' },
  { level: 4, title: 'Map', theme: 'Reason', slug: 'master-of-logos', icon: '🧠' },
  { level: 5, title: 'Garden', theme: 'Image', slug: 'architect-of-light', icon: '🌹' },
  { level: 6, title: 'Story', theme: 'Myth', slug: 'mother-tongue', icon: '📖' },
  { level: 7, title: 'Sky', theme: 'Unity', slug: 'love-as-gravity', icon: '🌌' },
];

export async function ShabrangLanding({ lang }: { lang: string }) {
  const basePath = `/${lang}`;
  
  return (
    <main className="min-h-screen bg-frc-void text-frc-text font-serif">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-frc-void/80 via-frc-void/60 to-frc-void z-10" />
          <Image
            src="/images/landing/hero_bg.png"
            alt="The Liquid Fortress"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl animate-fade-up">
          <div className="mb-8 flex justify-center">
            <Image src="/brand/shabrang-64.png" alt="Shabrang" width={80} height={80} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-frc-gold tracking-widest mb-6 font-cinzel">
            THE LIQUID FORTRESS
          </h1>
          
          <p className="text-xl md:text-2xl text-frc-text-dim italic mb-12 font-garamond">
            A Structural History of the Persian Mind
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href={`${basePath}/books/the-liquid-fortress/chapter/chapter1`}
              className="px-8 py-4 bg-frc-gold text-frc-void font-bold tracking-widest hover:bg-white transition-colors uppercase text-sm"
            >
              Start Reading
            </Link>
            <Link
              href="#thesis"
              className="px-8 py-4 border border-frc-gold text-frc-gold font-bold tracking-widest hover:bg-frc-gold/10 transition-colors uppercase text-sm"
            >
              The Core Thesis
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce text-frc-gold/50">
          ↓
        </div>
      </section>

      {/* The Paradox Section */}
      <section id="thesis" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light text-frc-gold mb-8 tracking-wide uppercase">The Graveyard of Empires</h2>
        <p className="text-lg text-frc-text-dim leading-relaxed mb-8">
          Why did Persia survive Alexander, the Arabs, and the Mongols—when Babylon, Assyria, and Egypt vanished?
        </p>
        <p className="text-lg text-frc-text leading-relaxed">
          This is not a question of military might. It is a question of <span className="text-frc-gold">systems architecture</span>.
          Most ancient cultures were Stone Fortresses—heavy on political power, brittle when that power broke.
          Persia built a <strong>Liquid Fortress</strong>.
        </p>
      </section>

      {/* The 7 Levels Grid */}
      <section className="py-24 bg-frc-void-light border-y border-frc-blue/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-frc-gold mb-4 tracking-wide uppercase">The Ladder of Consciousness</h2>
            <p className="text-frc-text-dim">The 7 Layers of Vertical Migration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEVELS.map((item) => (
              <Link 
                key={item.level} 
                href={`${basePath}/blog/${item.slug}`}
                className="group p-6 border border-frc-blue/30 hover:border-frc-gold transition-colors bg-frc-void hover:bg-frc-void-light relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-frc-steel uppercase tracking-widest">Level {item.level}</span>
                <h3 className="text-xl text-frc-gold mt-2 mb-1 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                <p className="text-sm text-frc-text-dim">{item.theme}</p>
              </Link>
            ))}
            
            {/* 8th Card: The Book */}
            <Link 
              href={`${basePath}/books/the-liquid-fortress`}
              className="group p-6 border border-frc-gold bg-frc-gold/5 hover:bg-frc-gold/10 transition-colors flex flex-col justify-center items-center text-center"
            >
              <span className="text-3xl mb-2">📚</span>
              <h3 className="text-xl text-frc-gold font-bold">Read the Book</h3>
              <p className="text-sm text-frc-text-dim">Full 30 Chapters</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Media & Art */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light text-frc-gold mb-6 tracking-wide uppercase">The Art</h2>
            <p className="text-frc-text-dim mb-8 leading-relaxed">
              Explore the visual language of the Liquid Fortress. A collection of maps, diagrams, and Persian miniature-style renderings of the core concepts.
            </p>
            <Link 
              href={`${basePath}/art`}
              className="inline-block px-8 py-3 border border-frc-blue text-frc-text hover:text-frc-gold hover:border-frc-gold transition-colors uppercase text-sm tracking-widest"
            >
              Enter the Gallery
            </Link>
          </div>
          <div className="relative h-64 md:h-96 bg-frc-void-light border border-frc-blue/30 p-2">
             <div className="absolute inset-0 bg-[url('/images/landing/poster.png')] bg-cover bg-center opacity-60 hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </section>
    </main>
  );
}
