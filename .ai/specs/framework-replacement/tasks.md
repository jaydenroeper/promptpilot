# Tasks — Framework Replacement

## T1 — Herschrijf `data/frameworks.ts`
Vervang alle 6 Framework-objecten met de nieuwe frameworks: C.O.R.E., C.R.E.A.T.E., R.I.S.E.N., P.A.R.A., D.A.R.E., R.O.A.D.

- [ ] id, name, goal, description voor elk van de 6 frameworks
- [ ] Verwijder alle oude framework-objecten

## T2 — Herschrijf `data/promptLibrary.ts`
Vervang alle 6 PromptTemplate-objecten met templates die de framework-structuur expliciet laten zien.

- [ ] Template voor C.O.R.E. (Context → Objective → Role → Example)
- [ ] Template voor C.R.E.A.T.E. (Context → Role → Example → Audience → Tone → End Goal)
- [ ] Template voor R.I.S.E.N. (Role → Input → Scenario → Expectation → Nuance)
- [ ] Template voor P.A.R.A. (Problem → Analysis → Recommendation → Action)
- [ ] Template voor D.A.R.E. (Describe → Act → Resonate → Elevate)
- [ ] Template voor R.O.A.D. (Recognize → Options → Analyze → Decide)
- [ ] Alle placeholders (audience, platform, tone, topic) aanwezig per template
- [ ] Verwijder alle oude prompt-templates

## T3 — Smoke test
- [ ] `npm run dev` start zonder errors
- [ ] Alle 6 frameworks zichtbaar in UI
- [ ] Genereer-knop werkt voor elk framework
