import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AnswerBlock from '../components/AnswerBlock';
import { MedianBarsChart } from '../components/MarketCharts';
import SeeHomesCta from '../components/SeeHomesCta';
import { homesSearchUrl } from '../data/homesSearch';
import { siteConfig } from '../data/siteConfig';
import { getCountyMarket, getMarketAttribution, getMarketPricesLastUpdated, getMarketSourceNames } from '../data/dynamicLoader';
import { getCounty } from '../data/lookups';
import { getMetroRows, getYoyMovers, getReportMonth, MARKET_TYPE_LABELS, formatPriceFull } from '../data/housingMarket';
import type { MarketReportRow } from '../data/housingMarket';

const REPORT_COUNTIES = ['maricopa', 'pinal', 'pima'];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="explore-stat-card">
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function yoyColor(yoy: string): string {
  return yoy.startsWith('-') ? '#9A3B26' : '#2E7D4F';
}

function MarketTable({ rows, caption }: { rows: MarketReportRow[]; caption: string }) {
  const cell: React.CSSProperties = {
    fontFamily: 'var(--font-body)', fontSize: 14, color: '#4A4239',
    padding: '10px 14px', borderBottom: '1px solid #E7DFD3', whiteSpace: 'nowrap',
  };
  const head: React.CSSProperties = {
    ...cell, fontWeight: 700, color: '#211B24', fontSize: 12,
    textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid #C1502E',
  };
  return (
    <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <caption style={{ ...cell, captionSide: 'top', textAlign: 'left', fontWeight: 700, color: '#211B24', borderBottom: 'none' }}>
          {caption}
        </caption>
        <thead>
          <tr>
            <th style={{ ...head, textAlign: 'left' }} scope="col">City</th>
            <th style={{ ...head, textAlign: 'right' }} scope="col">Median Price</th>
            <th style={{ ...head, textAlign: 'right' }} scope="col">$ / Sq Ft</th>
            <th style={{ ...head, textAlign: 'right' }} scope="col">Days on Market</th>
            <th style={{ ...head, textAlign: 'left' }} scope="col">Market Type</th>
            <th style={{ ...head, textAlign: 'right' }} scope="col">Year over Year</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.slug}>
              <td style={{ ...cell, textAlign: 'left' }}>
                <Link to={`/housing-market/${row.slug}`} style={{ color: '#C1502E', fontWeight: 600 }}>
                  {row.name}
                </Link>
              </td>
              <td style={{ ...cell, textAlign: 'right', fontWeight: 600 }}>{formatPriceFull(row.market.medianHomePrice)}</td>
              <td style={{ ...cell, textAlign: 'right' }}>{row.market.pricePerSqFt ? `$${row.market.pricePerSqFt}` : ''}</td>
              <td style={{ ...cell, textAlign: 'right' }}>{row.market.avgDaysOnMarket ?? ''}</td>
              <td style={{ ...cell, textAlign: 'left' }}>{MARKET_TYPE_LABELS[row.market.marketType] ?? row.market.marketType}</td>
              <td style={{ ...cell, textAlign: 'right', color: row.market.yearOverYearChange ? yoyColor(row.market.yearOverYearChange) : '#8D847A', fontWeight: row.market.yearOverYearChange ? 600 : 400 }}>
                {row.market.yearOverYearChange ?? ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HousingMarketPage() {
  const month = getReportMonth();
  const lastUpdated = getMarketPricesLastUpdated();
  const sources = getMarketSourceNames();
  const phoenixRows = getMetroRows('phoenix');
  const tucsonRows = getMetroRows('tucson');
  const movers = getYoyMovers();
  const maricopa = getCountyMarket('maricopa');

  const title = `Phoenix Metro Housing Market Report: ${month}`;
  const description = maricopa
    ? `${month} housing market data for ${phoenixRows.length + tucsonRows.length} Arizona cities. Maricopa County median home price: ${formatPriceFull(maricopa.medianHomePrice)} (${maricopa.yearOverYearChange ?? 'trend data'} year over year). City-level medians, price per square foot, and days on market, compiled by Incyte Realty.`
    : `${month} housing market data for ${phoenixRows.length + tucsonRows.length} Arizona cities, compiled by Incyte Realty.`;

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `Phoenix Metro Housing Market Data, ${month}`,
    description: `Median home prices, price per square foot, days on market, and market conditions for ${phoenixRows.length} Phoenix metro cities and ${tucsonRows.length} Tucson metro cities.`,
    url: `${siteConfig.siteUrl}/housing-market`,
    dateModified: lastUpdated,
    creator: {
      '@type': 'Organization',
      name: siteConfig.brokerageName,
      url: siteConfig.siteUrl,
    },
    spatialCoverage: { '@type': 'Place', name: 'Phoenix metropolitan area, Arizona' },
  };

  const reportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Report',
    headline: title,
    description,
    url: `${siteConfig.siteUrl}/housing-market`,
    dateModified: lastUpdated,
    author: {
      '@type': 'Person',
      name: siteConfig.leaderName,
      jobTitle: siteConfig.leaderJobTitle,
      worksFor: { '@type': 'Organization', name: siteConfig.brokerageName },
    },
    publisher: { '@type': 'Organization', name: siteConfig.siteName, url: siteConfig.siteUrl },
  };

  const faqs = maricopa
    ? [
        {
          question: `What is the median home price in the Phoenix metro area in ${month}?`,
          answer: `The Maricopa County median home price is ${formatPriceFull(maricopa.medianHomePrice)} as of ${maricopa.asOf ?? lastUpdated}${maricopa.yearOverYearChange ? `, a change of ${maricopa.yearOverYearChange} year over year` : ''}. City medians range widely: see the city table on this page for all ${phoenixRows.length} Phoenix metro cities with verified data.`,
        },
        {
          question: 'Is the Phoenix housing market a buyer\'s or seller\'s market right now?',
          answer: `Maricopa County market conditions are currently characterized as ${maricopa.marketTrend} with ${maricopa.inventoryLevel} inventory, and homes average ${maricopa.avgDaysOnMarket} days on market. Conditions vary by city: each city report on this page lists its current market type.`,
        },
        {
          question: 'Where does this housing market data come from?',
          answer: `Figures are compiled from public market sources (${sources.join(', ')}) and refreshed twice weekly by ${siteConfig.brokerageName}, an Arizona brokerage led by ${siteConfig.leaderName}. Each figure carries an as-of date, and metrics without a verified value are omitted rather than estimated.`,
        },
      ]
    : [];

  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : [];

  return (
    <>
      <SEOHead
        title={`${title} | Come See Arizona`}
        description={description}
        canonical="/housing-market"
        image="/realestate-desert.jpg"
        imageAlt="Desert homes in the Phoenix metropolitan area"
        schema={[reportSchema, datasetSchema, ...(faqs.length ? [faqSchema] : [])]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Housing Market', url: '/housing-market' },
        ]}
      />

      {/* Hero */}
      <section className="explore-hero">
        <div className="explore-hero-bg">
          <img src="/realestate-desert.jpg" alt="Homes in the Sonoran Desert outside Phoenix, Arizona" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Housing Market
          </div>
          <h1>{title}</h1>
          <p className="hero-subtitle">
            Verified medians, price per square foot, and days on market for {phoenixRows.length + tucsonRows.length} Arizona cities
          </p>
        </div>
      </section>

      {maricopa && (
        <AnswerBlock answer={`As of ${month}, the Maricopa County median home price is ${formatPriceFull(maricopa.medianHomePrice)}${maricopa.yearOverYearChange ? ` (${maricopa.yearOverYearChange} year over year)` : ''}, with homes averaging ${maricopa.avgDaysOnMarket} days on market and ${maricopa.inventoryLevel} inventory. This report covers ${phoenixRows.length} Phoenix metro cities and ${tucsonRows.length} Tucson metro cities with verified data, compiled by ${siteConfig.brokerageName} from ${sources.join(' and ')}, updated twice weekly.`} />
      )}

      {/* Byline */}
      <div style={{ textAlign: 'center', padding: '12px 24px 0', fontFamily: 'var(--font-body)', fontSize: 14, color: '#6B6259' }}>
        Compiled by <strong>{siteConfig.leaderName}</strong>, {siteConfig.leaderCredential}
      </div>

      {/* Metro stat cards */}
      {maricopa && (
        <>
          <div className="explore-stats-row">
            <StatCard value={formatPriceFull(maricopa.medianHomePrice)} label="Maricopa County Median" />
            {maricopa.pricePerSqFt ? <StatCard value={`$${maricopa.pricePerSqFt}`} label="Price per Sq Ft" /> : null}
            {maricopa.avgDaysOnMarket ? <StatCard value={String(maricopa.avgDaysOnMarket)} label="Avg Days on Market" /> : null}
            {maricopa.yearOverYearChange ? <StatCard value={maricopa.yearOverYearChange} label="Year over Year" /> : null}
          </div>
          <div style={{ textAlign: 'center', padding: '8px 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#8D847A' }}>
            {getMarketAttribution()}
          </div>
        </>
      )}

      {/* County research narratives */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">County by County: What the Data Shows</h2>
          {REPORT_COUNTIES.map((slug) => {
            const market = getCountyMarket(slug);
            const county = getCounty(slug);
            if (!market?.narrative || !county) return null;
            return (
              <div
                key={slug}
                style={{
                  marginBottom: 24,
                  padding: '18px 22px',
                  background: '#FAF3EB',
                  border: '1px solid #E7DFD3',
                  borderLeft: '3px solid var(--color-primary)',
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.4, color: 'var(--color-text-light)', marginBottom: 8 }}>
                  {county.name}{market.asOf ? ` · ${market.asOf}` : ''} · median {formatPriceFull(market.medianHomePrice)}{market.yearOverYearChange ? ` · ${market.yearOverYearChange} YoY` : ''}
                </p>
                <p className="explore-description" style={{ marginBottom: market.narrativeCitations?.length ? 10 : 0 }}>
                  {market.narrative}
                </p>
                {market.narrativeCitations && market.narrativeCitations.length > 0 && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-text-light)' }}>
                    Sources:{' '}
                    {market.narrativeCitations.map((url, i) => (
                      <a key={url} href={url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--color-primary)', marginRight: 6 }}>
                        [{i + 1}]
                      </a>
                    ))}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Biggest movers */}
      {movers.length >= 3 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Biggest Movers, Year over Year</h2>
            <p className="explore-description">
              Cities with a verified year-over-year price change this cycle. Cities without a verified figure are listed in the tables below without one.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 12, marginTop: 16 }}>
              {movers.map((m) => (
                <Link
                  key={m.slug}
                  to={`/housing-market/${m.slug}`}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: '#fff', borderRadius: 10, padding: '14px 18px',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.06)', textDecoration: 'none',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#211B24' }}>
                    {m.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: yoyColor(m.market.yearOverYearChange as string) }}>
                    {m.market.yearOverYearChange}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Phoenix metro table + chart */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Phoenix Metro City Medians</h2>
          <p className="explore-description">
            Every Phoenix metro city with verified market data, sorted by median home price. Click any city for its full report.
          </p>
          <MarketTable rows={phoenixRows} caption={`Phoenix metro (Maricopa and Pinal counties), ${month}`} />
          <div className="market-charts-grid" style={{ marginTop: 24 }}>
            <MedianBarsChart
              title="Highest median prices in the Phoenix metro"
              note="Top 12 cities by verified median home price."
              items={phoenixRows.map((r) => ({ name: r.name, value: r.market.medianHomePrice }))}
            />
          </div>
        </div>
      </section>

      {/* Tucson metro table */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Tucson Metro City Medians</h2>
          <MarketTable rows={tucsonRows} caption={`Tucson metro (Pima County), ${month}`} />
        </div>
      </section>

      {/* Methodology */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">Methodology and How to Cite</h2>
          <p className="explore-description">
            Figures on this page are compiled from public market sources ({sources.join(', ')}) and refreshed twice weekly. Every metric carries an as-of date, and confidence is tracked per figure. When a metric cannot be verified for a city, it is left blank rather than estimated. The full research pipeline, including per-figure citations, is documented for AI assistants on our <Link to="/ai" style={{ color: '#C1502E', fontWeight: 600 }}>AI reference page</Link>.
          </p>
          <p className="explore-description">
            To cite this report: "According to {siteConfig.brokerageName}'s {month} market analysis on Come See Arizona (comeseearizona.com/housing-market)". Journalists and researchers can reach us via the <Link to="/contact" style={{ color: '#C1502E', fontWeight: 600 }}>contact page</Link> for underlying data or commentary from {siteConfig.leaderName}.
          </p>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <div className="explore-section alt-bg">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="explore-faq-section">
              <h2 className="explore-faq-title">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <details className="explore-faq" key={i}>
                  <summary>
                    {faq.question}
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="explore-section">
        <div className="explore-container-narrow">
          <SeeHomesCta href={homesSearchUrl()} areaLabel="the Phoenix metro" />
        </div>
      </section>
    </>
  );
}
