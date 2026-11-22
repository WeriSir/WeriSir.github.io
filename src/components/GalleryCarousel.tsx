import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, MapPin, X } from 'lucide-react';
import type { GalleryCategory, Locale } from '../types/content';
import { galleryData } from '../data/gallery';
import { uiStrings } from '../data/profile';

interface GalleryCarouselProps {
  locale: Locale;
}

type CategoryFilter = 'all' | GalleryCategory;

export function GalleryCarousel({ locale }: GalleryCarouselProps) {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const items = useMemo(() => {
    if (category === 'all') return galleryData;
    return galleryData.filter((item) => item.category === category);
  }, [category]);

  const counts = useMemo(
    () => ({
      all: galleryData.length,
      field: galleryData.filter((g) => g.category === 'field').length,
      rd: galleryData.filter((g) => g.category === 'rd').length,
    }),
    [],
  );

  const safeIndex = items.length > 0 ? ((activeIndex % items.length) + items.length) % items.length : 0;
  const activeItem = items[safeIndex];

  const handleCategoryChange = (next: CategoryFilter) => {
    setDirection(1);
    setCategory(next);
    setActiveIndex(0);
  };

  const goNext = () => {
    if (items.length <= 1) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const goPrev = () => {
    if (items.length <= 1) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToIndex = (targetIdx: number, offsetHint?: number) => {
    if (targetIdx === safeIndex) return;
    if (offsetHint !== undefined) {
      setDirection(offsetHint > 0 ? 1 : -1);
    } else {
      setDirection(targetIdx > safeIndex ? 1 : -1);
    }
    setActiveIndex(targetIdx);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -45) goNext();
    else if (info.offset.x > 45) goPrev();
  };

  const offsets = useMemo(() => {
    if (items.length >= 5) return [-2, -1, 0, 1, 2];
    if (items.length === 4) return [-1, 0, 1, 2];
    if (items.length === 3) return [-1, 0, 1];
    if (items.length === 2) return [0, 1];
    return [0];
  }, [items.length]);

  const filterButtons: { key: CategoryFilter; label: string; count: number }[] = [
    { key: 'all', label: uiStrings.gallerySection.categories.all[locale], count: counts.all },
    { key: 'field', label: uiStrings.gallerySection.categories.field[locale], count: counts.field },
    { key: 'rd', label: uiStrings.gallerySection.categories.rd[locale], count: counts.rd },
  ];

  return (
    <section
      id="gallery"
      className="overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-band-tint)] py-12 sm:py-20"
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif-display text-2xl font-semibold text-[var(--ink-primary)] sm:text-3xl">
              {uiStrings.gallerySection.heading[locale]}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
              {uiStrings.gallerySection.subtitle[locale]}
            </p>
          </div>

          {/* Liquid Glass Category Tabs */}
          <div
            role="tablist"
            aria-label={uiStrings.gallerySection.heading[locale]}
            className="flex flex-wrap gap-2"
          >
            {filterButtons.map((btn) => {
              const active = category === btn.key;
              return (
                <button
                  key={btn.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleCategoryChange(btn.key)}
                  className={`relative inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] sm:text-sm ${
                    active
                      ? 'border-[var(--accent-primary)] text-white'
                      : 'liquid-glass-pill text-[var(--ink-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--ink-primary)]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="gallery-cat-pill"
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
        </div>

        {/* Deterministic Pure-CSS Mobile Vertical Split Card (<640px) */}
        {activeItem && (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            className="mt-8 w-full touch-pan-y select-none sm:hidden"
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={`mobile-${category}-${activeItem.id}`}
                custom={direction}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -32 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ boxShadow: 'var(--shadow-coverflow)' }}
                className="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-[var(--accent-primary)] bg-[#07132D]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#061024]">
                  <img
                    src={activeItem.src}
                    alt={activeItem.title[locale]}
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-3">
                    <span className="rounded-full border border-white/25 bg-[#061024]/80 px-2.5 py-0.5 font-mono-tech text-[11px] font-medium text-[#93C5FD] backdrop-blur-md">
                      {activeItem.date[locale]}
                    </span>
                    <span className="rounded-full bg-[#1D4ED8]/90 px-2.5 py-0.5 font-mono-tech text-[11px] font-medium text-white backdrop-blur-md">
                      {safeIndex + 1} / {items.length}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 p-4 text-white">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 text-xs font-medium text-[#93C5FD]">
                        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span className="truncate">{activeItem.location[locale]}</span>
                      </p>
                      <h3
                        style={{ color: '#FFFFFF' }}
                        className="mt-1 font-serif-display text-base font-semibold leading-snug text-white"
                      >
                        {activeItem.title[locale]}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      aria-label={`${activeItem.title[locale]} — ${uiStrings.gallerySection.zoomLabel[locale]}`}
                      className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#1D4ED8] shadow-md transition-transform duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <p className="text-xs leading-relaxed text-[#CBD5E1]">
                    {activeItem.caption[locale]}
                  </p>

                  {activeItem.articleUrl && (
                    <div>
                      <a
                        href={activeItem.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/12 px-3 py-1.5 text-xs font-medium text-white transition-colors duration-150 hover:bg-white/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                      >
                        <span>
                          {activeItem.articleLabel
                            ? activeItem.articleLabel[locale]
                            : uiStrings.gallerySection.readArticle[locale]}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}

        {/* Tablet/Desktop 5-Card 3D Coverflow Stage (>=640px) */}
        <div
          className="relative mt-10 hidden h-[540px] w-full select-none items-center justify-center sm:flex lg:h-[600px]"
          style={{ perspective: '1600px' }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            className="relative flex h-full w-full items-center justify-center touch-pan-y"
          >
            <AnimatePresence initial={false} custom={direction}>
              {offsets.map((offset) => {
                const idx = (safeIndex + offset + items.length) % items.length;
                const item = items[idx];
                const isCenter = offset === 0;
                const isOuter = Math.abs(offset) === 2;

                const xShift =
                  offset === 0
                    ? 0
                    : offset === -1
                      ? -380
                      : offset === 1
                        ? 380
                        : offset === -2
                          ? -630
                          : 630;
                const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.8 : 0.66;
                const rotateY = offset === 0 ? 0 : offset > 0 ? -10 : 10;
                const zIndex = offset === 0 ? 30 : Math.abs(offset) === 1 ? 20 : 10;
                const targetOpacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.8 : 0.45;

                return (
                  <motion.div
                    key={`${category}-${item.id}`}
                    custom={direction}
                    initial={
                      shouldReduceMotion
                        ? { opacity: targetOpacity }
                        : {
                            x: xShift + direction * 180,
                            scale: scale * 0.9,
                            rotateY,
                            opacity: 0,
                          }
                    }
                    animate={{
                      x: xShift,
                      scale,
                      rotateY,
                      opacity: targetOpacity,
                    }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : {
                            x: xShift - direction * 180,
                            scale: scale * 0.9,
                            rotateY,
                            opacity: 0,
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0.15 }
                        : { type: 'spring', stiffness: 260, damping: 28, mass: 0.9 }
                    }
                    style={{
                      zIndex,
                      boxShadow: isCenter ? 'var(--shadow-coverflow)' : 'var(--shadow-card)',
                    }}
                    className={`absolute h-[500px] w-[580px] lg:h-[550px] lg:w-[760px] ${
                      isOuter ? 'hidden md:block' : ''
                    }`}
                  >
                    {isCenter ? (
                      <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[var(--accent-primary)] bg-[#061024]">
                        <img
                          src={item.src}
                          alt={item.title[locale]}
                          width={1920}
                          height={1080}
                          className="h-full w-full object-cover"
                        />

                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#030816]/95 via-[#07132D]/82 to-transparent"
                        />

                        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-4">
                          <span className="rounded-full border border-white/25 bg-[#061024]/75 px-3 py-1 font-mono-tech text-xs font-medium text-[#93C5FD] backdrop-blur-md">
                            {item.date[locale]}
                          </span>
                          <span className="rounded-full bg-[#1D4ED8]/90 px-3 py-1 font-mono-tech text-xs font-medium text-white backdrop-blur-md">
                            {safeIndex + 1} / {items.length}
                          </span>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
                          <div className="min-w-0 flex-1">
                            <p className="flex items-center gap-1.5 text-xs font-medium text-[#93C5FD]">
                              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              <span className="truncate">{item.location[locale]}</span>
                            </p>
                            <h3
                              style={{ color: '#FFFFFF' }}
                              className="mt-1 font-serif-display text-lg font-semibold leading-snug text-white sm:text-xl"
                            >
                              {item.title[locale]}
                            </h3>
                            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#E2E8F0] sm:text-sm">
                              {item.caption[locale]}
                            </p>

                            {item.articleUrl && (
                              <a
                                href={item.articleUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-colors duration-150 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                              >
                                <span>
                                  {item.articleLabel
                                    ? item.articleLabel[locale]
                                    : uiStrings.gallerySection.readArticle[locale]}
                                </span>
                                <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              </a>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => setLightboxOpen(true)}
                            aria-label={`${item.title[locale]} — ${uiStrings.gallerySection.zoomLabel[locale]}`}
                            className="inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#1D4ED8] shadow-md transition-transform duration-150 hover:scale-105 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                          >
                            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => goToIndex(idx, offset)}
                        aria-label={item.title[locale]}
                        className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[#0A162E] transition-colors duration-150 hover:border-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      >
                        <img
                          src={item.src}
                          alt=""
                          width={1280}
                          height={960}
                          className="h-full w-full object-cover grayscale contrast-95 transition-opacity duration-200 group-hover:opacity-95"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-[#061024]/30"
                        />
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Coverflow Controls — Compact Counter Bar on Portrait Mobile, Dots on Tablet/Desktop */}
        <div className="mt-5 flex items-center justify-between gap-3 sm:justify-center sm:gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label={uiStrings.gallerySection.prevLabel[locale]}
            className="liquid-glass-pill inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-[var(--ink-primary)] transition-transform transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          {/* Compact mobile counter & progress bar */}
          <div className="flex flex-1 items-center gap-3 sm:hidden">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--border-strong)]/60">
              <div
                className="h-full rounded-full bg-[var(--accent-primary)] transition-all duration-200"
                style={{
                  width: `${items.length > 0 ? ((safeIndex + 1) / items.length) * 100 : 0}%`,
                }}
              />
            </div>
            <span className="shrink-0 font-mono-tech text-xs font-semibold text-[var(--ink-secondary)]">
              {safeIndex + 1} / {items.length}
            </span>
          </div>

          <div
            className="hidden flex-wrap items-center justify-center gap-1.5 sm:flex"
            role="tablist"
            aria-label="Slide pagination"
          >
            {items.map((slide, idx) => {
              const isCurrent = idx === safeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-label={`${slide.title[locale]} (${idx + 1})`}
                  onClick={() => goToIndex(idx)}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    isCurrent
                      ? 'w-7 bg-[var(--accent-primary)]'
                      : 'w-2 bg-[var(--border-strong)] hover:bg-[var(--ink-muted)]'
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label={uiStrings.gallerySection.nextLabel[locale]}
            className="liquid-glass-pill inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-[var(--ink-primary)] transition-transform transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </motion.div>

      {/* Smooth Animated Lightbox Dialog */}
      <AnimatePresence>
        {lightboxOpen && activeItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title[locale]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center overscroll-contain bg-[#030814]/88 p-3 backdrop-blur-md sm:p-4"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92dvh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-[#2A457A] bg-[#0B162E]/96 text-white shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-[#1D325C] px-4 py-3 sm:px-5">
                <div className="min-w-0 pr-3">
                  <p className="font-mono-tech text-xs text-[#60A5FA]">
                    {activeItem.date[locale]} · {activeItem.location[locale]}
                  </p>
                  <h3
                    style={{ color: '#FFFFFF' }}
                    className="truncate font-serif-display text-base font-semibold text-white sm:text-lg"
                  >
                    {activeItem.title[locale]}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  aria-label={uiStrings.gallerySection.closeLightbox[locale]}
                  className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md border border-[#2A457A] bg-[#061024] text-white transition-colors duration-150 hover:border-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="relative flex min-h-[240px] max-h-[62dvh] items-center justify-center overflow-hidden bg-[#040916] p-3 sm:min-h-[320px] sm:max-h-[72vh]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={activeItem.src}
                    src={activeItem.src}
                    alt={activeItem.title[locale]}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: direction * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -24 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="max-h-[58dvh] w-auto rounded object-contain sm:max-h-[68vh]"
                  />
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1D325C] px-4 py-3.5 sm:px-5">
                <div className="max-w-2xl space-y-1.5">
                  <p className="text-xs leading-relaxed text-[#CBD5E1] sm:text-sm">
                    {activeItem.caption[locale]}
                  </p>
                  {activeItem.articleUrl && (
                    <a
                      href={activeItem.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#60A5FA] hover:underline"
                    >
                      <span>
                        {activeItem.articleLabel
                          ? activeItem.articleLabel[locale]
                          : uiStrings.gallerySection.readArticle[locale]}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label={uiStrings.gallerySection.prevLabel[locale]}
                    className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A457A] bg-[#061024] text-white hover:border-[#60A5FA]"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={uiStrings.gallerySection.nextLabel[locale]}
                    className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#2A457A] bg-[#061024] text-white hover:border-[#60A5FA]"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
