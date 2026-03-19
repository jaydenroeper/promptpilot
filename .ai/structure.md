# Structure

## Root
Keep the root focused on app entrypoints, config, and project-wide docs. Important top-level areas in this repo are `app/`, `public/`, and `.ai/`.

## /app
Main application code lives in `app/` using the Next.js App Router. Routes, layouts, and route-specific UI should stay close to the route that owns them.

## /.ai
All agent context files live in `.ai/`. This folder defines product intent, technical constraints, structure, and workflow rules.

## Components / Modules
Group code by feature first, not by type alone. Keep small route-local components near their route. Extract shared UI or logic only when multiple features use it or duplication becomes noisy.

## Specs
Create specs only when needed in `.ai/specs/<feature>/`.

Each spec contains:
- `requirements.md`
- `plan.md`
- `tasks.md`
