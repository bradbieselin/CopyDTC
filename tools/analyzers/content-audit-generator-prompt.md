# Content Audit Generator Prompt

> **Purpose:** Standalone Claude prompt for generating comprehensive content audits of any DTC brand's marketing presence. More detailed than the sales audit — this is the full diagnostic tool.
> **Status:** Scaffold — full content to be built in subsequent prompts
> **Used by:** Brad for deep-dive content analysis of prospects or new clients during onboarding

## Contents

### The Prompt
- Input: brand name and website URL
- Input: all available content to analyze (emails, landing pages, ads, social, blog)
- Input: competitor URLs for benchmarking (2-3 competitors)
- Input: the brand's stated goals (if known)

### Output Sections
1. **Audit Overview** — overall content health score (1-10) with explanation
2. **Channel Scores** — individual scores for each active channel
3. **Brand Voice Consistency** — does the brand sound the same across all channels?
4. **Messaging Effectiveness** — are key messages coming through clearly?
5. **Conversion Path Analysis** — how well does content guide visitors toward purchase?
6. **SEO Assessment** — keyword coverage, content gaps, technical observations
7. **Competitive Benchmarking** — how they compare to competitors on each channel
8. **Content Gap Analysis** — what content they should have but don't
9. **Priority Recommendations** — top 10 actions ranked by impact and effort
10. **90-Day Content Roadmap** — suggested plan for fixing the biggest issues

### Quality Bar
- Audit should be specific enough to act on immediately
- Every score must be justified with specific examples
- Recommendations should be prioritized by ROI potential
- Total output: 5-8 pages of detailed analysis
