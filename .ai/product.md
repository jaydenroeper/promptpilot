# Product

## Overview

PromptPilot is een interactieve demo-app die laat zien hoe AI-prompts voor social media content veranderen per
persona, prompt-framework en onderwerp.

Gebouwd voor een hackathonopdracht: aantonen dat een slimme promptstrategie AI-output bruikbaarder, consistenter en
doelgroep-specifieker maakt.

## Centrale boodschap

"Deze app helpt gebruikers minder schermtijd te hebben en meer focus te krijgen."

Alle gegenereerde content vertaalt deze boodschap anders per persona en platform.

## Gebruikers

- Jury / docenten die de demo beoordelen
- Gebruikers die de app doorlopen tijdens de hackathon-presentatie

## Kern functionaliteit

1. Kies een persona (student, young professional, parent) via kaarten
2. Vul een onderwerp in
3. Kies een prompt-framework
4. Genereer social media content via OpenAI (gpt-4o-mini)
5. Zie de bijbehorende prompt die werd gebruikt
6. Lees uitleg waarom dit framework werkt

## Persona's (vervangen losse doelgroep/platform/tone dropdowns)

Elke persona bundelt platform, tone en gedragscontext in één object — direct injecteerbaar in prompts.

### Student (Gen Z)
- Leeftijd: 18–24 | Platform: TikTok / Instagram Reels
- Tone: informal, playful, relatable, slightly chaotic
- Pain points: doomscrolling, lack of focus, procrastination
- Content rules: short sentences, hook-driven, simple language

### Young Professional
- Leeftijd: 23–35 | Platform: LinkedIn / Instagram
- Tone: professional, clear, insightful, lightly inspirational
- Pain points: distraction at work, low productivity, digital overload
- Content rules: medium sentences, insight-driven, clear and structured

### Parent
- Leeftijd: 30–50 | Platform: Instagram / Facebook
- Tone: warm, empathetic, trustworthy, calm
- Pain points: screen time children, lack of balance, family disconnect
- Content rules: medium sentences, storytelling, accessible language

## Prompt-frameworks

1. C.O.R.E. — Snelle, heldere prompts voor short-form content
2. C.R.E.A.T.E. — Maximale creativiteit én precisie
3. R.I.S.E.N. — Analyse & thought leadership
4. P.A.R.A. — Probleemoplossing
5. D.A.R.E. — Creativiteit & storytelling
6. R.O.A.D. — Besluitvorming & strategie

## SDG-koppelingen (subtiel verwerken)

- SDG 3: Good Health & Well-being (schermtijd, focus, welzijn)
- SDG 4: Quality Education (studenten, leren)
- SDG 8: Decent Work & Economic Growth (productiviteit, young professionals)

## Non-Goals

- Uitlegpagina's of statische insights secties
- Auth of user accounts
- Database of persistente opslag
- Multi-page routing (single page is voldoende voor demo)
- Complexe backend

## Succescriteria

- Jury kan in < 30 seconden begrijpen wat de app doet
- Promptvariaties zijn zichtbaar en begrijpelijk
- App is direct demonstreerbaar zonder uitleg
