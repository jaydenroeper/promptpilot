# Wizard Flow + Persona Systeem — Tasks

## Fase 1: Types & Data
- [ ] Update `types/index.ts` met Persona types, verwijder oude types
- [ ] Maak `data/personas.ts` met 3 persona configs
- [ ] Verwijder `data/audiences.ts`, `data/platforms.ts`, `data/tones.ts`
- [ ] Check `data/frameworks.ts` op "mode" referenties

## Fase 2: Prompt Templates & API
- [ ] Herschrijf `data/promptLibrary.ts` met persona-aware placeholders
- [ ] Update `app/api/generate/route.ts` voor persona-based requests

## Fase 3: Wizard Componenten
- [ ] Maak `components/WizardStepIndicator.tsx`
- [ ] Maak `components/PersonaStep.tsx`
- [ ] Maak `components/FrameworkStep.tsx`
- [ ] Maak `components/OutputStep.tsx`

## Fase 4: Wizard State
- [ ] Herschrijf `app/page.tsx` met wizard state machine

## Fase 5: Cleanup
- [ ] Verwijder `components/FilterPanel.tsx`
- [ ] Update `components/TopBar.tsx`

## Fase 6: Verificatie
- [ ] `npm run build` zonder errors
- [ ] Test volledige flow (3 stappen)
- [ ] Test navigatie (terug/opnieuw)
- [ ] Test responsive layout
