# Plan — Layout & Campaign Topic

---

## 1. Side-by-side layout

### Aanpak
De `app/page.tsx` krijgt een full-height two-column grid op desktop. Elke kolom heeft `overflow-y-auto` zodat ze intern scrollen. De HeroSection staat erboven als vaste header-zone.

### Structuur
```
<div> ← min-h-screen, flex-col
  <HeroSection />            ← vaste hoogte bovenaan

  <div>                      ← flex-1, twee kolommen op lg
    <aside>                  ← links: FilterPanel, overflow-y-auto
      <FilterPanel />
    </aside>

    <main>                   ← rechts: ResultPanel, overflow-y-auto
      <ResultPanel />
    </main>
  </div>
</div>
```

### Tailwind klassen
- Outer wrapper: `flex flex-col h-screen`
- Hero: `shrink-0`
- Two-column zone: `flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-6`
- Elke kolom: `overflow-y-auto`

---

## 2. Campagneonderwerp tekstveld

### Aanpak
Een nieuw veld `topic` wordt toegevoegd aan de state in `page.tsx` en doorgegeven via `FilterPanel`. De route handler ontvangt `topic` als onderdeel van de request body in plaats van een hardcoded waarde.

### Wijzigingen per bestand

**`types/index.ts`**
- Voeg `topic: string` toe aan `GenerateRequest`

**`components/FilterPanel.tsx`**
- Voeg `<textarea>` of `<input>` toe als eerste veld in het panel
- Label: "Campagneonderwerp"
- Placeholder: "Bijv. minder schermtijd en meer focus"
- De "Genereer" knop is `disabled` als `topic.trim() === ''`
- De ⚡ random knop wijzigt `topic` niet

**`app/page.tsx`**
- Voeg `topic` toe aan de filters state (initieel lege string of demo-waarde)
- Geef `topic` mee in de fetch body

**`app/api/generate/route.ts`**
- Lees `topic` uit de request body
- Gebruik `topic` als de `{{topic}}` placeholder waarde i.p.v. de hardcoded string

---

## Geen wijzigingen nodig in
- `data/promptLibrary.ts` — `{{topic}}` placeholder staat er al in
- `data/frameworks.ts`, `data/audiences.ts`, etc.
- `components/ResultPanel.tsx`, `components/HeroSection.tsx`
