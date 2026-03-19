import type { PromptTemplate } from '@/types'

// Placeholders: {{audience}}, {{platform}}, {{tone}}, {{topic}}
// topic is altijd: "minder schermtijd en meer focus"

export const promptLibrary: PromptTemplate[] = [
  {
    id: 'role-based-v1',
    name: 'Role-Based Prompt',
    frameworkId: 'role-based',
    description: 'Geeft de AI een expliciete rol als content creator voor het gekozen platform.',
    template: `Je bent een ervaren {{platform}} content creator gespecialiseerd in gezondheid en digitaal welzijn.

Schrijf één {{platform}}-post voor de doelgroep: {{audience}}.
Onderwerp: {{topic}}.
Tone of voice: {{tone}}.

Schrijf de post alsof je volledig in die rol zit. Gebruik taal, humor en stijl die past bij {{platform}} en die {{audience}} direct aanspreekt.`,
  },
  {
    id: 'structured-output-v1',
    name: 'Structured Output Prompt',
    frameworkId: 'structured-output',
    description: 'Geeft de AI een verplichte structuur: hook, body, CTA en hashtags.',
    template: `Schrijf een {{platform}}-post voor {{audience}} over het onderwerp: {{topic}}.
Tone of voice: {{tone}}.

Gebruik exact deze structuur:
HOOK: één pakkende openingszin die direct de aandacht trekt
BODY: 2-3 zinnen met de kernboodschap
CTA: één duidelijke call-to-action
HASHTAGS: 3-5 relevante hashtags

Houd je strikt aan dit format.`,
  },
  {
    id: 'few-shot-v1',
    name: 'Few-Shot Prompt',
    frameworkId: 'few-shot',
    description: 'Geeft de AI voorbeeldposts mee zodat stijl en toon consistent worden.',
    template: `Schrijf een {{platform}}-post voor {{audience}} over: {{topic}}.
Tone of voice: {{tone}}.

Hier zijn twee voorbeelden van goede posts in deze stijl:

Voorbeeld 1:
"Je telefoon wint het niet van je hersenen — tenzij je dat toelaat. Probeer vandaag één uur zonder scherm. Wat merk je?"

Voorbeeld 2:
"3 uur scrollen. Wat heb je er voor terug? Meer focus begint met één bewuste keuze. Download de app en start vandaag."

Schrijf nu een nieuwe post in dezelfde stijl, maar met een frisse invalshoek voor {{audience}} op {{platform}}.`,
  },
  {
    id: 'chain-of-thought-v1',
    name: 'Chain-of-Thought Prompt',
    frameworkId: 'chain-of-thought',
    description: 'Laat de AI stapsgewijs redeneren voor inhoudelijk sterkere output.',
    template: `Je gaat een {{platform}}-post schrijven voor {{audience}} over: {{topic}}.
Tone of voice: {{tone}}.

Denk eerst stap voor stap na:
1. Wat is de grootste uitdaging van {{audience}} rondom schermtijd?
2. Welke boodschap raakt hen het meest op {{platform}}?
3. Hoe formuleer je die boodschap in een {{tone}} toon?

Schrijf daarna de definitieve post op basis van je analyse. Geef alleen de eindpost terug, niet de tussenstappen.`,
  },
  {
    id: 'style-tone-v1',
    name: 'Style / Tone Prompt',
    frameworkId: 'style-tone',
    description: 'Beschrijft nauwkeurig hoe de tekst moet klinken per platform en doelgroep.',
    template: `Schrijf een {{platform}}-post over: {{topic}}.
Doelgroep: {{audience}}.

Schrijfstijl voor {{platform}}:
- Toon: {{tone}}
- Zinslengte: kort en krachtig voor TikTok, iets langer voor LinkedIn, emotioneel voor Instagram
- Woordkeuze: gebruik taal die {{audience}} herkent en waardeert
- Energie: hoog en direct voor TikTok, reflectief en professioneel voor LinkedIn, warm en persoonlijk voor Instagram

Pas deze stijl consequent toe in de hele post.`,
  },
  {
    id: 'constraint-based-v1',
    name: 'Constraint-Based Prompt',
    frameworkId: 'constraint-based',
    description: 'Geeft de AI expliciete beperkingen voor scherpere, direct inzetbare output.',
    template: `Schrijf een {{platform}}-post voor {{audience}} over: {{topic}}.
Tone of voice: {{tone}}.

Houd je aan deze beperkingen:
- Maximaal 150 woorden
- Verplicht: één concrete call-to-action aan het einde
- Maximaal 3 emoji (0 voor LinkedIn)
- Verboden: clichés zoals "in deze drukke tijden" of "neem de regie"
- Verplicht: begin met een zin die direct de pijnpunt van {{audience}} benoemt

Lever alleen de definitieve post, geen uitleg.`,
  },
]
