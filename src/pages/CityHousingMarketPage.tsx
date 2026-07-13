import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AnswerBlock from '../components/AnswerBlock';
import { ComparisonChart, MedianBarsChart } from '../components/MarketCharts';
import SeeHomesCta from '../components/SeeHomesCta';
import { homesForCity } from '../data/homesSearch';
import { siteConfig } from '../data/siteConfig';
import { getCountyMarket, getMarketAttribution, getMarketPricesLastUpdated, getMarketSourceNames } from '../data/dynamicLoader';
import { getReportRow, getCountyPeers, getReportMonth, MARKET_TYPE_LABELS, formatPriceFull } from '../data/housingMarket';

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="explore-stat-card">
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function CityHousingMarketPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const row = citySlug ? getReportRow(citySlug) : undefined;

  if (!row) {
    return (
      <div className="explore-section" style={{ textAlign: 'center', padding: '120px 20px' }}>
        <div className="explore-container">
          <h1>Market Report Not Found</h1>
          <p className="explore-description" style={{ marginTop: 16 }}>
            We do not have verified market data for this city yet.
          </p>
          <Link
            to="/housing-market"
            style={{
              display: 'inline-block', marginTop: 24, background: 'var(--color-primary)',
              color: 'white', padding: '14px 32px', borderRadius: 50,
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
            }}
          >
            View the Full Market Report
          </Link>
        </div>
      </div>
    );
  }

  const { name, market, countyName, countySlug } = row;
  const month = getReportMonth();
  const lastUpdated = getMarketPricesLastUpdated();
  const sources = getMarketSourceNames();
  const countyMarket = getCountyMarket(countySlug);
  const peers = getCountyPeers(row.slug);
  const marketTypeLabel = MARKET_TYPE_LABELS[market.marketType] ?? market.marketType;

  const title = `${name} Housing Market Report: ${month}`;
  const asOf = market.asOf ?? lastUpdated;

  const answerParts = [
    `As of ${month}, the median home price in ${name}, Arizona is ${formatPriceFull(market.medianHomePrice)}`,
    market.yearOverYearChange ? `a change of ${market.yearOverYearChange} year over year` : '',
    market.pricePerSqFt ? `at $${market.pricePerSqFt} per square foot` : '',
    market.avgDaysOnMarket ? `with homes averaging ${market.avgDaysOnMarket} days on market` : '',
  ].filter(Boolean);
  const answer = `${answerParts.join(', ')}. Conditions currently favor a ${marketTypeLabel}. Data compiled by ${siteConfig.brokerageName} from ${sources.join(' and ')}, as of ${asOf}.`;

  const description = `${name}, AZ median home price: ${formatPriceFull(market.medianHomePrice)} (${month})${market.pricePerSqFt ? `, $${market.pricePerSqFt}/sq ft` : ''}${market.avgDaysOnMarket ? `, ${market.avgDaysOnMarket} days on market` : ''}. Current ${marketTypeLabel} conditions, ${countyName} context, and nearby city comparisons from Incyte Realty.`;

  const faqs = [
    {
      question: `What is the median home price in ${name}, Arizona?`,
      answer: `The median home price in ${name} is ${formatPriceFull(market.medianHomePrice)} as of ${asOf}${market.yearOverYearChange ? `, ${market.yearOverYearChange} year over year` : ''}. For comparison, the ${countyName} median is ${countyMarket ? formatPriceFull(countyMarket.medianHomePrice) : 'listed on our county report'}.`,
    },
    ...(market.avgDaysOnMarket
      ? [{
          question: `How long do homes take to sell in ${name}?`,
          answer: `Homes in ${name} currently average ${market.avgDaysOnMarket} days on market${countyMarket?.avgDaysOnMarket ? `, compared with ${countyMarket.avgDaysOnMarket} days across ${countyName}` : ''}. Figure as of ${asOf}.`,
        }]
      : []),
    {
      question: `Is ${name} a buyer's or seller's market right now?`,
      answer: `${name} currently shows ${marketTypeLabel} conditions${market.avgDaysOnMarket ? ` with an average of ${market.avgDaysOnMarket} days on market` : ''}. Market conditions are reassessed twice weekly from ${sources.join(' and ')}.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const reportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Report',
    headline: title,
    description,
    url: `${siteConfig.siteUrl}/housing-market/${row.slug}`,
    dateModified: lastUpdated,
    about: { '@type': 'City', name: `${name}, Arizona` },
    author: {
      '@type': 'Person',
      name: siteConfig.leaderName,
      jobTitle: siteConfig.leaderJobTitle,
      worksFor: { '@type': 'Organization', name: siteConfig.brokerageName },
    },
    publisher: { '@type': 'Organization', name: siteConfig.siteName, url: siteConfig.siteUrl },
  };

  return (
    <>
      <SEOHead
        title={`${title} | Come See Arizona`}
        description={description}
        canonical={`/housing-market/${row.slug}`}
        image="/realestate-desert.jpg"
        imageAlt={`Housing market data for ${name}, Arizona`}
        schema={[reportSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Housing Market', url: '/housing-market' },
          { name: name, url: `/housing-market/${row.slug}` },
        ]}
      />

      {/* Header band */}
      <div style={{ background: '#211B24', padding: '72px 24px 56px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> &nbsp;&gt;&nbsp;{' '}
            <Link to="/housing-market" style={{ color: 'rgba(255,255,255,0.7)' }}>Housing Market</Link> &nbsp;&gt;&nbsp; {name}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            {title}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: 640 }}>
            Verified market data for {name}, {countyName}, updated twice weekly by {siteConfig.brokerageName}.
          </p>
        </div>
      </div>

      <AnswerBlock answer={answer} />

      {/* Stats */}
      <div className="explore-stats-row">
        <StatCard value={formatPriceFull(market.medianHomePrice)} label="Median Home Price" />
        {market.pricePerSqFt ? <StatCard value={`$${market.pricePerSqFt}`} label="Price per Sq Ft" /> : null}
        {market.avgDaysOnMarket ? <StatCard value={String(market.avgDaysOnMarket)} label="Avg Days on Market" /> : null}
        <StatCard value={marketTypeLabel} label="Current Conditions" />
        {market.yearOverYearChange ? <StatCard value={market.yearOverYearChange} label="Year over Year" /> : null}
      </div>
      <div style={{ textAlign: 'center', padding: '8px 24px', fontFamily: 'var(--font-body)', fontSize: 13, color: '#8D847A' }}>
        {getMarketAttribution()}{market.asOf ? ` · ${name} figures as of ${market.asOf}` : ''}
      </div>

      {/* County context */}
      <section className="explore-section">
        <div className="explore-container-narrow">
          <h2 className="explore-section-title">{name} vs. {countyName}</h2>
          <p className="explore-description">
            The median home price in {name} is {formatPriceFull(market.medianHomePrice)}, against a {countyName} median of {countyMarket ? formatPriceFull(countyMarket.medianHomePrice) : 'the figure on our county report'}.
            {market.avgDaysOnMarket && countyMarket?.avgDaysOnMarket
              ? ` Homes here average ${market.avgDaysOnMarket} days on market, versus ${countyMarket.avgDaysOnMarket} days county-wide.`
              : ''}
            {countyMarket?.inventoryLevel ? ` County inventory is currently ${countyMarket.inventoryLevel} with a ${countyMarket.marketTrend} trend.` : ''}
          </p>
          <div className="market-charts-grid">
            {countyMarket && (
              <ComparisonChart
                title={`${name} vs. ${countyName}`}
                note="Median home price. Verified figures; see the update date above."
                entity={{ name, value: market.medianHomePrice }}
                benchmark={{ name: `${countyName} median`, value: countyMarket.medianHomePrice }}
              />
            )}
            {peers.length >= 2 && (
              <MedianBarsChart
                title={`Median price across ${countyName} cities`}
                note={`${name} highlighted. Top cities by verified median.`}
                items={[{ name, value: market.medianHomePrice }, ...peers.map((p) => ({ name: p.name, value: p.market.medianHomePrice }))]}
                highlight={name}
              />
            )}
          </div>
        </div>
      </section>

      {/* Nearby markets */}
      {peers.length > 0 && (
        <section className="explore-section alt-bg">
          <div className="explore-container-narrow">
            <h2 className="explore-section-title">Nearby Market Reports</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {peers.map((p) => (
                <Link key={p.slug} to={`/housing-market/${p.slug}`} className="explore-pill">
                  {p.name} · {formatPriceFull(p.market.medianHomePrice)}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <div className="explore-section">
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

      {/* Cross-links + CTA */}
      <section className="explore-section alt-bg">
        <div className="explore-container-narrow">
          <p className="explore-description">
            Planning a move? Read the full <Link to={`/explore/city/${row.slug}`} style={{ color: '#C1502E', fontWeight: 600 }}>{name} community guide</Link> for neighborhoods, schools, and things to do, or return to the{' '}
            <Link to="/housing-market" style={{ color: '#C1502E', fontWeight: 600 }}>full metro market report</Link>.
          </p>
          <SeeHomesCta href={homesForCity(name)} areaLabel={name} />
        </div>
      </section>
    </>
  );
}
