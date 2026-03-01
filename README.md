# CopyDTC

**AI-powered copywriting agency for DTC (direct-to-consumer) brands.**

CopyDTC uses Claude and structured prompt templates to produce high-quality copy at agency speed — emails, landing pages, ads, blog posts, social content, product descriptions, and more. Every deliverable is built from a client-specific Brand Voice Bible so the output sounds like the brand, not like a robot.

---

## How This Project Is Organized

| Folder | What It Does |
|---|---|
| `/client-work` | Everything related to producing content for clients — prompt templates, brand guides, deliverables, and portfolio samples. This is the engine of the agency. |
| `/sales` | Outreach sequences, audit generators, proposals, partnership materials, and content marketing assets. Everything needed to find and close new clients. |
| `/operations` | Client onboarding system, delivery workflows, reporting templates, team SOPs, business documents, and the agency dashboard. The back office. |
| `/tools` | Standalone AI prompt tools — content generators and analyzers that power specific agency workflows. |
| `/website` | Source files for the CopyDTC marketing site. |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-org/copydtc.git
cd copydtc
```

### 2. Set up your environment

```bash
cp .env.example .env
```

Open `.env` and add your Anthropic API key. You can get one at [console.anthropic.com](https://console.anthropic.com).

### 3. Install dependencies

```bash
npm install
```

---

## Key Workflows

### Onboarding a New Client

1. Send the client questionnaire (`operations/onboarding/client-questionnaire.md`)
2. Run the completed questionnaire through the Brand Voice Bible generator (`operations/onboarding/brand-voice-generator-prompt.md`)
3. Follow the onboarding checklist day-by-day (`operations/onboarding/onboarding-checklist.md`)
4. Duplicate the client folder template (`operations/onboarding/client-folder-template/`) and rename it to the client's name
5. First deliverables go out by day 5-7

### Producing Content

1. Open the appropriate prompt template from `client-work/templates/`
2. Paste in the client's Brand Voice Bible variables at the top
3. Run the prompt in Claude
4. Review output against the quality checklist (`operations/delivery-system/quality-checklist.md`)
5. Deliver to client, file in their deliverables folder

### Sending Outreach

1. Find prospects and add them to the tracker (`sales/outreach/prospect-tracker.csv`)
2. Run the personalization prompt (`sales/outreach/personalization-prompt.md`) to customize your approach
3. Use the outreach sequences (`sales/outreach/outreach-sequence-*.md`) to send a multi-touch campaign
4. Track responses and follow up using the daily workflow (`sales/outreach/daily-outreach-workflow.md`)
5. When a prospect is interested, generate an audit (`sales/audits/audit-generator-prompt.md`) and proposal (`sales/proposals/proposal-generator-prompt.md`)

---

## Pricing Tiers

| Tier | Monthly | What's Included |
|---|---|---|
| **Starter** | $3,000 | Core content package — emails, product descriptions, basic social |
| **Growth** | $5,000 | Full content engine — emails, landing pages, blog posts, ads, social |
| **Scale** | $10,000 | Everything in Growth + dedicated strategy, advanced analytics, priority delivery |

---

## Tech Stack

- **AI**: Claude (Anthropic) for all content generation
- **Templates**: Markdown-based prompt templates with brand variable injection
- **Delivery**: Google Docs / Notion for client-facing deliverables
- **Email**: Klaviyo / Mailchimp integration for email content
- **Project Management**: Notion / Airtable for task tracking

---

## Contact

**Brad Bieselin**
brad@copydtc.com
[copydtc.com](https://copydtc.com)
