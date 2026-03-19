# Wizard Flow + Persona Systeem — Plan

## Aanpak

Stap-voor-stap, zodat de app na elke fase werkend blijft.

## Fase 1: Types & Data

**Doel:** Nieuwe datastructuur klaarzetten, oude opruimen.

1. `types/index.ts` — verwijder `AudienceId`, `PlatformId`, `ToneId`, `Audience`, `Platform`, `Tone`.
   Voeg toe: `PersonaId`, `Persona` (met alle velden uit de config), `ContentRules`.
   Update `GenerateRequest`: vervang `audienceId/platformId/toneId` door `personaId`.
   Update `PromptTemplate.template` comment: nieuwe placeholders.

2. `data/personas.ts` — nieuw bestand met de 3 persona-objecten (exact de JSON config).

3. Verwijder: `data/audiences.ts`, `data/platforms.ts`, `data/tones.ts`.

4. `data/frameworks.ts` — check op "mode" tekst, vervang door "framework".

## Fase 2: Prompt Templates & API

**Doel:** AI krijgt rijke persona-context ipv platte labels.

1. `data/promptLibrary.ts` — herschrijf alle 6 templates.
   Nieuwe placeholders: `{{persona_name}}`, `{{platform}}`, `{{tone}}`, `{{style}}`,
   `{{pain_points}}`, `{{avoid}}`, `{{topic}}`.

2. `app/api/generate/route.ts` — update `POST` handler:
   - Importeer `personas` ipv `audiences/platforms/tones`
   - Zoek persona op via `personaId`
   - Bouw `vars` object met volledige persona-velden
   - Verwijder imports van verwijderde data-bestanden

## Fase 3: Wizard Componenten

**Doel:** 3 nieuwe stap-componenten bouwen.

1. `components/WizardStepIndicator.tsx`
   - Props: `currentStep: 1 | 2 | 3`
   - Visuele indicator (3 cirkels / stappen)

2. `components/PersonaStep.tsx`
   - Props: `selectedPersona`, `topic`, `onPersonaSelect`, `onTopicChange`, `onNext`
   - 3 persona-kaarten (grid, 1 col mobiel / 3 col desktop)
   - Topic input
   - "Volgende" knop (disabled tot beide ingevuld)

3. `components/FrameworkStep.tsx`
   - Props: `selectedFramework`, `onFrameworkSelect`, `onBack`, `onGenerate`, `loading`
   - 6 framework-kaarten (hergebruik stijl uit FilterPanel)
   - "Terug" + "Genereer" knoppen

4. `components/OutputStep.tsx`
   - Props: `result`, `loading`, `onBack`, `onReset`
   - Wraps bestaande `ResultPanel`
   - "Terug" + "Opnieuw" knoppen

## Fase 4: Wizard State in page.tsx

**Doel:** Vervang flat-filter state door wizard state machine.

```
type WizardStep = 1 | 2 | 3

state:
  step: WizardStep
  selectedPersonaId: PersonaId | null
  topic: string
  selectedFrameworkId: FrameworkId
  result: GenerateResponse | null
  loading: boolean
  error: string | null
```

- Stap 1 → 2: `setStep(2)` na "Volgende"
- Stap 2 → 3: `handleGenerate()` dan `setStep(3)` na response
- Terug: `setStep(step - 1)`
- Reset: `setStep(1)`, clear result, optioneel clear persona/topic

Layout: geen sidebar meer. Centered wizard, max-w-2xl of max-w-4xl.

## Fase 5: Cleanup

1. Verwijder `components/FilterPanel.tsx`
2. Update `components/TopBar.tsx` — verwijder random knop als die daar zit

## Fase 6: Verificatie

1. `npm run build` — 0 errors
2. Test flow: stap 1 → 2 → 3
3. Test terugnavigatie
4. Test responsive layout

## Beslissingen

- `RandomButton` vervalt: wizard-flow heeft geen random meer nodig
- `ResultPanel` hergebruiken as-is via `OutputStep` wrapper
- Geen nieuwe routes, alles blijft in `app/page.tsx`
