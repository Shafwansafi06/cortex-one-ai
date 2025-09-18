# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e472eae1-a47c-492c-b719-35137ea036c1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e472eae1-a47c-492c-b719-35137ea036c1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

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

## Suggested hackathon plan (90 minutes)

- 0–10m: Project quick setup and run locally.
- 10–30m: Hook simple model stubs — swap `public/mock-data/*.json` with model output.
- 30–60m: Integrate one real lightweight model (e.g., a sentiment model for Support or invoice anomaly scoring for Finance). Use batch mode — call model offline and store JSON into `public/mock-data/`.
- 60–85m: Polish UI, add legends, and ensure the Dashboard shows the cross-domain insight as a single story.
- 85–90m: Prepare a 3-minute demo narrative and highlight action items the AI recommends.

--------------------------------------------------------------------------------

## Screenshots & assets

- Logo used in the app: `public/logo.svg` — shown at the top of this README.
- To create nicer screenshots for the judge deck, open pages and use the browser screenshot tool; crop to highlight the cross-domain chart and a selected insight.

--------------------------------------------------------------------------------

## Win strategy (how to present to judges)

- Begin with a clear one-sentence problem statement: "CortexOne connects HR, Finance, and Customer Care to find business-impacting correlations in minutes." 
- Show the Dashboard: cross-domain chart + one insight card that tells a short story (e.g., invoice delays correlate with churn). 
- Drill to the Finance mockup to show anomaly detection and then to HR to show candidate evaluation — explain how this leads to prioritized actions.
- End with the model plan and how more data will make recommendations stronger.

--------------------------------------------------------------------------------

## Next steps (post-hackathon)

- Add a small backend to serve model predictions and a caching layer.
- Add user auth and RBAC for enterprise deployment.
- Implement real-time streaming ingestion for call transcripts.
- Add e2e tests and CI for reproducible demos.

--------------------------------------------------------------------------------

Good luck — let's win that ₹2,00,000 prize! If you want, I can also:
- Add a one-page slide-ready screenshot export button.
- Create a short demo script (3-minute script) tailored for judges.
- Add a minimal server that returns simple model predictions so the UI can call it during the live demo.

Tell me which of those you'd like next and I'll implement it.
