# AUTONOMOUS CONTENT ENGINE - SETUP GUIDE

This site runs on an autonomous content pipeline powered by 6 AI agents that research, update, and publish content automatically via Claude Code scheduled tasks.

## PREREQUISITES

- GitHub repo connected to Claude Code
- Vercel or Netlify connected to GitHub for auto-deploy
- Claude Pro or Max plan for scheduled tasks
- Optional: Eventbrite API token, PredictHQ API token, Perplexity API key, IndexNow API key

## AGENT SCHEDULE

| Time | Agent | File | Frequency |
|------|-------|------|-----------|
| Daily 4:00am | Freshness Manager | agents/freshness-manager.md | Daily |
| Daily 5:00am | Events Scout | agents/events-scout.md | Daily |
| Mon/Thu 6:00am | Market Analyst | agents/market-analyst.md | 2x/week |
| Mon/Fri 6:00am | Trail Ranger | agents/trail-ranger.md | 2x/week (daily Jun-Sep) |
| Wed/Sat 7:00am | Content Strategist | agents/content-strategist.md | 2x/week |
| Sunday 8:00am | Quality Auditor | agents/quality-auditor.md | Weekly |

**Freshness Manager** - Updates timestamps, banner dates, sitemap, IndexNow pings

**Events Scout** - Refreshes event listings with current Arizona events

**Market Analyst** - Updates real estate prices and market conditions

**Trail Ranger** - Checks trail conditions, closures, heat restrictions

**Content Strategist** - Researches and publishes new articles

**Quality Auditor** - Reviews the week's changes and generates audit report

## SETUP STEPS

1. Push your repo to GitHub
2. Connect your GitHub repo to Vercel or Netlify for auto-deploy from the main branch
3. Go to claude.ai/code/scheduled
4. Create 6 scheduled tasks, one for each agent
5. For each task:
  - Name: the agent name (Events Scout, Market Analyst, etc.)
  - Prompt: Read the file agents/[agent-name].md in this repo and follow its instructions exactly. Use web search to research current information. Commit and push your changes when done.
  - Repository: your GitHub repo URL
  - Schedule: use the cron expressions below
  - Environment: enable network access, add any API keys as environment variables

## MLS API INTEGRATION

Incyte Realty is building a direct MLS API interface. When ready:
1. Set the MLS_API_ENDPOINT environment variable in each Claude Code scheduled task that needs market data
2. The Market Analyst agent will automatically detect the API and use it as the primary data source
3. This eliminates the need for web research entirely for pricing data
4. The API provides real-time ARMLS data that is more accurate than any public source
5. This is the ultimate competitive advantage - no other Arizona tourism or real estate site has direct MLS data feeding their content

Until the MLS API is ready, the Market Analyst agent uses trusted local reporting from ARMLS summaries, Phoenix Business Journal, Cromford Report, and Arizona Association of Realtors data.

## CRON EXPRESSIONS

```
Events Scout:       0 5 * * *     (daily 5am)
Market Analyst:     0 6 * * 1,4   (Monday and Thursday 6am)
Trail Ranger:       0 6 * * 1,5   (Monday and Friday 6am - change to 0 6 * * * for daily during summer)
Content Strategist: 0 7 * * 3,6   (Wednesday and Saturday 7am)
Freshness Manager:  0 4 * * *     (daily 4am)
Quality Auditor:    0 8 * * 0     (Sunday 8am)
```

## MONITORING

- Check GitHub commit history for auto- prefixed commits
- Read WEEKLY-AUDIT.md every Sunday for the quality report
- Set up GitHub email notifications for pushes to stay informed
- Vercel/Netlify dashboard shows deploy status and any build failures

## MANUAL OVERRIDES

- To pause an agent: disable it in Claude Code scheduled tasks
- To force an immediate run: trigger the task manually from the Claude Code schedule page
- To rollback a bad update: git revert [commit-hash] and push
- To redirect the Content Strategist: edit agents/content-strategist.md to add specific topic instructions at the top

## ESTIMATED CONTENT VELOCITY

- 7 event updates per week
- 2 market data updates per week
- 2 trail condition checks per week (7 in summer)
- 2 new articles per week
- 7 freshness timestamp updates per week
- 1 quality audit per week
- Approximately 104 new articles per year
- Site stays fresh for AI crawlers every single day
