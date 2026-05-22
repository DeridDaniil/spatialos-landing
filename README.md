# SpatialOS

A premium, Apple-like **spatial computing concept landing page** — a calmer, deeper, and more natural way to interact with the digital world.

This is a **portfolio / concept project**: a self-contained frontend piece built to demonstrate refined UI craft — clean composition, soft motion, and considered typography in a fully responsive Vite + React app.

**URL**: https://spatialos-landing.vercel.app/

## Stack

- **React 18** + **TypeScript**
- **Vite** — build & dev tooling
- **React Router** — client-side routing
- **Tailwind CSS** — design tokens and layout
- **Framer Motion** — reveal animations and micro-interactions
- **Lucide React** — iconography

## Features

- Multi-section landing page: Header, Hero, Vision, Spatial Interface, Experience, Use Cases, Design, Privacy, Final CTA, Footer
- Fully responsive design — desktop, tablet, and mobile, with no horizontal scroll
- Legal pages — Privacy Policy and Terms of Use, sharing the site's design language
- Custom SVG favicon
- Vercel routing support via `vercel.json` rewrite for client-side routes
- All visuals built with CSS, gradients, and inline SVG — no heavy assets
- No backend, no auth, no payments, no 3D libraries

## Routes

| Path       | Page           |
| ---------- | -------------- |
| `/`        | Landing page   |
| `/privacy` | Privacy Policy |
| `/terms`   | Terms of Use   |

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

## Deployment

The build outputs static assets to `dist/` and deploys to any static host. On
**Vercel**, `vercel.json` rewrites all paths to `index.html`, so `/privacy` and
`/terms` resolve correctly when opened directly or refreshed.

## Project structure

```
public/
  favicon.svg
src/
  components/
    Header.tsx
    Hero.tsx
    SectionHeading.tsx
    VisionSection.tsx
    SpatialInterfaceSection.tsx
    ExperienceSection.tsx
    UseCasesSection.tsx
    DesignSection.tsx
    PrivacySection.tsx
    FinalCTA.tsx
    Footer.tsx
    LegalLayout.tsx
    ScrollToTop.tsx
  pages/
    Home.tsx
    PrivacyPolicy.tsx
    TermsOfUse.tsx
  data/
    sections.ts
  lib/
    scroll.ts
  App.tsx
  main.tsx
  index.css
vercel.json
```

## Portfolio purpose

A self-contained concept piece — no backend, authentication, CMS, or payments.
Every visual (interface mockups, charts, ambient environments) is created with
HTML, CSS, gradients, and inline SVG, showing how far refined frontend craft can
carry a product story without heavyweight assets or 3D libraries.

## Описание на русском

SpatialOS — это портфолио-проект в формате премиального Apple-like landing page
о будущем пространственных вычислений. Проект представляет концепт интерфейса, в
котором приложения, контент и рабочие процессы существуют не только внутри
экрана, а в окружающем пользователя цифровом пространстве.

Цель проекта — показать навыки создания современного frontend-лендинга с чистой
архитектурой, адаптивной версткой, аккуратной типографикой, мягкими анимациями и
визуальным стилем premium product page.

Проект реализован как frontend-only приложение без backend, авторизации,
платежей, CMS и 3D-библиотек. Все визуальные элементы созданы средствами CSS,
SVG, gradients, glassmorphism-эффектов и компонентной структуры React.

**Основные особенности:**

- светлый Apple-like premium design;
- адаптивная верстка для desktop, tablet и mobile;
- landing page с несколькими продуктовыми секциями;
- страницы Privacy Policy и Terms of Use;
- SVG favicon;
- поддержка client-side routing для деплоя на Vercel;
- чистая структура компонентов.

**Стек:** React, TypeScript, Vite, React Router, Tailwind CSS, Framer Motion,
Lucide React.
