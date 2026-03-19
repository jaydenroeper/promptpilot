# Structure

## Root
Configuratie en project-wide docs in de root. Geen applicatiecode hier.

## /app
App Router structuur. Één route voor de MVP (`app/page.tsx`). Layout in `app/layout.tsx`.

## /components
UI-componenten gegroepeerd per verantwoordelijkheid:
- `HeroSection` — titel + tagline
- `FilterPanel` — keuzes voor audience / platform / tone / framework
- `ResultPanel` — tabs: Post | Prompt | Uitleg
- `InsightsSection` — promptinzichten als cards
- `CompareMode` — twee frameworks naast elkaar (optioneel)
- `CopyButton` — copy-to-clipboard helper

## /lib
Pure TypeScript logica zonder React:
- `generateContent.ts` — selecteert en vult prompt templates in
- `selectPrompt.ts` — kiest juiste template op basis van filters

## /data
Seed-data als TypeScript exports:
- `audiences.ts`
- `platforms.ts`
- `tones.ts`
- `frameworks.ts`
- `promptLibrary.ts` — de 6 herbruikbare prompt templates
- `examples.ts` — pre-written demo output per (audience × platform × tone × framework)

## /types
Gedeelde TypeScript interfaces en types (`index.ts`).

## /.ai
Agent context: product intent, technische constraints, structuur en workflow-regels.

## Specs
Specs in `.ai/specs/<feature>/` met:
- `requirements.md`
- `plan.md`
- `tasks.md`
