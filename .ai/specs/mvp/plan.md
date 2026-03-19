# Plan — PromptPilot MVP

## Aanpak
Single-page app. Filters zijn client-side state. Content generatie via `POST /api/generate` route handler die OpenAI aanroept. Prompt templates komen altijd uit `data/promptLibrary.ts`.

---

## Data model

### Types (`types/index.ts`)
```ts
type AudienceId = 'student' | 'young-professional' | 'parent'
type PlatformId = 'instagram' | 'linkedin' | 'tiktok'
type ToneId = 'informative' | 'inspiring' | 'playful' | 'professional'
type FrameworkId = 'role-based' | 'structured-output' | 'few-shot' | 'chain-of-thought' | 'style-tone' | 'constraint-based'

interface Audience { id: AudienceId; label: string; description: string }
interface Platform { id: PlatformId; label: string; description: string }
interface Tone { id: ToneId; label: string; description: string }

interface Framework {
  id: FrameworkId
  name: string
  goal: string
  description: string
}

interface PromptTemplate {
  id: string
  name: string
  frameworkId: FrameworkId
  description: string
  // De volledige prompt string met {{audience}}, {{platform}}, {{tone}} placeholders
  template: string
}

interface GenerateRequest {
  audienceId: AudienceId
  platformId: PlatformId
  toneId: ToneId
  frameworkId: FrameworkId
}

interface GenerateResponse {
  post: string           // de gegenereerde social post
  prompt: string         // de exacte prompt die naar OpenAI ging
  frameworkExplanation: string  // korte uitleg van het gekozen framework
}
```

---

## Prompt library (`data/promptLibrary.ts`)
6 templates, één per framework. Elke template is een volledige prompt string. Placeholders worden server-side ingevuld met de waarden uit de filters.

Variabelen die elke template kan gebruiken:
- `{{audience}}` — label van de doelgroep
- `{{platform}}` — label van het platform
- `{{tone}}` — label van de tone of voice
- `{{topic}}` — vaste waarde: "minder schermtijd en meer focus"

---

## Route handler (`app/api/generate/route.ts`)

```
POST /api/generate
Body: GenerateRequest
Response: GenerateResponse

Stappen:
1. Valideer input
2. Zoek PromptTemplate op frameworkId in promptLibrary
3. Vul placeholders in template in
4. Stuur naar OpenAI gpt-4o-mini
5. Return { post, prompt, frameworkExplanation }
```

`frameworkExplanation` is een vaste string per framework uit `data/frameworks.ts` — geen extra AI-aanroep nodig.

---

## Pagina structuur (`app/page.tsx`)

```
<HeroSection />
<FilterPanel />          ← client-side state
<ResultPanel />          ← tabs: Post | Prompt | Uitleg
[optioneel] <CompareMode />
```

State in page.tsx:
```ts
const [filters, setFilters] = useState<GenerateRequest>({
  audienceId: 'student',
  platformId: 'tiktok',
  toneId: 'playful',
  frameworkId: 'role-based',
})
const [result, setResult] = useState<GenerateResponse | null>(null)
const [loading, setLoading] = useState(false)
```

Genereer-knop of auto-generate bij filter-wijziging (keuze bij implementatie).

---

## Component breakdown

### `HeroSection` — statisch, titel + tagline

### `FilterPanel`
Props: `{ filters, onChange, onGenerate, onRandom, loading }`
- 4 filter-groepen als klikbare cards/chips
- "Genereer" knop + "Random" knop

### `ResultPanel`
Props: `{ result: GenerateResponse | null, loading: boolean }`
- Loading state
- Tabs: Post | Prompt | Uitleg
- CopyButton per tab

### `CopyButton`
Props: `{ text: string }`
- `navigator.clipboard.writeText` + "Gekopieerd!" feedback

### `CompareMode` (bonus)
Props: `{ filters, secondFrameworkId, onSecondFrameworkChange }`
- Tweede framework selector
- Twee ResultPanel kolommen naast elkaar

---

## Visueel ontwerp richting
- Achtergrond: zinc-950, kaarten: zinc-900 of white
- Accent: indigo of violet
- Filters: klikbare pills/chips
- Tabs: underline-stijl
- Loading: skeleton of spinner in ResultPanel
- Responsive: stacked op mobile, grid op desktop

---

## Niet bouwen in MVP
- `data/examples.ts` (geen pre-written content meer)
- `InsightsSection`
- Persistentie / localStorage
- Multi-page routing
