# Tasks — Layout & Campaign Topic

## Campagneonderwerp

- [ ] **T-A01** Voeg `topic: string` toe aan `GenerateRequest` in `types/index.ts`
- [ ] **T-A02** Voeg `topic` state toe in `app/page.tsx` (initieel lege string)
- [ ] **T-A03** Geef `topic` mee in de fetch body naar `/api/generate`
- [ ] **T-A04** Lees `topic` uit request body in `app/api/generate/route.ts` en gebruik het als `{{topic}}` placeholder
- [ ] **T-A05** Voeg tekstveld toe in `components/FilterPanel.tsx`
  - Label: "Campagneonderwerp"
  - Placeholder: "Bijv. minder schermtijd en meer focus"
  - Uitgeschakeld als leeg: "Genereer" knop `disabled` als `topic.trim() === ''`
  - ⚡ random knop laat `topic` ongemoeid

## Layout

- [ ] **T-B01** Pas `app/page.tsx` aan naar full-height two-column layout
  - Outer: `flex flex-col h-screen`
  - Hero: `shrink-0`
  - Two-column zone: `flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-6`
  - Elke kolom: `overflow-y-auto`
- [ ] **T-B02** Controleer mobile layout (stacked, scrollable)
- [ ] **T-B03** Controleer desktop layout (side-by-side, geen full-page scroll)

## Uitvoervolgorde
T-A01 → T-A02 → T-A03 → T-A04 → T-A05 → T-B01 → T-B02 → T-B03
