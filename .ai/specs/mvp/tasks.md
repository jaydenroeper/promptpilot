# Tasks — PromptPilot MVP

## Fase 1 — Types & data

- [ ] **T-01** Maak `types/index.ts` — alle interfaces en union types
- [ ] **T-02** Maak `data/audiences.ts` — 3 doelgroepen
- [ ] **T-03** Maak `data/platforms.ts` — 3 platforms
- [ ] **T-04** Maak `data/tones.ts` — 4 tones
- [ ] **T-05** Maak `data/frameworks.ts` — 6 frameworks met beschrijving
- [ ] **T-06** Maak `data/promptLibrary.ts` — 6 prompt templates (één per framework)

## Fase 2 — API route

- [ ] **T-07** Installeer `openai` package: `npm install openai`
- [ ] **T-08** Maak `.env.local` met placeholder `OPENAI_API_KEY=`
- [ ] **T-09** Maak `app/api/generate/route.ts`
  - Valideer `GenerateRequest` body
  - Selecteer prompt template uit promptLibrary
  - Vul placeholders in
  - Roep `gpt-4o-mini` aan
  - Retourneer `GenerateResponse`

## Fase 3 — UI componenten

- [ ] **T-10** Maak `components/CopyButton.tsx` — clipboard + feedback
- [ ] **T-11** Maak `components/HeroSection.tsx` — titel + tagline
- [ ] **T-12** Maak `components/FilterPanel.tsx`
  - 4 filter-groepen als klikbare chips
  - "Genereer" knop met loading state
  - "Random" knop
- [ ] **T-13** Maak `components/ResultPanel.tsx`
  - Loading skeleton
  - Tabs: Post | Prompt | Uitleg
  - CopyButton per tab

## Fase 4 — Pagina samenstelling

- [ ] **T-14** Herschrijf `app/page.tsx`
  - State: filters + result + loading
  - Fetch naar `/api/generate` bij klik
  - Secties: Hero → Filters → Result
- [ ] **T-15** Update `app/layout.tsx` — titel "PromptPilot"

## Fase 5 — Polish

- [ ] **T-16** Responsive check
- [ ] **T-17** `npm run build` slaagt zonder fouten

## Bonus

- [ ] **T-18** `components/CompareMode.tsx` — twee frameworks naast elkaar
- [ ] **T-19** Compare mode in `app/page.tsx`

---

## Uitvoervolgorde
T-01 → T-06 → T-07 → T-08 → T-09 → T-10 → T-11 → T-12 → T-13 → T-14 → T-15 → T-16 → T-17
Bonus: T-18 → T-19
