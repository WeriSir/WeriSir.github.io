import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Cpu, Globe2, Layers } from 'lucide-react';
import type { Locale } from '../types/content';
import { saltBasinsData } from '../data/basins';
import { uiStrings } from '../data/profile';

interface HeroWorldBasinsProps {
  locale: Locale;
  onOpenPblPatent: () => void;
}

function project([lat, lng]: [number, number]): [number, number] {
  const x = ((lng + 180) / 360) * 900;
  const minLat = -56;
  const maxLat = 78;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 390 + 8;
  return [x, y];
}

const CONTINENT_PATHS = [
  'M 95 72 L 152 54 L 222 50 L 274 70 L 298 92 L 265 112 L 258 148 L 228 182 L 204 200 L 185 186 L 176 164 L 154 148 L 124 114 L 94 94 Z',
  'M 294 26 L 348 16 L 368 44 L 330 74 L 298 62 Z',
  'M 232 214 L 288 220 L 328 258 L 310 314 L 282 365 L 264 388 L 248 352 L 244 298 L 226 254 Z',
  'M 422 126 L 434 92 L 464 62 L 520 46 L 605 34 L 718 38 L 818 54 L 848 72 L 800 94 L 762 118 L 748 158 L 718 186 L 690 218 L 656 226 L 620 198 L 584 202 L 560 184 L 542 152 L 502 146 L 478 136 L 444 134 Z',
  'M 426 92 L 440 84 L 444 104 L 428 106 Z',
  'M 424 152 L 484 146 L 528 164 L 552 204 L 566 238 L 538 292 L 506 334 L 482 326 L 470 278 L 446 244 L 414 214 L 414 176 Z',
  'M 544 156 L 594 166 L 598 198 L 554 206 L 534 180 Z',
  'M 756 120 L 774 110 L 776 138 L 758 144 Z',
  'M 684 226 L 722 248 L 704 260 L 672 246 Z',
  'M 728 292 L 796 286 L 826 320 L 806 356 L 756 354 L 722 326 Z',
];

