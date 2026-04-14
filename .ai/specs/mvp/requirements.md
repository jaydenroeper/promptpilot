# Requirements — PromptPilot MVP

## User Stories

### US-01 — Filterpaneel
Als gebruiker wil ik doelgroep, platform, tone of voice en framework kunnen kiezen,
zodat de app de juiste prompt bouwt en naar AI stuurt.

**Acceptance criteria:**
- [ ] Vier filter-groepen: doelgroep, platform, tone, framework
- [ ] Elke selector heeft de opties uit `product.md`
- [ ] Actieve selectie is visueel duidelijk

---

### US-02 — Genereer knop
Als gebruiker wil ik op een knop drukken om content te genereren,
zodat ik controle heb over wanneer een API-aanroep plaatsvindt.

**Acceptance criteria:**
- [ ] "Genereer" knop triggert `POST /api/generate`
- [ ] Knop toont laadstatus tijdens aanroep
- [ ] Foutmelding bij mislukte aanroep

---

### US-03 — Gegenereerde social post
Als gebruiker wil ik de gegenereerde social media post zien,
zodat ik direct zie hoe de content eruitziet.

**Acceptance criteria:**
- [ ] Post wordt getoond in een duidelijk content-paneel
- [ ] Copy-to-clipboard knop aanwezig

---

### US-04 — Gebruikte prompt zichtbaar
Als gebruiker wil ik de exacte prompt kunnen zien die naar OpenAI ging,
zodat ik begrijp hoe de output werd gegenereerd.

**Acceptance criteria:**
- [ ] Ingevulde prompt is leesbaar weergegeven
- [ ] Copy-to-clipboard knop aanwezig

---

### US-05 — Framework uitleg
Als gebruiker wil ik een korte uitleg zien van het gekozen framework,
zodat ik begrijp wat dit framework doet.

**Acceptance criteria:**
- [ ] Naam en beschrijving van het framework zichtbaar
- [ ] Uitleg is statisch per framework (geen extra AI-aanroep)

---

### US-06 — Tabs in resultaatpaneel
Als gebruiker wil ik schakelen tussen Post, Prompt en Uitleg,
zodat het scherm overzichtelijk blijft.

**Acceptance criteria:**
- [ ] Drie tabs: "Post", "Prompt", "Uitleg"
- [ ] Inhoud wisselt zonder page refresh

---

### US-07 — Hero sectie
Als bezoeker wil ik direct begrijpen wat PromptPilot is,
zodat ik zonder uitleg de app kan gebruiken.

**Acceptance criteria:**
- [ ] Naam "PromptPilot" prominent aanwezig
- [ ] Tagline in max 2 regels

---

### US-08 — Random scenario (bonus)
Als gebruiker wil ik met één klik een willekeurig scenario laden.

**Acceptance criteria:**
- [ ] "Random" knop vult alle filters willekeurig in

---

### US-09 — Vergelijkingsmodus (bonus)
Als gebruiker wil ik twee frameworks naast elkaar vergelijken.

**Acceptance criteria:**
- [ ] Tweede framework selector
- [ ] Twee outputs naast elkaar

---

## Constraints
- API key staat in `.env.local` als `OPENAI_API_KEY`
- Model: `gpt-4o-mini`
- Prompt templates komen altijd uit `data/promptLibrary.ts`
- Geen auth, geen database
- Tailwind CSS 4, geen extra UI-libraries
