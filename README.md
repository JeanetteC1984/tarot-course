# ✦ The Fearless Tarot Course ✦

A complete, mystical Tarot Learning Course website built with **Astro** and **Tailwind CSS**.

## 🌙 Features

- **7 Complete Learning Modules** — From foundations to reading for others
- **Card of the Day** — Interactive card randomizer with 3D flip animation
- **78-Card Tarot Reference** — All Major & Minor Arcana with meanings and reflections
- **Progress Tracking** — localStorage-based completion tracking with badges
- **10 Worksheets** — Guided journaling prompts for each module
- **Tarot Bingo** — Interactive 5×5 bingo card with challenge tasks
- **Animated Star Field** — Twinkling star background with CSS animations
- **Moon Phase Display** — Dynamic moon phase based on current date
- **Responsive Design** — Mobile-first layout with hamburger navigation

## 🎨 Design

| Token | Value | Use |
|---|---|---|
| Background | `#0D0D1A` Deep Midnight | Page background |
| Primary | `#C0C0C0` Silver / `#2D2D2D` Charcoal | Borders, UI |
| Accent | `#7B68EE` Mystic Violet | Glows, links |
| Accent | `#00CED1` Electric Teal | Highlights |
| Highlight | `#FF69B4` Hot Pink | Badges, CTAs |
| Text | `#F0F0F0` Soft Silver-White | Body text |

**Fonts:** UnifrakturMaguntia (headings) · Dancing Script (body) · MedievalSharp (UI accents)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd tarot-course

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
tarot-course/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BadgeGrid.astro
│   │   ├── BingoCard.astro
│   │   ├── CardOfTheDay.astro
│   │   ├── Footer.astro
│   │   ├── ModuleCompleteButton.astro
│   │   ├── MoonPhase.astro
│   │   ├── Navigation.astro
│   │   ├── ProgressTracker.astro
│   │   └── StarField.astro
│   ├── data/
│   │   ├── bingo-tasks.json
│   │   ├── modules.json
│   │   └── tarot-deck.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── bingo.astro
│   │   ├── card-of-the-day.astro
│   │   ├── progress.astro
│   │   ├── worksheets.astro
│   │   └── modules/
│   │       ├── 1-fools-leap.astro
│   │       ├── 2-major-arcana.astro
│   │       ├── 3-minor-arcana.astro
│   │       ├── 4-court-cards.astro
│   │       ├── 5-spreads.astro
│   │       ├── 6-fearless-reading.astro
│   │       └── 7-read-for-others.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## 🔮 The 7 Modules

| # | Title | Topic |
|---|---|---|
| 1 | The Fool's Leap | Introduction & Foundations |
| 2 | Archetypes of the Soul | The Major Arcana |
| 3 | The Four Sacred Suits | The Minor Arcana |
| 4 | The Royal Court | Court Cards Deep Dive |
| 5 | Weaving the Web | Spreads & Layouts |
| 6 | The Fearless Reader | Intuitive Reading Mastery |
| 7 | Reading for Others | Ethics, Practice & Sharing |

## ⚡ Tech Stack

- [Astro](https://astro.build) v4 — Static site framework
- [Tailwind CSS](https://tailwindcss.com) v3 — Utility-first styling
- [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/) — Astro/Tailwind integration
- Vanilla JavaScript — Interactive components (no framework dependencies)
- localStorage — Client-side progress & bingo state persistence

## 📜 License

For educational use. Tarot is a tool for self-reflection — not fortune-telling.

---

*"Trust your first impression. That feeling is where the real reading lives."*
The Fearless Tarot — A modular, interactive tarot learning course
