# Wizard Flow + Persona Systeem — Requirements

## Doel
Omzetten van sidebar-filter UI naar een 3-stappen wizard met rijk persona-systeem. Fix AI-kwaliteit door volledige persona-context in prompts te injecteren.

## Stappen

### Stap 1: Persona + Topic
- 3 persona-kaarten: Student (Gen Z), Young Professional, Parent
- Topic invoerveld
- "Volgende" knop (disabled tot beide ingevuld)

### Stap 2: Framework
- 6 framework-kaarten met naam, label, beschrijving, doel
- "Terug" + "Genereer" knoppen

### Stap 3: Output
- Post / Prompt / Uitleg tabs (bestaande ResultPanel)
- Kopieer-functionaliteit
- "Opnieuw" (reset) + "Terug" knoppen

## Persona Systeem
Elke persona bevat:
- id, name, age_range
- platform_primary, platform_secondary
- tone[] (array van tonen)
- pain_points[], motivations[]
- content_rules (sentence_length, style, language, avoid[])

Persona's vervangen de losse audience/platform/tone dropdowns volledig.

## AI-fix
Prompts krijgen nu volledige persona-context ipv simpele labels. Dit geeft de AI genoeg informatie om doelgroep-specifieke content te genereren.

## Navigatie
- Gebruiker kan terug naar vorige stap (state blijft behouden)
- Na output: kopieer of opnieuw starten

## Terminologie
- "Mode" wordt "Framework" overal in de UI

## Responsiveness
- Mobiel: kaarten gestapeld (1 kolom)
- Desktop: persona's 3 kolommen, frameworks 2 kolommen
