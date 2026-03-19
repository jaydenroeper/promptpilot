# Plan — PromptPilot MVP

## Aanpak
Single-page app. Alle logica client-side. Geen API routes nodig voor MVP.
Content generatie via template-matching op (audience × platform × tone × framework).

---

## Data model

### Types (`types/index.ts`)
```ts
type AudienceId = 'student' | 'young-professional' | 'parent'
type PlatformId = 'instagram' | 'linkedin' | 'tiktok'
type ToneId = 'informative' | 'inspiring' | 'playful' | 'professional'
type FrameworkId = 'role-based' | 'structured-output' | 'few-shot' | 'chain-of-thought' | 'style-tone' | 'constraint-based'

interface Audience { id: AudienceId; label: string; description: string }
interface Platform { id: PlatformId; label: string; description: string; maxChars?: number }
interface Tone { id: ToneId; label: string; description: string }

interface Framework {
  id: FrameworkId
  name: string
  goal: string
  description: string
  badge: string          // bijv. "Hoog platform-fit"
  badgeLevel: 'high' | 'medium' | 'low'
}

interface PromptTemplate {
  id: string
  name: string
  frameworkId: FrameworkId
  description: string
  template: string       // met {{audience}}, {{platform}}, {{tone}}, {{topic}} etc.
  variables: string[]    // lijst van verwachte variabelen
}

interface ContentExample {
  audienceId: AudienceId
  platformId: PlatformId
  toneId: ToneId
  frameworkId: FrameworkId
  post: string
  whyItWorks: string
}

interface GeneratedResult {
  post: string
  prompt: string
  frameworkExplanation: string
  whyItWorks: string
  badge: string
  badgeLevel: 'high' | 'medium' | 'low'
}
```

---

## Seed data strategie

### Prompt library (`data/promptLibrary.ts`)
6 templates, één per framework. Template-strings met `{{variabele}}` placeholders.

### Examples (`data/examples.ts`)
Pre-written posts voor de meest relevante combinaties:
- student × tiktok × playful × role-based
- student × tiktok × playful × structured-output
- student × instagram × inspiring × constraint-based
- young-professional × linkedin × professional × role-based
- young-professional × linkedin × informative × structured-output
- young-professional × linkedin × professional × chain-of-thought
- parent × instagram × inspiring × style-tone
- parent × instagram × informative × few-shot
- parent × linkedin × professional × constraint-based

Fallback: als combinatie niet in examples.ts staat, genereer post via template-invulling.

---

## Content generatie logica (`lib/generateContent.ts`)

```
function generateContent(
  audience: AudienceId,
  platform: PlatformId,
  tone: ToneId,
  framework: FrameworkId
): GeneratedResult

Stappen:
1. Zoek exact match in examples array
2. Als geen match: gebruik closest match (zelfde audience+platform) of fallback template
3. Selecteer prompt template op frameworkId
4. Vul template variabelen in
5. Return GeneratedResult
```

---

## Pagina structuur (`app/page.tsx`)

```
<HeroSection />
<FilterPanel filters={...} onChange={...} />
<ResultPanel result={...} />           ← tabs: Post | Prompt | Uitleg
<InsightsSection />
[optioneel] <CompareMode />
```

State in page.tsx:
```ts
const [audience, setAudience] = useState<AudienceId>('student')
const [platform, setPlatform] = useState<PlatformId>('tiktok')
const [tone, setTone] = useState<ToneId>('playful')
const [framework, setFramework] = useState<FrameworkId>('role-based')
const [compareMode, setCompareMode] = useState(false)
const [compareFramework, setCompareFramework] = useState<FrameworkId>('structured-output')
```

`result` wordt berekend via `useMemo` op basis van de 4 filters.

---

## Component breakdown

### `HeroSection`
- Statisch, geen props
- Titel + tagline + korte uitleg

### `FilterPanel`
Props: `{ audience, platform, tone, framework, onChange, onRandom }`
- 4 selector-groepen
- Random-knop

### `ResultPanel`
Props: `{ result: GeneratedResult }`
- Tabs: Post | Prompt | Uitleg
- CopyButton per tab

### `InsightsSection`
- Statisch
- 5 inzicht-cards uit constante array

### `CompareMode`
Props: `{ audience, platform, tone, framework1, framework2, onFramework2Change }`
- Toont twee ResultPanel kolommen naast elkaar

### `CopyButton`
Props: `{ text: string }`
- `navigator.clipboard.writeText` + visuele feedback

---

## Visueel ontwerp richting
- Kleurpalet: donker neutraal achtergrond (zinc-900/950), witte kaarten, accent kleur indigo/violet
- Typografie: Geist Sans (al aanwezig in layout)
- Badges: kleine pill-componenten met kleurcodering (groen = high, geel = medium, oranje = low)
- Filters: grote klikbare cards ipv dropdowns (beter visueel voor demo)
- Tabs: eenvoudige underline-stijl
- Responsive: kolom-layout op mobile, grid op desktop

---

## Niet bouwen in MVP
- Persistentie / localStorage
- Echte AI API-integratie
- Multi-page routing
- Complexe animaties
