# Wizard Flow + Persona Systeem — Tasks

## Fase 1: Types & Data

- [ ] `types/index.ts` — verwijder `AudienceId`, `PlatformId`, `ToneId`, `Audience`, `Platform`, `Tone`; voeg `PersonaId`, `ContentRules`, `Persona` toe; update `GenerateRequest` (vervang 3 losse ids door `personaId`)
- [ ] `data/personas.ts` — nieuw bestand, 3 persona-objecten exact conform de JSON config in requirements
- [ ] Verwijder `data/audiences.ts`, `data/platforms.ts`, `data/tones.ts`
- [ ] `data/frameworks.ts` — vervang "mode" door "framework" waar van toepassing

## Fase 2: Prompt Templates & API

- [ ] `data/promptLibrary.ts` — herschrijf alle 6 templates met persona-placeholders (`{{persona_name}}`, `{{platform}}`, `{{tone}}`, `{{style}}`, `{{pain_points}}`, `{{avoid}}`, `{{topic}}`)
- [ ] `app/api/generate/route.ts` — vervang audience/platform/tone lookups door persona-lookup; bouw vars-object met volledige persona-context

## Fase 3: Wizard Componenten

- [ ] `components/WizardStepIndicator.tsx` — 3-stap visuele indicator, prop: `currentStep: 1 | 2 | 3`
- [ ] `components/PersonaStep.tsx` — 3 persona-kaarten + topic input + "Volgende" knop
- [ ] `components/FrameworkStep.tsx` — 6 framework-kaarten + "Terug" + "Genereer" knoppen
- [ ] `components/OutputStep.tsx` — wraps `ResultPanel` + "Terug" + "Opnieuw" knoppen

## Fase 4: Wizard State

- [ ] `app/page.tsx` — herschrijf naar wizard state machine (step 1/2/3, geen sidebar meer, centered layout)

## Fase 5: Cleanup

- [ ] Verwijder `components/FilterPanel.tsx`
- [ ] `components/TopBar.tsx` — verwijder verwijzingen naar random/filter als aanwezig

## Fase 6: Verificatie

- [ ] `npm run build` zonder errors
- [ ] Test volledige flow (stap 1 → 2 → 3)
- [ ] Test terugnavigatie (stap 3 → 2 → 1)
- [ ] Test "Opnieuw" (reset naar stap 1)
- [ ] Test responsive layout (mobiel + desktop)
