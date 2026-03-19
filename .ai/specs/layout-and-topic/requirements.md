# Requirements — Layout & Campaign Topic

## Context
De huidige app heeft filters en output onder elkaar. Dit leidt tot onnodig scrollen. Daarnaast is het onderwerp van de content nu hardcoded ("minder schermtijd en meer focus"). We willen dat de gebruiker zelf een campagneonderwerp invoert, zodat de AI content genereert op basis van echte gebruikersinput.

---

## US-01 — Side-by-side layout
Als gebruiker wil ik de filterkolom en de outputkolom naast elkaar zien,
zodat ik niet hoef te scrollen om filters en resultaat tegelijk te kunnen bekijken.

**Acceptance criteria:**
- [ ] Op desktop (≥ 1024px): twee kolommen naast elkaar — filters links, output rechts
- [ ] De pagina past volledig in de viewport hoogte zonder te scrollen (full-height layout)
- [ ] Elke kolom scrollt intern als de inhoud te lang is
- [ ] Op mobile (< 1024px): stacked layout blijft behouden (filters boven, output onder)
- [ ] HeroSection blijft bovenaan, buiten de twee-koloms zone

---

## US-02 — Vrij campagneonderwerp
Als gebruiker wil ik een eigen campagneonderwerp kunnen invoeren,
zodat de AI content genereert die relevant is voor mijn specifieke situatie.

**Acceptance criteria:**
- [ ] Tekstveld in het filterpaneel voor het campagneonderwerp
- [ ] Placeholder tekst als richtlijn voor de gebruiker (bijv. "Bijv. minder schermtijd en meer focus")
- [ ] Het veld is verplicht — de "Genereer" knop is uitgeschakeld als het veld leeg is
- [ ] De ingevoerde waarde vervangt de hardcoded `topic` in de prompt templates
- [ ] De ⚡ random knop vult de filters willekeurig in maar laat het tekstveld met rust
- [ ] Het tekstveld is geen onderdeel van de random-logica

---

## Constraints
- Geen nieuwe dependencies
- Mobile-first: stacked layout op klein scherm blijft werken
- Het tekstveld vervangt de hardcoded `topic` string in `data/promptLibrary.ts` en `app/api/generate/route.ts`