export function HeroWorldBasins({ locale, onOpenPblPatent }: HeroWorldBasinsProps) {
  const [selectedId, setSelectedId] = useState<string>(saltBasinsData[0].id);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const selectedBasin =
    saltBasinsData.find((b) => b.id === selectedId) ?? saltBasinsData[0];

  const hubX = 835;
  const hubY = 235;
  const animateLines = inView && !shouldReduceMotion;

  return (
    <motion.div
      ref={containerRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="liquid-glass mt-8 overflow-hidden rounded-2xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] bg-[var(--bg-muted)]/60 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <Globe2 className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
          <h2 className="font-serif-display text-sm font-semibold text-[var(--ink-primary)] sm:text-base">
            {uiStrings.heroVisual.basinsMapTitle[locale]}
          </h2>
        </div>
        <span className="text-xs text-[var(--ink-secondary)]">
          {uiStrings.heroVisual.basinsHint[locale]}
        </span>
      </div>

      <div className="grid lg:grid-cols-12">
        <div className="relative bg-[var(--map-bg)]/80 p-3 sm:p-4 lg:col-span-8">
          <svg
            viewBox="0 0 900 400"
            role="img"
            aria-label={uiStrings.heroVisual.basinsMapTitle[locale]}
            className="h-auto w-full select-none"
          >
            <g fill="var(--map-land)" stroke="var(--map-land-stroke)" strokeWidth="1.1">
              {CONTINENT_PATHS.map((d, idx) => (
                <path key={idx} d={d} strokeLinejoin="round" />
              ))}
            </g>

            {saltBasinsData.map((basin) => {
              const [bx, by] = project(basin.coords);
              const isSelected = basin.id === selectedBasin.id;
              const cx = (bx + hubX) / 2;
              const cy = Math.min(by, hubY) - 42;
              const pathD = `M ${bx} ${by} Q ${cx} ${cy} ${hubX} ${hubY}`;

              return (
                <g key={`arc-${basin.id}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isSelected ? 'var(--accent-primary)' : 'var(--accent-secondary)'}
                    strokeWidth={isSelected ? 2.1 : 1}
                    strokeOpacity={isSelected ? 0.9 : 0.3}
                  />
                  {isSelected && (
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="var(--accent-status)"
                      strokeWidth="2.4"
                      strokeDasharray="6 8"
                      animate={
                        animateLines
                          ? { strokeDashoffset: [0, -28] }
                          : { strokeDashoffset: 0 }
                      }
                      transition={
                        animateLines
                          ? { repeat: Infinity, ease: 'linear', duration: 0.9 }
                          : { duration: 0 }
                      }
                    />
                  )}
                </g>
              );
            })}

            <g transform={`translate(${hubX}, ${hubY})`}>
              <circle r="13" fill="var(--accent-primary)" opacity="0.18" />
              <circle r="6" fill="var(--accent-primary)" stroke="#FFFFFF" strokeWidth="1.6" />
              <text
                x="-14"
                y="22"
                textAnchor="middle"
                fill="var(--accent-primary)"
                fontSize="10"
                fontWeight="600"
                fontFamily="JetBrains Mono, monospace"
              >
                PBL d121
              </text>
            </g>

            {saltBasinsData.map((basin, idx) => {
              const [bx, by] = project(basin.coords);
              const isSelected = basin.id === selectedBasin.id;

              return (
                <g
                  key={basin.id}
                  transform={`translate(${bx}, ${by})`}
                  onClick={() => setSelectedId(basin.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedId(basin.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${basin.name[locale]} — ${basin.region[locale]}`}
                  className="cursor-pointer focus:outline-none"
                >
                  {isSelected && !shouldReduceMotion && (
                    <motion.circle
                      r="14"
                      fill="var(--accent-primary)"
                      initial={{ opacity: 0.35, scale: 0.8 }}
                      animate={{ opacity: [0.35, 0.08, 0.35], scale: [0.9, 1.35, 0.9] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                      className="svg-transform-center"
                    />
                  )}
                  <circle
                    r={isSelected ? 8.5 : 6.5}
                    fill={
                      isSelected
                        ? 'var(--accent-primary)'
                        : basin.isFocusStudy
                          ? 'var(--accent-status)'
                          : 'var(--bg-surface)'
                    }
                    stroke={
                      isSelected
                        ? '#FFFFFF'
                        : basin.isFocusStudy
                          ? 'var(--accent-status)'
                          : 'var(--accent-primary)'
                    }
                    strokeWidth="2"
                  />
                  <text
                    x="0"
                    y="3.2"
                    textAnchor="middle"
                    fill={
                      isSelected || basin.isFocusStudy ? '#FFFFFF' : 'var(--accent-primary)'
                    }
                    fontSize="8.5"
                    fontWeight="700"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {idx + 1}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="liquid-glass-strong mt-3 rounded-xl p-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-primary)] font-mono-tech text-[11px] font-semibold text-white">
                  {saltBasinsData.findIndex((b) => b.id === selectedBasin.id) + 1}
                </span>
                <span className="font-serif-display text-sm font-semibold text-[var(--ink-primary)] sm:text-base">
                  {selectedBasin.name[locale]}
                </span>
              </div>
              <span className="text-xs font-medium text-[var(--accent-primary)]">
                {selectedBasin.region[locale]}
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-secondary)]">
              {selectedBasin.geology[locale]}
            </p>
            <p className="mt-1 text-xs font-medium leading-relaxed text-[var(--accent-status)]">
              {selectedBasin.drillingChallenge[locale]}
            </p>

            <div className="mt-2.5 flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-2.5">
              {saltBasinsData.map((basin, idx) => {
                const active = basin.id === selectedBasin.id;
                return (
                  <button
                    key={basin.id}
                    type="button"
                    onClick={() => setSelectedId(basin.id)}
                    className={`min-h-[34px] cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] sm:min-h-0 sm:px-2 sm:py-0.5 sm:text-[11px] ${
                      active
                        ? 'bg-[var(--accent-primary)] text-white'
                        : 'border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 text-[var(--ink-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    {idx + 1}. {basin.name[locale]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t border-[var(--border-subtle)] bg-[var(--glass-strong-bg)] p-4 sm:p-5 lg:col-span-4 lg:border-t-0 lg:border-l">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-status-border)] bg-[var(--accent-status-bg)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent-status)]">
              <Cpu className="h-3 w-3" aria-hidden="true" />
              <span>{uiStrings.heroVisual.pblSolutionBadge[locale]}</span>
            </span>

            <a
              href="#pbl-device"
              className="group mt-3 block overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-white p-2 transition-colors duration-150 hover:border-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <img
                src="/images/pbl-cutaway.png"
                alt={uiStrings.heroVisual.pblSolutionTitle[locale]}
                width={640}
                height={480}
                className="aspect-[16/10] w-full rounded object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </a>

            <h3 className="mt-3.5 font-serif-display text-lg font-semibold leading-snug text-[var(--ink-primary)]">
              {uiStrings.heroVisual.pblSolutionTitle[locale]}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-secondary)] sm:text-sm">
              {uiStrings.heroVisual.pblSolutionDesc[locale]}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2 border-t border-[var(--border-subtle)] pt-3">
            <a
              href="#pbl-device"
              className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[var(--accent-primary)] px-4 py-2 text-xs font-medium text-white transition-transform transition-colors duration-150 hover:bg-[var(--accent-primary-hover)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] sm:text-sm"
            >
              <span>{uiStrings.heroVisual.pblSolutionAction[locale]}</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenPblPatent}
              className="liquid-glass-pill inline-flex min-h-[40px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-[var(--accent-primary)] transition-transform transition-colors duration-150 hover:border-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{uiStrings.publicationsSection.inspectPatentMechanism[locale]}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
