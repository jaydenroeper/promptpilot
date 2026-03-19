import type { PromptTemplate } from '@/types'

// Placeholders: {{audience}}, {{platform}}, {{tone}}, {{topic}}

export const promptLibrary: PromptTemplate[] = [
  {
    id: 'core-v1',
    name: 'C.O.R.E. Prompt',
    frameworkId: 'core',
    description: 'Geeft de AI context, een concreet doel, een rol en een voorbeeldstructuur.',
    template: `[Context]
We maken een {{platform}}-post over: {{topic}}.
De doelgroep is {{audience}}.

[Objective]
Schrijf één pakkende {{platform}}-post die {{audience}} aanzet tot meer bewustzijn over schermtijd en focus.

[Role]
Je bent een ervaren {{platform}} content creator gespecialiseerd in digitaal welzijn.
Gebruik taal, humor en stijl die past bij {{platform}} en {{audience}}.

[Example]
Een goede post voor dit platform begint met een sterke openingszin, bevat een concrete tip of inzicht, en sluit af met een vraag of call-to-action.

Tone of voice: {{tone}}.
Lever alleen de definitieve post.`,
  },
  {
    id: 'create-v1',
    name: 'C.R.E.A.T.E. Prompt',
    frameworkId: 'create',
    description: 'Stuurt de AI op context, rol, voorbeeld, doelgroep, toon én einddoel tegelijk.',
    template: `[Context]
Het onderwerp is: {{topic}}.
Platform: {{platform}}.

[Role]
Je bent een content strateeg die schrijft voor merken in de gezondheids- en productiviteitsruimte.

[Example]
Een sterke {{platform}}-post opent met een herkenbare situatie, bouwt op naar een inzicht en eindigt met een duidelijke actie.

[Audience]
Doelgroep: {{audience}}.
Spreek hen direct aan in taal en toon die bij hun leefwereld past.

[Tone]
Tone of voice: {{tone}}.

[End Goal]
De post moet {{audience}} op {{platform}} overtuigen om bewuster om te gaan met schermtijd.
Lever alleen de definitieve post.`,
  },
  {
    id: 'risen-v1',
    name: 'R.I.S.E.N. Prompt',
    frameworkId: 'risen',
    description: 'Laat de AI een nuanced, onderbouwd stuk schrijven vanuit een expertperspectief.',
    template: `[Role]
Je bent een digitaal welzijn expert en content specialist voor {{platform}}.

[Input]
Onderwerp: {{topic}}.
Doelgroep: {{audience}}.
Platform: {{platform}}.

[Scenario]
{{audience}} heeft moeite met schermtijd en concentratie in hun dagelijkse leven.
Ze gebruiken {{platform}} regelmatig en zijn ontvankelijk voor praktische inzichten.

[Expectation]
Schrijf een {{platform}}-post die het probleem benoemt, een onderbouwd inzicht biedt en een concrete aanbeveling geeft.
Tone of voice: {{tone}}.

[Nuance]
Houd rekening met zowel mensen die net beginnen met digitale detox als mensen die al bewust bezig zijn.
Vermijd zwart-wit denken. Lever alleen de definitieve post.`,
  },
  {
    id: 'para-v1',
    name: 'P.A.R.A. Prompt',
    frameworkId: 'para',
    description: 'Structureert de post als een oplossingsgerichte analyse: probleem → actieplan.',
    template: `[Problem]
{{audience}} op {{platform}} kampt met: {{topic}}.
Ze herkennen het probleem maar weten niet waar te beginnen.

[Analysis]
De oorzaak ligt in gewoontes, omgeving en de verslavende werking van apps.
Dit raakt zowel productiviteit als mentale gezondheid.

[Recommendation]
Kleine, concrete gedragsveranderingen hebben meer effect dan radicale detox.
Één bewuste keuze per dag maakt al verschil.

[Action]
Schrijf een {{platform}}-post voor {{audience}} die dit inzicht vertaalt naar een directe, uitvoerbare tip.
Tone of voice: {{tone}}.
Lever alleen de definitieve post.`,
  },
  {
    id: 'dare-v1',
    name: 'D.A.R.E. Prompt',
    frameworkId: 'dare',
    description: 'Bouwt een emotioneel verbindend verhaal via scene-setting, actie en versterking.',
    template: `[Describe]
Schets een herkenbare scène waarin {{audience}} worstelt met schermtijd of focusverlies in hun dagelijks leven.

[Act]
Introduceer het idee van {{topic}} als de wending — het moment waarop de keuze wordt gemaakt.

[Resonate]
Zorg dat {{audience}} zich gezien en begrepen voelt. Spreek hun emotie aan, niet alleen hun ratio.
Tone of voice: {{tone}}.

[Elevate]
Sluit af met een zin die inspireert en aanzet tot actie. Maak de boodschap groter dan het individu.

Platform: {{platform}}.
Lever alleen de definitieve post.`,
  },
  {
    id: 'road-v1',
    name: 'R.O.A.D. Prompt',
    frameworkId: 'road',
    description: 'Laat de AI opties afwegen en een onderbouwde aanbeveling geven.',
    template: `[Recognize]
Het kernprobleem voor {{audience}} op {{platform}}: {{topic}}.
Dit heeft directe impact op hun productiviteit en welzijn.

[Options]
Er zijn meerdere manieren om hiermee om te gaan:
1. Digitale detox (volledig stoppen)
2. Tijdslimieten instellen per app
3. Bewuste schermvrije momenten inplannen

[Analyze]
Weeg de voor- en nadelen van elke optie af voor {{audience}} specifiek.
Houd rekening met hun leefstijl en realistische haalbaarheid.

[Decide]
Geef een heldere aanbeveling en schrijf dit om naar een {{platform}}-post voor {{audience}}.
Tone of voice: {{tone}}.
Lever alleen de definitieve post.`,
  },
]
