import { useSyncExternalStore } from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, BarChart, Bar, LabelList, Cell,
} from 'recharts';
import { formatPrice } from '../data/lookups';

/**
 * Market data visualizations for county and city pages.
 *
 * Design rules (dataviz method): thin marks with rounded data ends, one axis,
 * recessive grid, muted axis text, hover tooltips, and a data table under
 * every chart. Charts render client-side after hydration (ResponsiveContainer
 * needs layout); the table renders on the server too, so crawlers and screen
 * readers always get the numbers.
 *
 * Palette (validated with the six-checks script, light surface):
 * terracotta #C1502E for the primary series, deep gold #B37F24 for the
 * benchmark series.
 */

const SERIES = '#C1502E';
const BENCHMARK = '#B37F24';
const GRID = '#E7DFD3';
const TICK = { fill: '#6B6259', fontSize: 12, fontFamily: 'Inter, sans-serif' } as const;

const emptySubscribe = () => () => {};
function useMounted(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function shortPrice(v: number): string {
  return v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` : `$${Math.round(v / 1000)}K`;
}

function monthLabel(ym: string): string {
  const d = new Date(ym + '-15T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short' });
}

interface TooltipPayload {
  value?: number | string;
  payload?: Record<string, unknown>;
}

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: TooltipPayload[]; label?: string | number }) {
  if (!active || !payload?.length) return null;
  const v = payload[0]?.value;
  return (
    <div style={{
      background: '#fff',
      border: `1px solid ${GRID}`,
      borderRadius: 10,
      padding: '8px 12px',
      boxShadow: '0 6px 18px rgba(35, 32, 28, 0.12)',
      fontFamily: 'Inter, sans-serif',
      fontSize: 13,
      color: '#23201C',
    }}>
      <span style={{ color: '#6B6259' }}>{String(label)}</span>{' '}
      <strong>{typeof v === 'number' ? formatPrice(v) : v}</strong>
    </div>
  );
}

function ChartFigure({ title, note, children, table }: {
  title: string;
  note?: string;
  children: React.ReactNode;
  table: { columns: [string, string]; rows: Array<[string, number]> };
}) {
  return (
    <figure className="market-chart" style={{ margin: 0 }}>
      <figcaption>
        <span className="market-chart-title">{title}</span>
        {note && <span className="market-chart-note">{note}</span>}
      </figcaption>
      {children}
      <details className="market-chart-table">
        <summary>View as data table</summary>
        <table>
          <thead>
            <tr><th scope="col">{table.columns[0]}</th><th scope="col">{table.columns[1]}</th></tr>
          </thead>
          <tbody>
            {table.rows.map(([name, value]) => (
              <tr key={name}><td>{name}</td><td>{formatPrice(value)}</td></tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

/** Single-series median price trend from verified monthly history. */
export function PriceTrendChart({ history, entityName, citations }: {
  history: Array<{ month: string; medianHomePrice: number }>;
  entityName: string;
  citations?: string[];
}) {
  const mounted = useMounted();
  if (history.length < 2) return null;
  const data = history.map(p => ({ ...p, label: monthLabel(p.month) }));
  const first = history[0], last = history[history.length - 1];
  const changePct = ((last.medianHomePrice / first.medianHomePrice - 1) * 100).toFixed(1);
  const direction = Number(changePct) >= 0 ? 'up' : 'down';

  return (
    <ChartFigure
      title={`${entityName} median sale price, last ${history.length} months`}
      note={`${direction === 'up' ? 'Up' : 'Down'} ${Math.abs(Number(changePct))}% over the period${citations?.length ? '. Sources linked below the analysis.' : ''}`}
      table={{ columns: ['Month', 'Median sale price'], rows: data.map(p => [p.month, p.medianHomePrice]) }}
    >
      <div style={{ width: '100%', height: 260 }}>
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 12, right: 16, bottom: 4, left: 8 }}>
              <CartesianGrid stroke={GRID} strokeDasharray="0" vertical={false} />
              <XAxis dataKey="label" tick={TICK} axisLine={false} tickLine={false} interval="preserveStartEnd" />
              <YAxis
                tick={TICK}
                axisLine={false}
                tickLine={false}
                tickFormatter={shortPrice}
                width={52}
                domain={['auto', 'auto']}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ stroke: GRID, strokeWidth: 1 }} />
              <Line
                type="monotone"
                dataKey="medianHomePrice"
                stroke={SERIES}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5, fill: SERIES, stroke: '#fff', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </ChartFigure>
  );
}

/** Horizontal magnitude bars, single hue, sorted descending, value labels at data ends. */
export function MedianBarsChart({ items, title, note, highlight }: {
  items: Array<{ name: string; value: number }>;
  title: string;
  note?: string;
  highlight?: string;
}) {
  const mounted = useMounted();
  const data = [...items].sort((a, b) => b.value - a.value).slice(0, 12);
  if (data.length < 2) return null;
  const height = 40 + data.length * 34;

  return (
    <ChartFigure
      title={title}
      note={note}
      table={{ columns: ['Area', 'Median home price'], rows: data.map(d => [d.name, d.value]) }}
    >
      <div style={{ width: '100%', height }}>
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 4, right: 64, bottom: 4, left: 8 }} barCategoryGap={8}>
              <XAxis type="number" hide domain={[0, 'dataMax']} />
              <YAxis
                type="category"
                dataKey="name"
                tick={TICK}
                axisLine={false}
                tickLine={false}
                width={150}
              />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(193, 80, 46, 0.06)' }} />
              <Bar dataKey="value" barSize={18} radius={[0, 4, 4, 0]} fill={SERIES}>
                {data.map(d => (
                  <Cell key={d.name} fill={d.name === highlight ? BENCHMARK : SERIES} />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v: number) => shortPrice(v)}
                  style={{ fill: '#6B6259', fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </ChartFigure>
  );
}

/** Entity vs. benchmark comparison: two labeled bars, entity terracotta, benchmark gold. */
export function ComparisonChart({ entity, benchmark, title, note }: {
  entity: { name: string; value: number };
  benchmark: { name: string; value: number };
  title: string;
  note?: string;
}) {
  const mounted = useMounted();
  const data = [
    { name: entity.name, value: entity.value, kind: 'entity' },
    { name: benchmark.name, value: benchmark.value, kind: 'benchmark' },
  ];

  return (
    <ChartFigure
      title={title}
      note={note}
      table={{ columns: ['Area', 'Median home price'], rows: data.map(d => [d.name, d.value]) }}
    >
      <div style={{ width: '100%', height: 128 }}>
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 4, right: 64, bottom: 4, left: 8 }} barCategoryGap={10}>
              <XAxis type="number" hide domain={[0, 'dataMax']} />
              <YAxis type="category" dataKey="name" tick={TICK} axisLine={false} tickLine={false} width={150} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(193, 80, 46, 0.06)' }} />
              <Bar dataKey="value" barSize={20} radius={[0, 4, 4, 0]}>
                {data.map(d => (
                  <Cell key={d.name} fill={d.kind === 'entity' ? SERIES : BENCHMARK} />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v: number) => shortPrice(v)}
                  style={{ fill: '#6B6259', fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </ChartFigure>
  );
}
