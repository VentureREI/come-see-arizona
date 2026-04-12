import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AnswerBlock from '../components/AnswerBlock';
import { TRAILS } from '../data/trails';
import { TRAILS_SOUTHERN_NORTHERN } from '../data/trailsSouthernNorthern';
import type { Trail } from '../data/trails';

const ALL_TRAILS: Trail[] = [...TRAILS, ...TRAILS_SOUTHERN_NORTHERN];

type Region = 'All' | 'Phoenix Metro' | 'Sedona' | 'Tucson' | 'Flagstaff' | 'Grand Canyon';
type Difficulty = 'All' | 'Easy' | 'Moderate' | 'Hard';

const REGIONS: Region[] = ['All', 'Phoenix Metro', 'Sedona', 'Tucson', 'Flagstaff', 'Grand Canyon'];
const DIFFICULTIES: Difficulty[] = ['All', 'Easy', 'Moderate', 'Hard'];

const HERO_IMAGE = 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1920&q=80&auto=format';

const getDifficultyColor = (difficulty: string): string => {
  const d = difficulty.toLowerCase();
  if (d === 'easy') return '#22c55e';
  if (d === 'moderate') return '#f59e0b';
  if (d === 'hard' || d === 'very hard') return '#ef4444';
  return '#6b7280';
};

const matchesDifficulty = (trailDifficulty: string, filter: Difficulty): boolean => {
  if (filter === 'All') return true;
  const d = trailDifficulty.toLowerCase();
  if (filter === 'Hard') return d === 'hard' || d === 'very hard';
  return d === filter.toLowerCase();
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Arizona Hiking Trails Directory',
  description:
    'Browse 50+ Arizona hiking trails with detailed maps, difficulty ratings, and trail guides across Phoenix, Sedona, Tucson, Flagstaff, and the Grand Canyon.',
  url: 'https://comeseearizona.com/trails',
};

export default function TrailsLandingPage() {
  const [activeRegion, setActiveRegion] = useState<Region>('All');
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty>('All');

  const filteredTrails = ALL_TRAILS.filter((trail) => {
    const regionMatch = activeRegion === 'All' || trail.region === activeRegion;
    const difficultyMatch = matchesDifficulty(trail.difficulty, activeDifficulty);
    return regionMatch && difficultyMatch;
  });

  return (
    <>
      <SEOHead
        title="Arizona Hiking Trails Directory - 50+ Trails with Maps & Guides | Come See Arizona"
        description="Browse 50+ Arizona hiking trails with detailed maps, difficulty ratings, and trail guides across Phoenix, Sedona, Tucson, Flagstaff, and the Grand Canyon."
        canonical="/trails"
        schema={webPageSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Hiking Trails', url: '/trails' },
        ]}
      />

      {/* A) Hero Section */}
      <div className="explore-hero">
        <div className="explore-hero-bg">
          <img src={HERO_IMAGE} alt="Arizona hiking trail through red rock canyon" className="card-img" />
        </div>
        <div className="explore-hero-overlay" />
        <div className="explore-hero-content">
          <div className="breadcrumb-hero">
            <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Hiking Trails
          </div>
          <h1>Arizona Hiking Trails</h1>
          <p className="hero-subtitle">
            Explore {ALL_TRAILS.length}+ trails across Arizona&apos;s most breathtaking landscapes
          </p>
        </div>
      </div>

      <AnswerBlock answer="Arizona has over 200 miles of hiking trails in Phoenix alone, plus world-class destinations in Sedona, Tucson, Flagstaff, and the Grand Canyon. This directory covers 47 trails across the state with difficulty ratings, distances, elevation gains, and current trail conditions. Filter by region to find trails near you." />

      {/* B) Filter Bar */}
      <div className="explore-section">
        <div className="explore-container">
          <div className="explore-tabs" style={{ marginBottom: '12px' }}>
            {REGIONS.map((region) => (
              <button
                key={region}
                className={`explore-tab${activeRegion === region ? ' active' : ''}`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="explore-tabs">
            {DIFFICULTIES.map((diff) => (
              <button
                key={diff}
                className={`explore-tab${activeDifficulty === diff ? ' active' : ''}`}
                onClick={() => setActiveDifficulty(diff)}
              >
                {diff === 'Hard' ? 'Hard / Very Hard' : diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* C) Trail Count & Results Grid */}
      <div className="explore-section">
        <div className="explore-container">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--color-text-secondary)',
            marginBottom: '24px',
          }}>
            Showing <strong>{filteredTrails.length}</strong> trail{filteredTrails.length !== 1 ? 's' : ''}
            {activeRegion !== 'All' && <> in <strong>{activeRegion}</strong></>}
            {activeDifficulty !== 'All' && <> &middot; {activeDifficulty} difficulty</>}
          </p>

          {filteredTrails.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-body)',
            }}>
              <p style={{ fontSize: '18px', marginBottom: '12px' }}>No trails match your filters.</p>
              <p style={{ fontSize: '14px' }}>Try adjusting the region or difficulty to see more results.</p>
            </div>
          ) : (
            <div className="explore-grid-3">
              {filteredTrails.map((trail) => (
                <div key={trail.slug} className="explore-info-card">
                  <h3 style={{ marginBottom: '8px' }}>
                    <Link
                      to={`/trails/${trail.slug}`}
                      style={{
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        fontWeight: 700,
                      }}
                    >
                      {trail.name}
                    </Link>
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '12px',
                  }}>
                    {trail.distance} &middot; {trail.elevationGain} elevation gain
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-body)',
                      color: '#fff',
                      backgroundColor: getDifficultyColor(trail.difficulty),
                    }}>
                      {trail.difficulty}
                    </span>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 500,
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-secondary)',
                      backgroundColor: 'var(--color-bg-alt, #f3f4f6)',
                      border: '1px solid var(--color-border, #e5e7eb)',
                    }}>
                      {trail.region}
                    </span>
                  </div>

                  <Link
                    to={`/trails/${trail.slug}`}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    View Trail Guide &rarr;
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* D) Link to Full Hiking Article */}
      <div className="explore-section alt-bg" style={{ textAlign: 'center' }}>
        <div className="explore-container">
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '12px',
          }}>
            Want the Full Story?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            color: 'var(--color-text-secondary)',
            marginBottom: '24px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Our comprehensive hiking guide covers trail tips, seasonal advice, gear recommendations, and more.
          </p>
          <Link
            to="/articles/arizona-best-hiking-trails"
            style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '50px',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            Read The Complete Arizona Hiking Guide
          </Link>
        </div>
      </div>

      {/* E) Safety Note */}
      <div className="explore-section">
        <div className="explore-container" style={{
          maxWidth: '720px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: '10px',
          }}>
            Stay Safe on the Trail
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}>
            Arizona&apos;s desert terrain demands extra preparation. Always carry plenty of water, wear sun
            protection, and tell someone your plans before heading out. Summer temperatures on exposed trails
            can exceed 110&deg;F.{' '}
            <Link
              to="/articles/arizona-best-hiking-trails#safety"
              style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}
            >
              Read our full safety guide &rarr;
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
