import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  Cpu,
  ExternalLink,
  Layers,
  Maximize2,
  X,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import type { Locale, PublicationItem, PublicationType } from '../types/content';
import { publicationsData } from '../data/publications';
import { uiStrings } from '../data/profile';
import { GraphicalAbstract } from './GraphicalAbstract';
import type { PatentId } from './PatentMechanismModal';

interface PublicationsSectionProps {
  locale: Locale;
  onOpenPatentModal: (id: PatentId) => void;
}

type FilterValue = 'all' | PublicationType;

export function PublicationsSection({ locale, onOpenPatentModal }: PublicationsSectionProps) {
  const [filter, setFilter] = useState<FilterValue>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [showFullBibliography, setShowFullBibliography] = useState(false);
  const [zoomedGaItem, setZoomedGaItem] = useState<PublicationItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!zoomedGaItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomedGaItem(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [zoomedGaItem]);

  const counts = useMemo(
    () => ({
      all: publicationsData.length,
      article: publicationsData.filter((p) => p.type === 'article').length,
      patent: publicationsData.filter((p) => p.type === 'patent').length,
      project: publicationsData.filter((p) => p.type === 'project').length,
    }),
    [],
  );

  const visibleItems = useMemo(() => {
    const filtered =
      filter === 'all'
        ? publicationsData
        : publicationsData.filter((item) => item.type === filter);
    return [...filtered].sort((a, b) => b.sortOrder - a.sortOrder);
  }, [filter]);

  const filterButtons: { key: FilterValue; label: string; count: number }[] = [
    { key: 'all', label: uiStrings.publicationsSection.filters.all[locale], count: counts.all },
    {
      key: 'article',
      label: uiStrings.publicationsSection.filters.article[locale],
      count: counts.article,
    },
    {
      key: 'patent',
      label: uiStrings.publicationsSection.filters.patent[locale],
      count: counts.patent,
    },
    {
      key: 'project',
      label: uiStrings.publicationsSection.filters.project[locale],
      count: counts.project,
    },
  ];

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getTypeIcon = (type: PublicationType) => {
    if (type === 'patent') return <Award className="h-3.5 w-3.5" aria-hidden="true" />;
    if (type === 'project') return <Layers className="h-3.5 w-3.5" aria-hidden="true" />;
    return <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />;
  };

  const getBadgeStyle = (type: PublicationType) => {
    if (type === 'patent') {
      return 'border-[var(--accent-status-border)] bg-[var(--accent-status-bg)] text-[var(--accent-status)]';
    }
    if (type === 'project') {
      return 'border-[var(--border-strong)] bg-[var(--bg-muted)] text-[var(--accent-primary)]';
    }
    return 'border-[var(--border-strong)] bg-[var(--bg-page)] text-[var(--accent-primary)]';
  };

  return (
    <section
      id="publications"
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-band-tint)] py-12 sm:py-16"
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.06 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="max-w-3xl">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--ink-primary)] sm:text-3xl">
            {uiStrings.publicationsSection.heading[locale]}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
            {uiStrings.publicationsSection.subtitle[locale]}
          </p>
        </div>

        {/* Section-Level Graphical Abstract Overview Banner (Liquid Glass) */}
        <div className="liquid-glass mt-6 rounded-2xl p-4 sm:p-5">
          <p className="font-mono-tech text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
            {uiStrings.publicationsSection.graphicalSectionTitle[locale]}
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {uiStrings.publicationsSection.graphicalSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 p-3"
              >
                <div className="min-w-0 flex-1">
                  <span className="font-mono-tech text-[11px] font-semibold text-[var(--accent-primary)]">
                    {step.label[locale]}
                  </span>
                  <p className="mt-0.5 text-xs font-medium leading-snug text-[var(--ink-primary)]">
                    {step.title[locale]}
                  </p>
                </div>
                {idx < 3 && (
                  <ArrowRight
                    className="mt-1 hidden h-3.5 w-3.5 shrink-0 text-[var(--ink-muted)] lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label={uiStrings.publicationsSection.heading[locale]}
            className="flex flex-wrap gap-2"
          >
            {filterButtons.map((btn) => {
              const active = filter === btn.key;
              return (
                <button
                  key={btn.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(btn.key)}
                  className={`relative inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 ${
                    active
                      ? 'border-[var(--accent-primary)] text-white'
                      : 'liquid-glass-pill text-[var(--ink-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--ink-primary)]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="pub-filter-pill"
                      transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
                      className="absolute inset-0 rounded-[7px] bg-[var(--accent-primary)]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{btn.label}</span>
                  <span
                    className={`relative z-10 font-mono-tech text-xs ${
                      active ? 'text-white/90' : 'text-[var(--ink-muted)]'
                    }`}
                  >
                    {btn.count}
                  </span>
                </button>
              );
            })}
          </div>

          <p aria-live="polite" className="text-xs text-[var(--ink-secondary)]">
            {uiStrings.publicationsSection.showingCount[locale]}{' '}
            <span className="font-mono-tech font-semibold text-[var(--ink-primary)]">
              {visibleItems.length}
            </span>
          </p>
        </div>

        {/* Vertical Portrait Feed on Mobile (`grid-cols-1`) & Multi-Column Grid on Tablet/Desktop */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => {
            const isExpanded = Boolean(expandedCards[item.id]);
            const isPatentInteractive =
              item.id === 'patent-221930' || item.id === 'patent-226121';

            return (
              <article
                key={item.id}
                id={`pub-${item.id}`}
                className="liquid-glass-strong flex w-full flex-col overflow-hidden rounded-2xl"
              >
                {/* Photo / Official Graphical Abstract acts as a direct Hyperlink to that specific article or patent */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title[locale]} — ${uiStrings.publicationsSection.openLink[locale]}`}
                  className="group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent-primary)]"
                >
                  <GraphicalAbstract item={item} locale={locale} />
                  <span className="pointer-events-none absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-[#061024]/78 px-2.5 py-1 text-[10px] font-medium text-white opacity-90 backdrop-blur-md transition-opacity duration-150 group-hover:opacity-100">
                    <span>{uiStrings.publicationsSection.openLink[locale]}</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </span>
                </a>

                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[11px] font-medium ${getBadgeStyle(
                          item.type,
                        )}`}
                      >
                        {getTypeIcon(item.type)}
                        <span>{item.badgeText[locale]}</span>
                      </span>
                      <span className="font-mono-tech text-xs font-semibold text-[var(--accent-primary)]">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-serif-display text-base font-semibold leading-snug text-[var(--ink-primary)]">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-150 hover:text-[var(--accent-primary)] hover:underline"
                      >
                        {item.title[locale]}
                      </a>
                    </h3>

                    <p className="mt-1.5 text-xs font-medium text-[var(--accent-primary)]">
                      {item.authorsOrHolders[locale]}
                    </p>

                    {item.identifierLabel && (
                      <p
                        translate={typeof item.identifierLabel === 'string' ? 'no' : undefined}
                        className="mt-1 font-mono-tech text-[11px] text-[var(--ink-muted)]"
                      >
                        {typeof item.identifierLabel === 'string'
                          ? item.identifierLabel
                          : item.identifierLabel[locale]}
                      </p>
                    )}
                  </div>

                  {/* Interactive Patent Mechanism Trigger + Direct-URL QR Code + Slider Abstract Toggle */}
                  <div className="mt-4 space-y-3 border-t border-[var(--border-subtle)] pt-3.5">
                    {isPatentInteractive && (
                      <button
                        type="button"
                        onClick={() => onOpenPatentModal(item.id as PatentId)}
                        className="inline-flex min-h-[38px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[var(--accent-primary)] px-3 py-2 text-xs font-medium text-white shadow-sm transition-transform transition-colors duration-150 hover:bg-[var(--accent-primary-hover)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      >
                        <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{uiStrings.publicationsSection.inspectPatentMechanism[locale]}</span>
                      </button>
                    )}

                    {/* QR Code block encoding item.url directly (never ORCID) */}
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]/80 p-2.5">
                      <div className="shrink-0 rounded bg-white p-1">
                        <QRCodeSVG
                          value={item.url}
                          size={58}
                          level="L"
                          fgColor="#0F172A"
                          bgColor="#FFFFFF"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono-tech text-[10px] font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
                          {uiStrings.publicationsSection.qrLabel[locale]}
                        </p>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[var(--ink-primary)] hover:text-[var(--accent-primary)] hover:underline"
                        >
                          <span>{uiStrings.publicationsSection.openLink[locale]}</span>
                          <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    {/* Interactive Slider Switch to Reveal Localized Abstract & Graphical Abstract Breakdown (Hidden by Default) */}
                    <div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={isExpanded}
                        onClick={() => toggleCard(item.id)}
                        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-muted)]/60 px-3 py-2 text-xs font-medium text-[var(--ink-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      >
                        <span className="truncate">
                          {isExpanded
                            ? uiStrings.publicationsSection.collapseAbstract[locale]
                            : uiStrings.publicationsSection.expandAbstract[locale]}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ${
                            isExpanded ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border-strong)]'
                          }`}
                        >
                          <motion.span
                            layout
                            transition={{ type: 'spring', duration: 0.28, bounce: 0 }}
                            className={`h-4 w-4 rounded-full bg-white shadow ${
                              isExpanded ? 'ml-auto' : 'mr-auto'
                            }`}
                          />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2.5 space-y-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)] p-3 text-xs leading-relaxed text-[var(--ink-secondary)]">
                              <p className="font-medium text-[var(--ink-primary)]">
                                {item.venueOrNumber[locale]}
                              </p>
                              <p>{item.summary[locale]}</p>

                              {item.graphicalAbstractLegend && item.graphicalAbstractLegend.length > 0 && (
                                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2.5">
                                  <p className="font-mono-tech text-[10px] font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
                                    {uiStrings.publicationsSection.gaBreakdownTitle[locale]}
                                  </p>
                                  <ul className="mt-1.5 space-y-1.5 text-[11px] leading-relaxed text-[var(--ink-secondary)]">
                                    {item.graphicalAbstractLegend.map((bullet, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span
                                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
                                          aria-hidden="true"
                                        />
                                        <span>{bullet[locale]}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {item.graphicalAbstractImage && (
                                <button
                                  type="button"
                                  onClick={() => setZoomedGaItem(item)}
                                  className="inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--accent-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)]"
                                >
                                  <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                                  <span>{uiStrings.publicationsSection.gaZoomLabel[locale]}</span>
                                </button>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Collapsible Full Text Bibliography Drawer */}
        <div className="liquid-glass mt-8 overflow-hidden rounded-xl">
          <button
            type="button"
            onClick={() => setShowFullBibliography((prev) => !prev)}
            aria-expanded={showFullBibliography}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-[var(--ink-primary)] transition-colors duration-150 hover:bg-[var(--bg-muted)]/50 sm:px-5"
          >
            <span>{uiStrings.publicationsSection.fullBibToggle[locale]}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-[var(--accent-primary)] transition-transform duration-200 ${
                showFullBibliography ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          {showFullBibliography && (
            <div className="divide-y divide-[var(--border-subtle)] border-t border-[var(--border-subtle)]">
              {visibleItems.map((item) => (
                <div key={`bib-${item.id}`} className="p-4 sm:px-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif-display text-sm font-semibold text-[var(--ink-primary)] hover:text-[var(--accent-primary)] hover:underline sm:text-base"
                    >
                      {item.title[locale]}
                    </a>
                    <span className="font-mono-tech text-xs font-medium text-[var(--accent-primary)]">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--accent-primary)]">
                    {item.authorsOrHolders[locale]}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--ink-secondary)]">
                    {item.venueOrNumber[locale]}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-secondary)]">
                    {item.summary[locale]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Flagship R&D Showcase: PBL */}
        <div
          id="pbl-device"
          className="liquid-glass-strong mt-12 rounded-2xl p-5 sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
            <div>
              <h3 className="font-serif-display text-xl font-semibold text-[var(--ink-primary)] sm:text-2xl">
                {uiStrings.publicationsSection.flagshipHeading[locale]}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-status-border)] bg-[var(--accent-status-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-status)]">
                {uiStrings.publicationsSection.flagshipStatus[locale]}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onOpenPatentModal('patent-221930')}
              className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-xs font-medium text-white shadow-sm transition-transform transition-colors duration-150 hover:bg-[var(--accent-primary-hover)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] sm:text-sm"
            >
              <Cpu className="h-4 w-4" aria-hidden="true" />
              <span>{uiStrings.publicationsSection.flagshipLaunchMechanism[locale]}</span>
            </button>
          </div>

          <ul className="mt-5 grid gap-4 text-sm leading-relaxed text-[var(--ink-secondary)] md:grid-cols-3">
            {uiStrings.publicationsSection.flagshipPoints.map((point, idx) => (
              <li
                key={idx}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]/80 p-3.5"
              >
                {point[locale]}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {uiStrings.publicationsSection.flagshipImages.map((img) => (
              <figure
                key={img.src}
                className="flex flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]/80"
              >
                <div className="flex h-60 w-full items-center justify-center overflow-hidden bg-white p-2">
                  <img
                    src={img.src}
                    alt={img.caption[locale]}
                    width={800}
                    height={600}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <figcaption className="border-t border-[var(--border-subtle)] px-3 py-2.5 text-xs leading-snug text-[var(--ink-secondary)]">
                  {img.caption[locale]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Full-Size Official Graphical Abstract Inspection Modal with Multilingual Decoding */}
      <AnimatePresence>
        {zoomedGaItem && zoomedGaItem.graphicalAbstractImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={zoomedGaItem.title[locale]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setZoomedGaItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overscroll-contain bg-[#030814]/84 p-3 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="liquid-glass-strong relative my-auto max-h-[92dvh] w-[96vw] max-w-6xl overflow-y-auto rounded-2xl text-[var(--ink-primary)] shadow-2xl"
            >
              <div className="flex items-start justify-between gap-3 border-b border-[var(--border-subtle)] bg-[var(--bg-muted)]/85 px-4 py-3.5 sm:px-6">
                <div>
                  <p className="font-mono-tech text-xs font-semibold text-[var(--accent-primary)]">
                    {zoomedGaItem.badgeText[locale]} · {zoomedGaItem.year}
                  </p>
                  <h3 className="mt-0.5 font-serif-display text-base font-semibold text-[var(--ink-primary)] sm:text-xl">
                    {zoomedGaItem.title[locale]}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setZoomedGaItem(null)}
                  aria-label="Close modal"
                  className="liquid-glass-pill inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[var(--ink-primary)] hover:border-[var(--accent-primary)]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 p-3.5 sm:gap-5 sm:p-6 lg:grid-cols-12">
                <div className="flex items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white p-2.5 sm:p-3 lg:col-span-7">
                  <img
                    src={zoomedGaItem.graphicalAbstractImage}
                    alt={zoomedGaItem.title[locale]}
                    className="max-h-[44dvh] w-full object-contain sm:max-h-[66vh]"
                  />
                </div>

                <div className="space-y-4 lg:col-span-5">
                  <div className="liquid-glass rounded-xl p-4">
                    <p className="text-xs font-medium text-[var(--accent-primary)]">
                      {zoomedGaItem.venueOrNumber[locale]}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)] sm:text-sm">
                      {zoomedGaItem.summary[locale]}
                    </p>
                  </div>

                  {zoomedGaItem.graphicalAbstractLegend && (
                    <div className="liquid-glass rounded-xl p-4">
                      <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
                        {uiStrings.publicationsSection.gaBreakdownTitle[locale]}
                      </h4>
                      <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-[var(--ink-secondary)] sm:text-sm">
                        {zoomedGaItem.graphicalAbstractLegend.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
                              aria-hidden="true"
                            />
                            <span>{bullet[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href={zoomedGaItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[var(--accent-primary-hover)]"
                  >
                    <span>{uiStrings.publicationsSection.openLink[locale]}</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
