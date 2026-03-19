import type { PromptTemplate } from '@/types'

// Placeholders: {{persona_name}}, {{platform}}, {{tone}}, {{style}}, {{pain_points}}, {{avoid}}, {{topic}}

export const promptLibrary: PromptTemplate[] = [
  {
    id: 'core-v1',
    name: 'C.O.R.E. Prompt',
    frameworkId: 'core',
    description: 'Geeft de AI context, een concreet doel, een rol en een voorbeeldstructuur.',
    template: `[Context]
We maken een {{platform}}-post over: {{topic}}.
Doelgroep: {{persona_name}}.
Bekende pijnpunten: {{pain_points}}.

[Objective]
Schrijf één pakkende {{platform}}-post die {{persona_name}} aanzet tot meer bewustzijn over schermtijd en focus.

[Role]
Je bent een ervaren {{platform}} content creator gespecialiseerd in digitaal welzijn.
Schrijfstijl: {{style}}. Toon: {{tone}}.
Vermijd: {{avoid}}.

[Example]
Een goede post voor dit platform begint met een sterke openingszin, bevat een concrete tip of inzicht, en sluit af met een vraag of call-to-action.

Lever alleen de definitieve post.`,
  },
  {
    id: 'create-v1',
    name: 'C.R.E.A.T.E. Prompt',
    frameworkId: 'create',
    description: 'Stuurt de AI op context, rol, voorbeeld, doelgroep, toon én einddoel tegelijk.',
    template: `[Context]
Onderwerp: {{topic}}. Platform: {{platform}}.

[Role]
Je bent een content strateeg voor digitaal welzijn.
Schrijfstijl: {{style}}. Vermijd: {{avoid}}.

[Example]
Een sterke {{platform}}-post opent met een herkenbare situatie voor {{persona_name}}, bouwt op naar een inzicht en eindigt met een duidelijke actie.

[Audience]
Doelgroep: {{persona_name}}.
Pijnpunten: {{pain_points}}.

[Tone]
Toon: {{tone}}.

[End Goal]
De post moet {{persona_name}} op {{platform}} overtuigen om bewuster om te gaan met schermtijd.
Lever alleen de definitieve post.`,
  },
  {
    id: 'risen-v1',
    name: 'R.I.S.E.N. Prompt',
    frameworkId: 'risen',
    description: 'Laat de AI een nuanced, onderbouwd stuk schrijven vanuit een expertperspectief.',
    template: `[Role]
Je bent een digitaal welzijn expert en {{style}} content specialist voor {{platform}}.
Toon: {{tone}}. Vermijd: {{avoid}}.

[Input]
Onderwerp: {{topic}}.
Doelgroep: {{persona_name}}.
Platform: {{platform}}.

[Scenario]
{{persona_name}} herkent de volgende pijnpunten: {{pain_points}}.
Ze zijn open voor praktische inzichten die passen bij hun leven.

[Expectation]
Schrijf een {{platform}}-post die het probleem benoemt, een onderbouwd inzicht biedt en een concrete aanbeveling geeft.

[Nuance]
Houd rekening met zowel mensen die net beginnen als mensen die al actief werken aan digitale balans.
Lever alleen de definitieve post.`,
  },
  {
    id: 'para-v1',
    name: 'P.A.R.A. Prompt',
    frameworkId: 'para',
    description: 'Structureert de post als een oplossingsgerichte analyse: probleem → actieplan.',
    template: `[Problem]
{{persona_name}} op {{platform}} kampt met: {{pain_points}}.
Ze herkennen het probleem maar weten niet waar te beginnen.

[Analysis]
De oorzaak ligt in gewoontes, omgeving en de verslavende werking van apps.
Context van het onderwerp: {{topic}}.

[Recommendation]
Kleine, concrete gedragsveranderingen hebben meer effect dan radicale detox.
Schrijfstijl: {{style}}. Toon: {{tone}}.

[Action]
Schrijf een {{platform}}-post voor {{persona_name}} die dit vertaalt naar een directe, uitvoerbare tip.
Vermijd: {{avoid}}.
Lever alleen de definitieve post.`,
  },
  {
    id: 'dare-v1',
    name: 'D.A.R.E. Prompt',
    frameworkId: 'dare',
    description: 'Bouwt een emotioneel verbindend verhaal via scene-setting, actie en versterking.',
    template: `[Describe]
Schets een herkenbare scène waarin {{persona_name}} worstelt met: {{pain_points}}.
Stijl: {{style}}. Toon: {{tone}}.

[Act]
Introduceer {{topic}} als de wending — het moment waarop de keuze wordt gemaakt.

[Resonate]
Zorg dat {{persona_name}} zich gezien en begrepen voelt. Spreek hun emotie aan, niet alleen hun ratio.
Vermijd: {{avoid}}.

[Elevate]
Sluit af met een zin die inspireert en aanzet tot actie.

Platform: {{platform}}.
Lever alleen de definitieve post.`,
  },
  {
    id: 'road-v1',
    name: 'R.O.A.D. Prompt',
    frameworkId: 'road',
    description: 'Laat de AI opties afwegen en een onderbouwde aanbeveling geven.',
    template: `[Recognize]
Het kernprobleem voor {{persona_name}} op {{platform}}: {{pain_points}}.
Context: {{topic}}.

[Options]
Er zijn meerdere manieren om hiermee om te gaan:
1. Digitale detox (volledig stoppen)
2. Tijdslimieten instellen per app
3. Bewuste schermvrije momenten inplannen

[Analyze]
Weeg de opties af voor {{persona_name}} specifiek. Stijl: {{style}}.
Houd rekening met hun leefstijl en realistische haalbaarheid.

[Decide]
Geef een heldere aanbeveling en schrijf dit om naar een {{platform}}-post.
Toon: {{tone}}. Vermijd: {{avoid}}.
Lever alleen de definitieve post.`,
  },
]
