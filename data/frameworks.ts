import type { Framework } from '@/types'

export const frameworks: Framework[] = [
  {
    id: 'role-based',
    name: 'Role-Based Prompting',
    goal: 'AI krijgt een specifieke rol of perspectief',
    description:
      'Je geeft de AI een expliciete identiteit zoals "social media strategist" of "TikTok creator". Dit zorgt voor een consistente schrijfstijl en een helder perspectief in de output.',
  },
  {
    id: 'structured-output',
    name: 'Structured Output Prompting',
    goal: 'Output krijgt een vaste structuur',
    description:
      'Je vraagt de AI om de content op te bouwen in een vast format: hook → body → CTA → hashtags. Dit levert direct inzetbare posts op zonder verdere opmaak.',
  },
  {
    id: 'few-shot',
    name: 'Few-Shot Prompting',
    goal: 'AI krijgt voorbeelden mee',
    description:
      'Je geeft de AI één of meer voorbeeldposts zodat de stijl, toon en structuur consistenter worden. Voorbeelden sturen beter dan alleen uitleg.',
  },
  {
    id: 'chain-of-thought',
    name: 'Chain-of-Thought Prompting',
    goal: 'AI wordt stapsgewijs gestuurd',
    description:
      'Je vraagt de AI om eerst na te denken over de doelgroep, het platform en de boodschap, voordat de post wordt geschreven. Dit leidt tot inhoudelijk sterkere output.',
  },
  {
    id: 'style-tone',
    name: 'Style / Tone Prompting',
    goal: 'Schrijfstijl expliciet afstemmen op platform en doelgroep',
    description:
      'Je beschrijft nauwkeurig hoe de tekst moet klinken: woordkeuze, zinslengte, energie, formeel of informeel. Zo sluit de post precies aan op het platform.',
  },
  {
    id: 'constraint-based',
    name: 'Constraint-Based Prompting',
    goal: 'AI krijgt duidelijke beperkingen',
    description:
      'Je stelt expliciete eisen: max. woorden, verplichte CTA, max. emoji, verplicht een statistiek, verboden clichés. Beperkingen maken de output scherper en bruikbaarder.',
  },
]
