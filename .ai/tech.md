# Tech

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- OpenAI SDK (`openai` npm package)

## Principes
- Simplicity over completeness
- MVP first — demo-waarde boven volledigheid
- Minimale dependencies
- Leesbare code

## Architectuur
Single-page Next.js app. Filters zijn client-side state. AI-aanroep gaat via een Next.js Route Handler (`app/api/generate/route.ts`) zodat de API key server-side blijft.

## Environment
```
OPENAI_API_KEY=sk-...
```
Zet dit in `.env.local` (nooit committen).

## AI-integratie
- Model: `gpt-4o-mini` (snel en goedkoop voor demo)
- Aanroep via `openai` SDK in de route handler
- Prompt templates komen uit `data/promptLibrary.ts` — nooit hardcoded strings in componenten
- Route handler: `POST /api/generate` ontvangt `{ audience, platform, tone, framework }`, bouwt de prompt, roept OpenAI aan, retourneert `{ post, prompt, frameworkExplanation }`

## Content generatie flow
```
client: FilterPanel → POST /api/generate
server: selecteer template uit promptLibrary
        → vul variabelen in
        → stuur naar OpenAI
        → retourneer { post, prompt, frameworkExplanation }
client: toon in ResultPanel
```

## State & Data
- UI-state via `useState` in de root page component
- Seed-data in `data/` als TypeScript-objecten
- Geen database

## Folder conventies
- `app/` — routes en layouts
- `app/api/generate/` — route handler voor OpenAI
- `components/` — herbruikbare UI-componenten
- `lib/` — pure logica (geen React, geen API calls)
- `data/` — prompt-bibliotheek en config
- `types/` — gedeelde TypeScript types
