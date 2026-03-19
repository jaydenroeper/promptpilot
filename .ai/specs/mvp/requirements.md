# Requirements — PromptPilot MVP

## User Stories

### US-01 — Filterpaneel
Als gebruiker wil ik doelgroep, platform, tone of voice en framework kunnen kiezen,
zodat de app de juiste prompt en content voor mij genereert.

**Acceptance criteria:**
- [ ] Vier dropdowns/selectors: doelgroep, platform, tone, framework
- [ ] Elke selector heeft minstens de opties uit `product.md`
- [ ] Wijzigen van een filter triggert direct een update van de output
- [ ] Actieve selectie is visueel duidelijk

---

### US-02 — Gegenereerde social post
Als gebruiker wil ik de gegenereerde social media post zien,
zodat ik direct begrijp hoe de content eruitziet.

**Acceptance criteria:**
- [ ] Post wordt getoond in een duidelijk content-paneel
- [ ] Post past bij de gekozen doelgroep en het platform
- [ ] Post past bij de gekozen tone of voice
- [ ] Copy-to-clipboard knop aanwezig

---

### US-03 — Gebruikte prompt zichtbaar
Als gebruiker wil ik de exacte prompt kunnen zien die werd gebruikt,
zodat ik begrijp hoe de output werd gegenereerd.

**Acceptance criteria:**
- [ ] Prompt is leesbaar weergegeven (bijv. in een code-blok of apart paneel)
- [ ] Prompt bevat de ingevulde variabelen (doelgroep, platform, tone)
- [ ] Copy-to-clipboard knop aanwezig voor de prompt

---

### US-04 — Framework uitleg
Als gebruiker wil ik uitleg zien over het gekozen prompt-framework,
zodat ik begrijp waarom dit framework werkt voor dit geval.

**Acceptance criteria:**
- [ ] Naam en beschrijving van het framework zijn zichtbaar
- [ ] "Waarom werkt deze prompt?" uitleg is aanwezig
- [ ] Uitleg is specifiek voor de combinatie (niet generiek)

---

### US-05 — Tabs in resultaatpaneel
Als gebruiker wil ik kunnen schakelen tussen Post, Prompt en Uitleg,
zodat het scherm overzichtelijk blijft.

**Acceptance criteria:**
- [ ] Drie tabs: "Post", "Prompt", "Uitleg"
- [ ] Actieve tab is duidelijk gestyled
- [ ] Inhoud wisselt zonder page refresh

---

### US-06 — Inzichten sectie
Als gebruiker wil ik de 5 kernlessen over prompting zien,
zodat de didactische waarde van de app duidelijk is voor jury/docenten.

**Acceptance criteria:**
- [ ] Minimaal 5 inzicht-cards of bullets
- [ ] Inhoud komt uit `product.md` (de 5 gedefinieerde inzichten)
- [ ] Visueel duidelijk onderscheiden van de rest van de pagina

---

### US-07 — Hero sectie
Als bezoeker wil ik direct begrijpen wat PromptPilot is en doet,
zodat ik zonder uitleg de app kan gebruiken.

**Acceptance criteria:**
- [ ] Naam "PromptPilot" prominent aanwezig
- [ ] Tagline of korte uitleg in max 2 regels
- [ ] Visueel uitnodigend en professioneel

---

### US-08 — Vergelijkingsmodus (bonus)
Als gebruiker wil ik twee frameworks naast elkaar kunnen vergelijken,
zodat ik het verschil in output direct zie.

**Acceptance criteria:**
- [ ] Optionele "Compare" toggle of knop
- [ ] Beide outputs tonen (post + prompt) naast elkaar
- [ ] Alleen voor desktop (mobile mag stacked zijn)

---

### US-09 — Random demo scenario (bonus)
Als gebruiker wil ik met één klik een willekeurig scenario kunnen laden,
zodat de demo snel en verrassend blijft.

**Acceptance criteria:**
- [ ] "Random" knop vult alle filters willekeurig in
- [ ] Output wordt direct bijgewerkt

---

## Constraints
- Geen echte AI API vereist voor MVP (template-based simulatie is voldoende)
- Geen auth, geen database
- Responsive (mobile-first, maar desktop is primair voor demo)
- Tailwind CSS 4, geen extra UI-libraries
- Alle prompts komen uit `data/promptLibrary.ts`
