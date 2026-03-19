import type { Persona } from '@/types'

export const personas: Persona[] = [
  {
    id: 'student',
    name: 'Student (Gen Z)',
    age_range: '18-24',
    platform_primary: 'TikTok',
    platform_secondary: 'Instagram Reels',
    tone: ['informal', 'playful', 'relatable', 'slightly chaotic'],
    pain_points: ['doomscrolling', 'lack of focus', 'procrastination'],
    motivations: ['better focus', 'less screen time', 'more control over time'],
    content_rules: {
      sentence_length: 'short',
      style: 'hook-driven',
      language: 'simple',
      avoid: ['corporate tone', 'long explanations'],
    },
  },
  {
    id: 'young_professional',
    name: 'Young Professional',
    age_range: '23-35',
    platform_primary: 'LinkedIn',
    platform_secondary: 'Instagram',
    tone: ['professional', 'clear', 'insightful', 'lightly inspirational'],
    pain_points: ['distraction at work', 'low productivity', 'digital overload'],
    motivations: ['efficiency', 'career growth', 'better focus'],
    content_rules: {
      sentence_length: 'medium',
      style: 'insight-driven',
      language: 'clear and structured',
      avoid: ['overhype', 'cringe slang'],
    },
  },
  {
    id: 'senior',
    name: 'Senior',
    age_range: '55+',
    platform_primary: 'Facebook',
    platform_secondary: 'WhatsApp',
    tone: ['warm', 'trustworthy', 'clear', 'calm'],
    pain_points: ['digital overwhelm', 'too much screen time', 'social isolation'],
    motivations: ['staying connected', 'simplicity', 'health and wellbeing'],
    content_rules: {
      sentence_length: 'medium',
      style: 'storytelling',
      language: 'accessible',
      avoid: ['technical jargon', 'slang'],
    },
  },
]
