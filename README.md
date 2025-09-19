
# CortexOne — Enterprise Cross-Domain AI Copilot

![CortexOne Logo](/logo.svg)

CortexOne is a polished, demo-ready enterprise AI dashboard that unifies HR, Finance, and Customer Care intelligence into a single co-pilot. This repository contains the frontend mockups, live-looking charts (driven by local mock JSON), and reusable UI components so your team can iterate quickly and connect real models during the hackathon.

We built this to win — focused on clarity, speed, and a professional first impression.

Why CortexOne for the hackathon?
- Single-pane cross-domain insights (HR + Finance + Support) so judges see direct business value.
- Reusable mock data endpoints to simulate live behavior for demos.
- Polished, responsive UI for mobile, tablet, laptop and large monitors.
- Charts and data contract docs so you can plug model outputs quickly during the hackathon.

--------------------------------------------------------------------------------

## Live demo (local)

Start the dev server (Vite):

```bash
npm i
npm run dev
```

By default Vite will pick an available port and serve the app locally. Open the printed URL (for example: http://localhost:5173 or http://localhost:8081).

--------------------------------------------------------------------------------

## Project structure (short)

- `src/` — React + TypeScript source
	- `components/` — UI primitives and mockup components (see `mockups/`)
	- `pages/` — HR, Finance, Support, Dashboard, Demo pages
	- `components/mockups/` — HRMockup, FinanceMockup, SupportMockup (connected to local mock JSON)
- `public/mock-data/` — JSON files used to simulate live API responses (hr.json, finance.json)
- `public/logo.svg` — project logo used in the app and README

--------------------------------------------------------------------------------

## What we implemented

- Responsive, modern dashboard UI with a cross-domain performance chart (HR / Finance / Support).
- HR and Finance mockups with charts driven from `public/mock-data/*.json`.
- Support mockup for call triage + SLA view.
- Animated orb branding in the hero with a static logo.
- Clean componentization so model outputs can be injected into the UI quickly.

--------------------------------------------------------------------------------

## How to demo at the hackathon (quick script)

1. Clone the repo and install dependencies:

```bash
git clone <YOUR-REPO>
cd cortex-one-ai
npm i
```

2. Start the dev server and open the app:

```bash
npm run dev
```

3. Show the Dashboard first — the Cross-Domain Performance Trends chart demonstrates unified value.
4. Open the Finance page and run the invoice upload demo; show how the chart and mock anomalies appear.
5. Open the HR page to show candidate insights and the funnel.
6. Use the Demo page to run sample demo flows for judges.

Tip: the mock JSON in `public/mock-data/` can be edited live and the app will reflect changes without restarting.

--------------------------------------------------------------------------------

## Data contracts / Mock API (for model training)

We added simple JSON endpoints you can use to train and validate models during the hackathon. Files live under `public/mock-data/` and are fetched from the client as `/mock-data/*.json`.

- `hr.json` (example):
```json
{
	"pipeline": [ { "stage": "Applied", "count": 452 }, ... ],
	"diversity": [ { "label": "Male", "value": 58 }, { "label": "Female", "value": 42 } ]
}
```

- `finance.json` (example):
```json
{
	"outstanding": [ { "month": "Nov", "outstanding": 180000, "paid": 320000 }, ... ],
	"gst": [ { "name": "Compliant", "value": 85 }, { "name": "Pending Review", "value": 12 } ]
}
```

During the hackathon you can replace or extend these files with real model outputs (e.g., per-candidate JSON with leadership scores, per-invoice anomaly flags, or per-call sentiment & intent). The UI expects the shapes above and is easy to update if your model returns additional fields.

--------------------------------------------------------------------------------