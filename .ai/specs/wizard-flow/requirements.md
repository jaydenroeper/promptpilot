# Wizard Flow + Persona Systeem — Requirements

## Huidige staat (vertrekpunt)

De app heeft nu een sidebar (`FilterPanel.tsx`) met:
- Losse dropdowns: Doelgroep, Platform, Tone of voice
- Framework-kaarten (al goed)
- Topic input + Genereer / Random knoppen
- `app/page.tsx` is een flat component met `GenerateRequest` state

Data zit in: `data/audiences.ts`, `data/platforms.ts`, `data/tones.ts`, `data/frameworks.ts`, `data/promptLibrary.ts`

Types: `AudienceId`, `PlatformId`, `ToneId`, `FrameworkId`, `GenerateRequest` (bevat alle losse velden)

## Doel

Sidebar-filter UI omzetten naar een 3-stappen wizard. Losse audience/platform/tone dropdowns vervangen door
3 rijke persona-kaarten. Betere AI-output door volledige persona-context in prompts te injecteren.

## Stap 1: Persona + Topic

- 3 persona-kaarten (klikbaar): Student (Gen Z), Young Professional, Parent
- Topic invoerveld
- "Volgende" knop (disabled tot persona geselecteerd én topic ingevuld)

## Stap 2: Framework

- 6 framework-kaarten (bestaand, hergebruik stijl)
- "Terug" + "Genereer" knoppen

## Stap 3: Output

- Post / Prompt / Uitleg tabs (bestaande `ResultPanel`)
- Kopieer-functionaliteit
- "Opnieuw" (reset naar stap 1) + "Terug" knoppen

## Persona Config (AI Agent Ready)

```json
{
  "personas": [
    {
      "id": "student",
      "name": "Student (Gen Z)",
      "age_range": "18-24",
      "platform_primary": "TikTok",
      "platform_secondary": "Instagram Reels",
      "tone": ["informal", "playful", "relatable", "slightly chaotic"],
      "pain_points": ["doomscrolling", "lack of focus", "procrastination"],
      "motivations": ["better focus", "less screen time", "more control over time"],
      "content_rules": {
        "sentence_length": "short",
        "style": "hook-driven",
        "language": "simple",
        "avoid": ["corporate tone", "long explanations"]
      }
    },
    {
      "id": "young_professional",
      "name": "Young Professional",
      "age_range": "23-35",
      "platform_primary": "LinkedIn",
      "platform_secondary": "Instagram",
      "tone": ["professional", "clear", "insightful", "lightly inspirational"],
      "pain_points": ["distraction at work", "low productivity", "digital overload"],
      "motivations": ["efficiency", "career growth", "better focus"],
      "content_rules": {
        "sentence_length": "medium",
        "style": "insight-driven",
        "language": "clear and structured",
        "avoid": ["overhype", "cringe slang"]
      }
    },
    {
      "id": "parent",
      "name": "Parent",
      "age_range": "30-50",
      "platform_primary": "Instagram",
      "platform_secondary": "Facebook",
      "tone": ["warm", "empathetic", "trustworthy", "calm"],
      "pain_points": ["screen time children", "lack of balance", "family disconnect"],
      "motivations": ["healthy habits", "quality time", "family wellbeing"],
      "content_rules": {
        "sentence_length": "medium",
        "style": "storytelling",
        "language": "accessible",
        "avoid": ["judgmental tone", "technical jargon"]
      }
    }
  ]
}
```

## Prompt-injectie

Prompts krijgen volledige persona-context ipv simpele labels:
- `{{persona.name}}`, `{{persona.platform_primary}}`, `{{persona.tone}}` (joined string)
- `{{persona.pain_points}}`, `{{persona.content_rules.style}}`, `{{persona.content_rules.avoid}}`
- `{{topic}}`

Dit dwingt de AI om doelgroep-specifiek te schrijven ipv generiek.

## Navigatie

- Gebruiker kan terug naar vorige stap (state blijft behouden)
- Na output: kopieer of reset naar stap 1

## Terminologie

- "Mode" wordt "Framework" in de UI

## Responsiveness

- Mobiel: kaarten gestapeld (1 kolom)
- Desktop: persona's 3 kolommen, frameworks 2–3 kolommen
