# Tasks — PromptPilot MVP

## Fase 1 — Types & data

- [x] **T-01** Maak `types/index.ts` — alle interfaces en union types
- [x] **T-02** Maak `data/audiences.ts` — 3 doelgroepen
- [x] **T-03** Maak `data/platforms.ts` — 3 platforms
- [x] **T-04** Maak `data/tones.ts` — 4 tones
- [x] **T-05** Maak `data/frameworks.ts` — 6 frameworks met beschrijving
- [x] **T-06** Maak `data/promptLibrary.ts` — 6 prompt templates (één per framework)

## Fase 2 — API route

- [x] **T-07** Installeer `openai` package: `npm install openai`
- [x] **T-08** Maak `.env.local` met placeholder `OPENAI_API_KEY=`
- [x] **T-09** Maak `app/api/generate/route.ts`

## Fase 3 — UI componenten

- [x] **T-10** Maak `components/CopyButton.tsx`
- [x] **T-11** Maak `components/HeroSection.tsx`
- [x] **T-12** Maak `components/FilterPanel.tsx`
- [x] **T-13** Maak `components/ResultPanel.tsx`

## Fase 4 — Pagina samenstelling

- [x] **T-14** Herschrijf `app/page.tsx`
- [x] **T-15** Update `app/layout.tsx` — titel "PromptPilot"

## Fase 5 — Polish

- [x] **T-16** Responsive check
- [x] **T-17** `npm run build` slaagt zonder fouten ✓

## Bonus

- [ ] **T-18** `components/CompareMode.tsx` — twee frameworks naast elkaar
- [ ] **T-19** Compare mode in `app/page.tsx`

---

## Uitvoervolgorde
T-01 → T-06 → T-07 → T-08 → T-09 → T-10 → T-11 → T-12 → T-13 → T-14 → T-15 → T-16 → T-17
Bonus: T-18 → T-19
