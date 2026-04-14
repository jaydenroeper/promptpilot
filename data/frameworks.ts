import type { Framework } from '@/types'

export const frameworks: Framework[] = [
  {
    id: 'core',
    name: 'C.O.R.E.',
    goal: 'Snelle, heldere prompts voor short-form content',
    description:
      'C.O.R.E. staat voor Context · Objective · Role · Example. Je geeft de AI achtergrond, een concreet doel, een expliciete rol én een voorbeeldstructuur. Eenvoudig en effectief voor LinkedIn posts, ad copy en e-mail subject lines.',
    label: 'Fast',
    shortDescription: 'Snel en helder, voor short-form posts',
    technicalName: 'C.O.R.E.',
  },
  {
    id: 'create',
    name: 'C.R.E.A.T.E.',
    goal: 'Maximale creativiteit én precisie',
    description:
      'C.R.E.A.T.E. staat voor Context · Role · Example · Audience · Tone · End Goal. Dit framework stuurt op merk, doelgroep én gewenst resultaat tegelijk. Ideaal voor brand messaging, lange blogposts en video scripts.',
    label: 'Creative',
    shortDescription: 'Maximale creativiteit én precisie',
    technicalName: 'C.R.E.A.T.E.',
  },
  {
    id: 'risen',
    name: 'R.I.S.E.N.',
    goal: 'Analyse & thought leadership',
    description:
      'R.I.S.E.N. staat voor Role · Input · Scenario · Expectation · Nuance. De AI krijgt data, een realworld scenario en de opdracht om meerdere perspectieven mee te nemen. Sterk voor whitepapers, LinkedIn artikelen en strategie-analyses.',
    label: 'Smart',
    shortDescription: 'Analyse en thought leadership',
    technicalName: 'R.I.S.E.N.',
  },
  {
    id: 'para',
    name: 'P.A.R.A.',
    goal: 'Probleemoplossing',
    description:
      'P.A.R.A. staat voor Problem · Analysis · Recommendation · Action. De AI breekt een marketingprobleem op in vier stappen en levert een concrete actieplan. Ideaal voor performance reports, campagne-optimalisatie en crisis management.',
    label: 'Structured',
    shortDescription: 'Probleem → oplossing, stap voor stap',
    technicalName: 'P.A.R.A.',
  },
  {
    id: 'dare',
    name: 'D.A.R.E.',
    goal: 'Creativiteit & storytelling',
    description:
      'D.A.R.E. staat voor Describe · Act · Resonate · Elevate. Je zet een scène, definieert de kernactie, stuurt op emotionele verbinding en vraagt om versterking van impact. Perfect voor merkstories en creatieve campagneconcepts.',
    label: 'Story',
    shortDescription: 'Emotioneel verbindende storytelling',
    technicalName: 'D.A.R.E.',
  },
  {
    id: 'road',
    name: 'R.O.A.D.',
    goal: 'Besluitvorming & strategie',
    description:
      'R.O.A.D. staat voor Recognize · Options · Analyze · Decide. De AI identificeert het kernprobleem, presenteert meerdere opties, weegt de voor- en nadelen en geeft een onderbouwde aanbeveling. Sterk voor strategische marketingkeuzes.',
    label: 'Strategic',
    shortDescription: 'Vergelijkt opties, geeft aanbeveling',
    technicalName: 'R.O.A.D.',
  },
]
