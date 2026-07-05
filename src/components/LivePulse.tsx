import { useEffect, useState } from 'react';

/**
 * Arizona Live — real-time conditions across the state via the free,
 * keyless Open-Meteo API. Renders nothing until data arrives and stays
 * hidden on any failure, so it can never break the page.
 */

const SPOTS = [
  { name: 'Phoenix', lat: 33.4484, lng: -112.074 },
  { name: 'Sedona', lat: 34.8697, lng: -111.761 },
  { name: 'Flagstaff', lat: 35.1983, lng: -111.6513 },
  { name: 'Tucson', lat: 32.2226, lng: -110.9747 },
  { name: 'Grand Canyon', lat: 36.0544, lng: -112.1401 },
] as const;

interface Reading {
  name: string;
  temp: number;
  icon: string;
  label: string;
}

function describeWeather(code: number, isDay: number): { icon: string; label: string } {
  if (code === 0) return { icon: isDay ? '☀️' : '🌙', label: isDay ? 'Sunny' : 'Clear' };
  if (code <= 2) return { icon: isDay ? '🌤️' : '🌙', label: 'Mostly clear' };
  if (code === 3) return { icon: '☁️', label: 'Cloudy' };
  if (code <= 48) return { icon: '🌫️', label: 'Foggy' };
  if (code <= 57) return { icon: '🌦️', label: 'Drizzle' };
  if (code <= 67) return { icon: '🌧️', label: 'Rain' };
  if (code <= 77) return { icon: '❄️', label: 'Snow' };
  if (code <= 82) return { icon: '🌧️', label: 'Showers' };
  if (code <= 86) return { icon: '❄️', label: 'Snow showers' };
  return { icon: '⛈️', label: 'Thunderstorms' };
}

export default function LivePulse() {
  const [readings, setReadings] = useState<Reading[] | null>(null);

  useEffect(() => {
    const lats = SPOTS.map(s => s.lat).join(',');
    const lngs = SPOTS.map(s => s.lng).join(',');
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lngs}`
      + `&current=temperature_2m,weather_code,is_day&temperature_unit=fahrenheit&timezone=America%2FPhoenix`;

    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(res => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: unknown) => {
        const list = Array.isArray(data) ? data : [data];
        const parsed: Reading[] = SPOTS.map((spot, i) => {
          const current = (list[i] as { current?: { temperature_2m?: number; weather_code?: number; is_day?: number } })?.current;
          if (current?.temperature_2m === undefined) throw new Error('bad payload');
          const { icon, label } = describeWeather(current.weather_code ?? 0, current.is_day ?? 1);
          return { name: spot.name, temp: Math.round(current.temperature_2m), icon, label };
        });
        setReadings(parsed);
      })
      .catch(() => { /* stay hidden */ });
    return () => controller.abort();
  }, []);

  if (!readings) return null;

  return (
    <div className="live-pulse" role="complementary" aria-label="Current Arizona weather conditions">
      <span className="live-pulse-badge">
        <span className="live-pulse-dot" aria-hidden="true" />
        Arizona Live
      </span>
      <div className="live-pulse-track">
        {readings.map(r => (
          <span key={r.name} className="live-pulse-item" title={`${r.name}: ${r.temp}°F, ${r.label}`}>
            <span aria-hidden="true">{r.icon}</span>
            <strong>{r.name}</strong> {r.temp}°F
            <span className="live-pulse-cond">{r.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
