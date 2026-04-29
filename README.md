# GHL + n8n Revenue Tracking System

A full-stack lead tracking and revenue attribution system built for a 
7-figure trading coach based in the UAE. Connects Facebook Ads, 
GoHighLevel, n8n, the Meta Ads API, and Airtable into a single 
closed-loop pipeline — so every dollar spent on ads is tied to every 
dollar collected from leads.

## The Problem It Solves

Marketing agencies and coaches running paid ads often have no clear 
picture of which campaigns, ad sets, or creatives are actually 
generating revenue — not just leads. This system closes that gap 
entirely.

Without it: ad spend decisions are made on gut feel, dead campaigns 
burn five-figure budgets, and cash collected is tracked manually or 
not at all.

## What It Does

- Captures leads from Facebook Ads with full contact data, campaign 
  name, ad set, and ad source via n8n webhooks
- Syncs Meta Ads spend data daily via the Meta Ads API
- Tracks cash collected per lead using GHL tag-based triggers
- Monitors pipeline stage movement across the full sales funnel
- Calculates and displays CPL, ROAS, total cash collected, and 
  pipeline metrics on a live Airtable dashboard

## Results

- Gives the client visibility to cut or scale campaigns based on 
  actual revenue data — protecting against **$5-figures a month** in 
  spend on underperforming ads

## Stack

| Tool | Role |
|------|------|
| Facebook Ads | Lead source |
| Meta Ads API | Ad spend data |
| GoHighLevel | CRM, pipeline, tag triggers |
| n8n | Automation backbone (7 workflows) |
| Airtable | Data storage + live dashboard |

## Screenshots

### n8n Workflows
![New Lead Capture](n8n-workflows/screenshots/new%20lead%20capture.png)
![Booked Appointment](n8n-workflows/screenshots/booked%20appointment%20workflow.png)
![Campaign and Ad Label Update](n8n-workflows/screenshots/campaign%20and%20ad%20label%20update.png)
![Cash Collected](n8n-workflows/screenshots/cash%20collected%20workflow.png)
![Meta API to Airtable](n8n-workflows/screenshots/meta-api%20to%20airtable.png)
![Pipeline Stage Sync](n8n-workflows/screenshots/pipeline%20stage%20sync.png)

### GoHighLevel Workflows
![GHL Workflow 1](ghl-workflows/screenshots/Screenshot%202026-04-28%20142932.png)
![GHL Workflow 2](ghl-workflows/screenshots/Screenshot%202026-04-28%20142945.png)
![GHL Workflow 3](ghl-workflows/screenshots/Screenshot%202026-04-28%20142955.png)

### Airtable Dashboard
![Dashboard 1](airtable/Screenshot%202026-04-28%20145009.png)
![Dashboard 2](airtable/Screenshot%202026-04-28%20145022.png)
![Dashboard 3](airtable/Screenshot%202026-04-28%20145033.png)

## Workflow Overview

**n8n (7 workflows)**
- Lead capture + source attribution
- Meta ad spend sync
- Cash collected tracker
- Pipeline stage sync
- Airtable dashboard updater

**GoHighLevel (3 workflows)**
- Tag-based payment capture trigger
- Pipeline stage change trigger
- Lead assignment automation

## Structure

\`\`\`
├── n8n-workflows/        # JSON exports + screenshots
├── ghl-workflows/        # Screenshots + logic notes
├── airtable/             # Dashboard screenshot + base structure
└── docs/                 # System architecture overview
\`\`\`
