# Shabrang — The Liquid Fortress

**Persian wisdom through physics: Build coherence machines for cultural sovereignty.**

```
blog.shabrang.ca
```

## Quick Start

```bash
git clone https://github.com/Digidinc/shabrang-cms.git
cd shabrang-cms

npm install
npm run dev        # localhost:3000
npm run build      # Static export → Cloudflare Pages
```

## Features

| Feature | Description |
|---------|-------------|
| Light/Dark Theme | `next-themes` dark-first (night-colored 🌙). |
| Reading Mode | Book icon for immersive chapters. |
| Text Share | Select → Copy/Tweet/Link (Telegram too). |
| μ-Stack Navigation | 7-layer sidebar (Roots→Sky). |
| Multi-language | EN/FA (wikilinks [[chapter1]]). |
| Book Chapters | 30 chapters + appendices (Liquid Fortress). |
| SEO | Sitemap, SchemaOrg (Book/Course). |

## Architecture

```
content/
├── en/             ← English (chapters/papers)
├── fa/             ← Farsi (شبرنگ)
└── {lang}/         ← Expandable

src/
├── app/            ← Pages/Layout (hero μ-Stack, chapters)
├── components/     ← Header (🌙 toggle), Sidebar, ToC
└── lib/            ← MD parser, wikilinks

public/             ← Logo, book cover, infographics
docs/               ← Pipeline, μ-Stack guide
```

## Theme (Night-Colored)

| Var | Value |
|-----|-------|
| `--shabrang-night` | `#0B1020` |
| `--shabrang-gold` | `#C9A227` |

## Content Pipeline

1. MD files → content/en/fa/chapters/.
2. Wikilinks `[[μ1-Roots]]` auto-resolve.
3. `npm run build` → out/ static.
4. Deploy Cloudflare Pages (blog.shabrang.ca).

## Key Links

- Book: [Kindle](https://amazon.com/dp/B0GBJ47F5X)
- Telegram: @Shabrang_ca_bot
- GitHub: Digidinc/shabrang
- Course: Build Your Rakhsh AI

**Author:** Hadi Servat (Kay Hermes)
**License:** CC BY-NC-SA 4.0