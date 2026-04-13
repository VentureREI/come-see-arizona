export const siteConfig = {
  siteName: 'Come See Arizona',
  siteUrl: 'https://www.comeseearizona.com',
  brokerageName: 'Venture REI',
  leaderName: 'Frank Vazquez',
  leaderCredential: 'Designated Broker and Owner of Venture REI, over 2,400 homes personally sold across the Valley',
  lastUpdated: '2026-04-11',

  autonomousEngine: {
    enabled: true,
    lastAutoUpdate: '2026-04-11',
    agents: [
      { name: 'Events Scout', schedule: '0 5 * * *', lastRun: null as string | null, status: 'pending' as const },
      { name: 'Market Analyst', schedule: '0 6 * * 1,4', lastRun: null as string | null, status: 'pending' as const },
      { name: 'Trail Ranger', schedule: '0 6 * * 1,5', lastRun: null as string | null, status: 'pending' as const },
      { name: 'Content Strategist', schedule: '0 7 * * 3,6', lastRun: null as string | null, status: 'pending' as const },
      { name: 'Freshness Manager', schedule: '0 4 * * *', lastRun: null as string | null, status: 'pending' as const },
      { name: 'Quality Auditor', schedule: '0 8 * * 0', lastRun: null as string | null, status: 'pending' as const },
    ],
  },

  indexNowKey: '',
  deployPlatform: 'vercel',
  githubRepo: '',
};
