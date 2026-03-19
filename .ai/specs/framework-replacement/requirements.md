# Requirements — Framework Replacement

## Context

De huidige zes prompt-frameworks (Role-Based, Structured Output, Few-Shot, Chain-of-Thought, Style/Tone, Constraint-Based) worden vervangen door zes real-world frameworks uit de marketingpraktijk:

| ID | Naam | Acroniem |
|----|------|---------|
| `core` | C.O.R.E. | Context · Objective · Role · Example |
| `create` | C.R.E.A.T.E. | Context · Role · Example · Audience · Tone · End Goal |
| `risen` | R.I.S.E.N. | Role · Input · Scenario · Expectation · Nuance |
| `para` | P.A.R.A. | Problem · Analysis · Recommendation · Action |
| `dare` | D.A.R.E. | Describe · Act · Resonate · Elevate |
| `road` | R.O.A.D. | Recognize · Options · Analyze · Decide |

## Framework Definities

### C.O.R.E.
- **Best for:** Snelle, heldere prompts voor short-form content
- **Goal:** Geeft AI context, een concreet doel, een rol en een voorbeeldstructuur
- **Sterktes:** Snel, effectief voor social media posts, ad copy, e-mail subject lines
- **Best voor:** LinkedIn posts, e-mail copy, ad creatives, blog introducties

### C.R.E.A.T.E.
- **Best for:** Maximale creativiteit én precisie
- **Goal:** Balans tussen creativiteit en logische opbouw; stuurt op merk, doelgroep en toon
- **Sterktes:** Brand storytelling, ad messaging, long-form content
- **Best voor:** Brand messaging, salespagina's, lange blogposts, video scripts

### R.I.S.E.N.
- **Best for:** Analyse & thought leadership
- **Goal:** Nuanceerde, goed onderbouwde argumenten met meerdere perspectieven
- **Sterktes:** Thought leadership, industrie-analyse, trend reports
- **Best voor:** LinkedIn artikelen, whitepapers, strategie breakdowns

### P.A.R.A.
- **Best for:** Probleemoplossing
- **Goal:** Breekt complexe marketing uitdagingen op in probleem → analyse → aanbeveling → actie
- **Sterktes:** Gestructureerde, oplossingsgerichte responses
- **Best voor:** Marketing playbooks, performance reports, crisis management

### D.A.R.E.
- **Best for:** Creativiteit & storytelling
- **Goal:** Emotioneel verbindende content via scene-setting, actie, resonantie en versterking
- **Sterktes:** Merkstories, persuasieve en emotioneel aansprekende content
- **Best voor:** Brand stories, ad messaging, creatieve campagneconcepts

### R.O.A.D.
- **Best for:** Besluitvorming & strategie
- **Goal:** Vergelijkt opties en geeft een onderbouwde aanbeveling
- **Sterktes:** Strategische marketing planning, AI-ondersteund beslissen
- **Best voor:** Strategische plannen, growth initiatives, go/no-go beslissingen

---

## User Stories

### US-F01 — Nieuwe frameworks beschikbaar in filterpaneel
Als gebruiker wil ik de zes nieuwe frameworks kunnen selecteren,
zodat ik zie hoe elk framework een andere post genereert.

**Acceptance criteria:**
- [ ] Framework selector toont: C.O.R.E., C.R.E.A.T.E., R.I.S.E.N., P.A.R.A., D.A.R.E., R.O.A.D.
- [ ] Elk framework toont de naam + acroniem (bijv. "C.O.R.E. — Context · Objective · Role · Example")
- [ ] De zes oude frameworks zijn verwijderd

### US-F02 — Framework uitleg toont acroniem-onderdelen
Als gebruiker wil ik in de Uitleg-tab zien wat elk letter staat voor,
zodat ik begrijp hoe het framework werkt.

**Acceptance criteria:**
- [ ] Uitleg toont: naam, acroniem-letters uitgeschreven, "best for" tekst, korte beschrijving
- [ ] Statisch per framework (geen extra AI-aanroep)

### US-F03 — Gegenereerde content past bij framework karakter
Als gebruiker wil ik dat de gegenereerde post de structuur van het gekozen framework weerspiegelt,
zodat het verschil tussen frameworks zichtbaar is.

**Acceptance criteria:**
- [ ] Elke framework-prompt in `promptLibrary.ts` is opgebouwd volgens de letters van het acroniem
- [ ] De prompt-template is leesbaar en toont de framework-structuur expliciet

---

## Constraints

- Alleen `data/frameworks.ts` en `data/promptLibrary.ts` hoeven te veranderen
- Framework IDs worden snake_case van de afkorting: `core`, `create`, `risen`, `para`, `dare`, `road`
- Taal van prompts: Nederlands (consistent met huidige implementatie)
- Alle bestaande filters (doelgroep, platform, tone, topic) blijven ongewijzigd
- Geen wijzigingen in UI-componenten, API routes of types (tenzij een veld ontbreekt)
