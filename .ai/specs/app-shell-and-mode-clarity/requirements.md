# Requirements — App Shell & Mode Clarity

## Context

De huidige app heeft een grote HeroSection bovenaan, filters als losse chipgroepen, en een outputpaneel dat meescrollt met de pagina. Frameworks worden alleen getoond als technische acroniemen (bijv. "C.O.R.E."), zonder uitleg wat ze doen. Het geheel voelt als een prompt-demo, niet als een beslisinterface.

Deze spec transformeert de app naar een duidelijke app-shell met:
- een compacte topbar in plaats van de grote hero
- een vaste linker sidebar voor alle invoer en frameworkkeuze
- mensgerichte labels + microcopy per framework ("mode")
- een outputpaneel dat intern scrollt zonder de pagina uit te rekken

---

## US-01 — Compacte topbar vervangt HeroSection

Als gebruiker wil ik een compacte topbar zien in plaats van een grote hero-sectie,
zodat de app er uitziet als een beslisinterface en niet als een marketingpagina.

**Acceptance criteria:**
- [ ] Topbar bevat: merknaam/titel ("PromptPilot") en een korte context-tagline (bijv. "Genereer social content met de juiste AI-aanpak")
- [ ] Topbar is compact — maximaal 56px hoog op desktop
- [ ] Topbar sluit visueel aan op het bestaande donkere thema
- [ ] HeroSection.tsx is verwijderd of volledig vervangen

---

## US-02 — Vaste sidebar voor campagne-invoer

Als gebruiker wil ik alle invoervelden en keuzes in een vaste linker sidebar zien,
zodat ik altijd weet waar ik iets kan aanpassen zonder te scrollen.

**Acceptance criteria:**
- [ ] Sidebar bevat (van boven naar beneden): campagneonderwerp, doelgroep, platform, tone of voice, frameworkkeuze
- [ ] Sidebar is sticky/fixed op desktop — scrollt niet mee met de output
- [ ] Sidebar heeft duidelijke sectiescheidingen of labels per groep invoervelden
- [ ] Op mobile (< 1024px): sidebar wordt stacked bovenaan de pagina geplaatst
- [ ] "Genereer" knop staat onderaan de sidebar

---

## US-03 — Mensgerichte framework-labels met microcopy

Als gebruiker wil ik frameworks zien als begrijpelijke "modes" met een korte uitleg,
zodat ik een keuze kan maken op basis van wat ik wil bereiken — niet op basis van een acroniem.

**Acceptance criteria:**
- [ ] Elk framework toont een korte Nederlandstalige label (zie mapping hieronder)
- [ ] Elk framework toont één regel microcopy (max. ~8 woorden) die uitlegt wat het doet
- [ ] Het technische acroniem (bijv. "C.O.R.E.") blijft zichtbaar als subtiele badge of caption
- [ ] De frameworkkeuze is visueel een lijst van card-achtige items, niet alleen chips
- [ ] Geselecteerd framework is duidelijk gemarkeerd

**Mode-mapping:**

| frameworkId | Label     | Microcopy                              | Technisch |
|-------------|-----------|----------------------------------------|-----------|
| `core`      | Fast      | Snel en helder, voor short-form posts  | C.O.R.E.  |
| `create`    | Creative  | Maximale creativiteit én precisie      | C.R.E.A.T.E. |
| `risen`     | Smart     | Analyse en thought leadership          | R.I.S.E.N. |
| `para`      | Structured| Probleem → oplossing, stap voor stap   | P.A.R.A.  |
| `dare`      | Story     | Emotioneel verbindende storytelling    | D.A.R.E.  |
| `road`      | Strategic | Vergelijkt opties, geeft aanbeveling   | R.O.A.D.  |

---

## US-04 — Intern scrollende outputkolom

Als gebruiker wil ik dat de outputkolom intern scrollt binnen de viewport,
zodat de pagina nooit verder reikt dan de schermhoogte en ik altijd sidebar en output tegelijk zie.

**Acceptance criteria:**
- [ ] De outputkolom heeft een vaste hoogte (bijv. `h-full` of `calc(100vh - topbarHeight)`)
- [ ] Tabs (Content / Prompt / Uitleg) staan bovenin de outputkolom, buiten het scrollgebied
- [ ] Tab-content scrollt intern met `overflow-y-auto`
- [ ] De pagina zelf scrollt niet op desktop (geen verticale scrollbar op `body` of main container)
- [ ] Op mobile mag de pagina normaal scrollen (stacked layout)

---

## Constraints

- Geen nieuwe npm-dependencies
- Alle bestaande filters en frameworklogica blijven functioneel ongewijzigd
- `frameworkId` blijft het interne datamodel — labels zijn alleen presentatielaag
- Het data-model (`Framework` type en `data/frameworks.ts`) wordt uitgebreid met `label`, `shortDescription` en `technicalName` — dit is de enige datawijziging naast UI
- Mobile-first: stacked layout op klein scherm blijft werken
- Donker thema blijft intact
