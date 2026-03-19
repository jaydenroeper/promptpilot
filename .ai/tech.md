# Tech

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Principles
- simplicity over completeness
- MVP first
- minimal dependencies
- readable code

## Architecture
Single Next.js app using the App Router. Keep UI, server logic, and API boundaries in one repo and add route handlers or server actions only when needed.

## State & Data
Start with local component state and lightweight in-repo mock data. Avoid a database until persistence is clearly required. Introduce server-side storage only for proven needs such as saved prompt presets.

## AI Integration
Construct prompts from a small set of inputs: system intent, reusable template, user variables, and target channel. Keep prompt templates explicit and versionable in code. Start with a thin server-side integration boundary so model providers can change without rewriting the UI.
