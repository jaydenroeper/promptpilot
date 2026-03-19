# Plan — App Shell & Mode Clarity

## Aanpak

Vier onafhankelijke wijzigingsgebieden, in volgorde van minste tot meeste impact op de render-tree:

1. **Data** — `Framework` type en `frameworks.ts` uitbreiden
2. **Topbar** — nieuwe compacte component, HeroSection verwijderen
3. **Page shell** — `app/page.tsx` omzetten naar topbar + sidebar + output-grid
4. **Components** — `FilterPanel.tsx` sidebar-stijl, framework-cards, `ResultPanel.tsx` intern scroll

---

## Stap 1 — Data: Framework metadata uitbreiden

**Bestanden:** `types/index.ts`, `data/frameworks.ts`

- Voeg toe aan `Framework` type:
  ```ts
  label: string           // bijv. "Fast"
  shortDescription: string // bijv. "Snel en helder, voor short-form posts"
  technicalName: string   // bijv. "C.O.R.E."
  ```
- Vul deze velden in `data/frameworks.ts` in voor alle zes frameworks (zie mode-mapping in requirements)
- Geen wijzigingen in `promptLibrary.ts`, API of andere files

---

## Stap 2 — Topbar: nieuwe component

**Bestanden:** `components/TopBar.tsx` (nieuw), `components/HeroSection.tsx` (verwijderen)

- `TopBar.tsx` rendert een `<header>` met:
  - Merknaam "PromptPilot" (bold, wit)
  - Tagline "Genereer social content met de juiste AI-aanpak" (klein, grijs)
  - Max hoogte: 56px, `sticky top-0`, donkere achtergrondkleur passend bij thema
- HeroSection wordt verwijderd (geen export meer nodig)

---

## Stap 3 — Page shell refactor

**Bestand:** `app/page.tsx`

Huidige structuur:
```
<HeroSection />
<main>
  <FilterPanel />   ← boven
  <ResultPanel />   ← onder
</main>
```

Nieuwe structuur:
```
<TopBar />
<div class="flex h-[calc(100vh-56px)]">
  <aside class="w-80 shrink-0 overflow-y-auto">
    <FilterPanel />
  </aside>
  <main class="flex-1 overflow-hidden">
    <ResultPanel />
  </main>
</div>
```

- Op mobile (`< lg`): `flex-col` in plaats van `flex-row`, normale scroll
- Sidebar breedte: `w-72` of `w-80` (288–320px), voldoende voor cards

---

## Stap 4a — FilterPanel: sidebar-stijl

**Bestand:** `components/FilterPanel.tsx`

- Layout wordt een verticale lijst met secties, niet horizontale chipgroepen
- Secties: "Campagne", "Doelgroep", "Platform", "Tone", "Mode"
- Elke sectie heeft een klein label (`text-xs uppercase tracking-wide text-gray-400`)
- Frameworkkeuze wordt een lijst van klikbare card-items (zie stap 4b)
- "Genereer" knop staat onderaan de sidebar, `w-full`

---

## Stap 4b — Framework card-list

**Bestand:** `components/FilterPanel.tsx` (onderdeel van sidebar)

Elk framework-item toont:
```
[ Fast             ]  ← label (bold)
  Snel en helder…     ← shortDescription (small, gray)
  C.O.R.E.            ← technicalName (xs, subtiele badge)
```

- Geselecteerd item: lichte highlight (bijv. `bg-gray-700 border-blue-500`)
- Niet-geselecteerd: `bg-gray-800 border-transparent`
- `cursor-pointer`, `rounded-md`, `p-3`, volledige breedte van sidebar

---

## Stap 4c — ResultPanel: intern scroll

**Bestand:** `components/ResultPanel.tsx`

- Wrapper krijgt `h-full flex flex-col`
- Tabs-balk staat bovenin (`shrink-0`)
- Tab-content wrapper krijgt `flex-1 overflow-y-auto`
- Geen vaste `min-h` of `max-h` — hoogte wordt bepaald door de parent (page shell)

---

## Volgorde van implementatie

```
1. types/index.ts          → Framework type uitbreiden
2. data/frameworks.ts      → label, shortDescription, technicalName invullen
3. components/TopBar.tsx   → nieuw, compact
4. app/page.tsx            → shell refactor (TopBar + sidebar + main grid)
5. components/FilterPanel  → sidebar-stijl + framework cards
6. components/ResultPanel  → intern scroll
7. Smoke test              → desktop + mobile visueel
```

---

## Niet in scope

- Side-by-side framework vergelijking
- "Why this output?" uitleglaag
- Prompt-details toggle voor power users
- Animaties of transitions
