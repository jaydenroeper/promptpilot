# Tasks — PromptPilot MVP

## Fase 1 — Types & data fundament

- [ ] **T-01** Maak `types/index.ts` met alle interfaces en union types
- [ ] **T-02** Maak `data/audiences.ts` met 3 doelgroepen (student, young-professional, parent)
- [ ] **T-03** Maak `data/platforms.ts` met 3 platforms (instagram, linkedin, tiktok)
- [ ] **T-04** Maak `data/tones.ts` met 4 tones (informative, inspiring, playful, professional)
- [ ] **T-05** Maak `data/frameworks.ts` met 6 frameworks + beschrijving + badge
- [ ] **T-06** Maak `data/promptLibrary.ts` met 6 prompt templates (één per framework)
- [ ] **T-07** Maak `data/examples.ts` met minimaal 9 pre-written content combinaties

## Fase 2 — Content generatie logica

- [ ] **T-08** Maak `lib/generateContent.ts` met `generateContent()` functie
  - exact match lookup in examples
  - fallback op template-invulling
  - retourneert `GeneratedResult`

## Fase 3 — UI componenten

- [ ] **T-09** Maak `components/CopyButton.tsx`
  - clipboard write
  - visuele "Gekopieerd!" feedback na click
- [ ] **T-10** Maak `components/HeroSection.tsx`
  - Naam "PromptPilot"
  - Tagline + 1-zin uitleg
- [ ] **T-11** Maak `components/FilterPanel.tsx`
  - 4 filter-groepen als klikbare cards/chips
  - Random-knop
  - Props: huidige waarden + onChange callbacks
- [ ] **T-12** Maak `components/ResultPanel.tsx`
  - Tabs: Post | Prompt | Uitleg
  - CopyButton per tab
  - Badge weergave
- [ ] **T-13** Maak `components/InsightsSection.tsx`
  - 5 inzicht-cards (statisch)
- [ ] **T-14** Maak `components/CompareMode.tsx` (bonus)
  - Framework-selector voor tweede kolom
  - Twee ResultPanel kolommen naast elkaar

## Fase 4 — Pagina samenstelling

- [ ] **T-15** Herschrijf `app/page.tsx`
  - State voor 4 filters
  - useMemo voor generateContent aanroep
  - Compare mode toggle
  - Secties in juiste volgorde
- [ ] **T-16** Update `app/layout.tsx`
  - Titel: "PromptPilot"
  - Description: "AI-gedreven social media content op maat"

## Fase 5 — Polish & demo-ready

- [ ] **T-17** Responsive check — mobile layout werkt, desktop is primair
- [ ] **T-18** Visuele consistentie — kleurpalet, spacing, typografie consistent
- [ ] **T-19** Random demo knop werkt correct
- [ ] **T-20** Alle 9 seed-combinaties tonen correcte output
- [ ] **T-21** `npm run build` slaagt zonder fouten

## Bonus (alleen als tijd over)

- [ ] **T-22** Compare mode volledig werkend
- [ ] **T-23** Score-badge animatie bij filter-wijziging
- [ ] **T-24** SDG-koppelingen subtiel verwerkt in InsightsSection

---

## Volgorde van uitvoering
T-01 → T-07 → T-08 → T-09 → T-10 → T-11 → T-12 → T-13 → T-15 → T-16 → T-17 → T-18 → T-19 → T-20 → T-21

Bonus: T-14 → T-22 → T-23 → T-24
