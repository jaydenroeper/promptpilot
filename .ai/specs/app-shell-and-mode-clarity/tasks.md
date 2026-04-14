# Tasks — App Shell & Mode Clarity

## T-01 · Data: Framework type uitbreiden ✅
**Bestand:** `types/index.ts`
- Voeg `label: string`, `shortDescription: string`, `technicalName: string` toe aan het `Framework` interface/type
- **Done:** TypeScript compileert zonder fouten

---

## T-02 · Data: frameworks.ts invullen ✅
**Bestand:** `data/frameworks.ts`
- Voeg `label`, `shortDescription` en `technicalName` toe aan alle zes frameworks:
  - `core` → Fast / "Snel en helder, voor short-form posts" / C.O.R.E.
  - `create` → Creative / "Maximale creativiteit én precisie" / C.R.E.A.T.E.
  - `risen` → Smart / "Analyse en thought leadership" / R.I.S.E.N.
  - `para` → Structured / "Probleem → oplossing, stap voor stap" / P.A.R.A.
  - `dare` → Story / "Emotioneel verbindende storytelling" / D.A.R.E.
  - `road` → Strategic / "Vergelijkt opties, geeft aanbeveling" / R.O.A.D.
- **Done:** Geen TypeScript-fouten; alle zes items bevatten de drie nieuwe velden

---

## T-03 · Component: TopBar.tsx aanmaken ✅
**Bestand:** `components/TopBar.tsx` (nieuw)
- `<header>` met merknaam "PromptPilot" en tagline
- `sticky top-0`, max 56px hoog, donker thema
- **Done:** Rendert correct in isolatie; geen console-fouten

---

## T-04 · Component: HeroSection verwijderen ✅
**Bestand:** `components/HeroSection.tsx`
- Bestand verwijderen
- Import in `app/page.tsx` verwijderen
- **Done:** Geen import-fouten; app bouwt zonder HeroSection

---

## T-05 · Page shell: app/page.tsx refactoren ✅
**Bestand:** `app/page.tsx`
- Importeer `TopBar`
- Bouw de layout: `<TopBar />` + flex container met `<aside>` (sidebar) en `<main>`
- Desktop: naast elkaar (`lg:flex-row`); mobile: gestapeld (`flex-col`)
- **Done:** Op desktop ziet de browser geen verticale scrollbar op de pagina zelf; op mobile werkt stacked layout

---

## T-06 · Component: FilterPanel sidebar-stijl ✅
**Bestand:** `components/FilterPanel.tsx`
- Omzetten van horizontale chipgroepen naar verticale sidebar-secties
- Secties: Campagne, Doelgroep, Platform, Tone, Mode
- Elk met een klein sectionlabel (`text-xs uppercase tracking-wide`)
- "Genereer" knop onderaan, `w-full`
- **Done:** Alle filters functioneren zoals vóór de wijziging; knop staat onderaan

---

## T-07 · Component: Framework card-list in FilterPanel ✅
**Bestand:** `components/FilterPanel.tsx`
- Vervang framework chips door klikbare card-items
- Elk card toont: `label` (bold) + `shortDescription` (small, gray) + `technicalName` (xs badge)
- Geselecteerd: `bg-zinc-700 border-indigo-500`; niet-geselecteerd: `bg-zinc-900 border-zinc-800`
- **Done:** Frameworkselectie werkt; geselecteerd item is visueel duidelijk

---

## T-08 · Component: ResultPanel intern scroll ✅
**Bestand:** `components/ResultPanel.tsx`
- Wrapper: `h-full flex flex-col`
- Tabs-balk: `shrink-0`
- Tab-content: `flex-1 overflow-y-auto`
- **Done:** Lange AI-output scrollt intern; pagina scrollt niet mee op desktop

---

## T-09 · Smoke test
- [ ] Desktop (≥ 1024px): topbar + sidebar + output zichtbaar zonder pagina-scroll
- [ ] Sidebar: alle secties aanwezig, framework cards klikbaar, "Genereer" werkt
- [ ] Framework cards: label, microcopy en technicalName zichtbaar
- [ ] Output: lange tekst scrollt intern in het resultaatpaneel
- [ ] Mobile (< 1024px): stacked layout, normale scroll, filters boven output
- [ ] Genereer-knop is uitgeschakeld als campagneonderwerp leeg is
- [ ] Donker thema intact op alle onderdelen
