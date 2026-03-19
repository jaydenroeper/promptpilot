# Tech

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4

## Principes
- Simplicity over completeness
- MVP first — demo-waarde boven volledigheid
- Minimale dependencies — niets toevoegen wat niet nodig is
- Leesbare code — korte comments waar keuzes niet vanzelfsprekend zijn

## Architectuur
Single-page Next.js app. Alle interactie draait client-side met React state. Geen route handlers of server actions nodig voor MVP.

## State & Data
- Alle UI-state via `useState` in de root page component
- Seed-data in `/data/` als TypeScript-objecten (geen JSON-bestanden)
- Geen database, geen externe API-calls voor MVP

## AI-integratie strategie
- Fase 1 (MVP): gesimuleerde output via template-matching op (audience × platform × tone × framework)
- Fase 2 (optioneel): echte Claude/OpenAI-integratie via een dunne service layer in `lib/ai.ts`
- Prompt templates komen altijd uit `data/promptLibrary.ts` — nooit hardcoded strings in componenten

## Content generatie logica
```
selectContent(audience, platform, tone, framework)
  → kiest prompt template uit promptLibrary
  → vult template variabelen in
  → retourneert { post, prompt, frameworkExplanation, whyItWorks }
```

## Folder conventies
- `app/` — routes en layouts
- `components/` — herbruikbare UI-componenten
- `lib/` — pure logica (geen React)
- `data/` — seed-data en prompt-bibliotheek
- `types/` — gedeelde TypeScript types
