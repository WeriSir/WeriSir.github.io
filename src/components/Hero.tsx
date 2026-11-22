import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, FileText, GraduationCap, Wrench } from 'lucide-react';
import type { Locale } from '../types/content';
import { profileData, uiStrings } from '../data/profile';
import { HeroWorldBasins } from './HeroWorldBasins';

interface HeroProps {
  locale: Locale;
  onOpenPblPatent: () => void;
}

export function Hero({ locale, onOpenPblPatent }: HeroProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 48]);

  return (
    <section id="profile" className="border-b border-[var(--border-subtle)] bg-[var(--bg-page)]">
      {/* Hero Stage with Industrial-Futurism Drilling Rig Backdrop + Liquid Glass */}
      <div
        ref={heroRef}
        className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-page)]"
      >
        <motion.div
          aria-hidden="true"
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0"
        >
          <img
            src="/images/hero-drilling-bg.jpg"
            alt=""
            className="h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-page)]/82 via-[var(--bg-page)]/68 to-[var(--bg-page)]" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-4 pt-5 pb-8 sm:px-6 sm:pt-11 sm:pb-12">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.22fr)_minmax(360px,0.98fr)] lg:gap-10">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass min-w-0 rounded-2xl p-5 sm:p-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-status-border)] bg-[var(--accent-status-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-status)]">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-status)]"
                  aria-hidden="true"
                />
                <span>{profileData.statusBadge[locale]}</span>
              </div>

              <h1 className="mt-4 font-serif-display text-3xl font-semibold tracking-tight text-[var(--ink-primary)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
                {profileData.fullName[locale]}
              </h1>

              <p className="mt-2.5 text-base font-medium text-[var(--accent-primary)] sm:text-lg">
                {profileData.roleTitle[locale]}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-secondary)]">
                {profileData.affiliation[locale]}
              </p>

              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[var(--ink-primary)]">
                {profileData.heroThesis[locale]}
              </p>

              <ul className="mt-5 space-y-2 border-t border-[var(--border-subtle)] pt-4 text-sm text-[var(--ink-secondary)]">
                {profileData.heroFocusPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
                      aria-hidden="true"
                    />
                    <span>{point[locale]}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#internship"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform transition-colors duration-150 hover:bg-[var(--accent-primary-hover)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 sm:w-auto"
                >
                  <span>{uiStrings.heroActions.primary[locale]}</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#publications"
                  className="liquid-glass-pill inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-[var(--ink-primary)] transition-transform transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 sm:w-auto"
                >
                  <span>{uiStrings.heroActions.secondary[locale]}</span>
                </a>

                <a
                  href={profileData.contacts.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 px-2.5 py-2 text-sm font-medium text-[var(--accent-primary)] underline decoration-[var(--border-strong)] transition-colors duration-150 hover:decoration-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] sm:w-auto"
                >
                  <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{uiStrings.heroActions.cv[locale]}</span>
                </a>
              </div>
            </motion.div>

            {/* Researcher Studio Portrait with 3D-printed PBL prototype at Top in Liquid Glass Frame */}
            <motion.figure
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="order-first mx-auto w-full max-w-[440px] self-start lg:order-last lg:max-w-none"
            >
              <div className="liquid-glass overflow-hidden rounded-2xl p-2.5 sm:p-3">
                <img
                  src="/images/hero-portrait.jpg"
                  alt={profileData.portraitCaption[locale]}
                  width={747}
                  height={1024}
                  fetchPriority="high"
                  className="aspect-[3/4] w-full rounded-xl object-cover object-top"
                />
                <figcaption className="mt-2.5 px-1 text-center text-xs font-medium text-[var(--ink-secondary)]">
                  {profileData.portraitCaption[locale]}
                </figcaption>
              </div>
            </motion.figure>
          </div>

          <HeroWorldBasins locale={locale} onOpenPblPatent={onOpenPblPatent} />
        </div>
      </div>

      {/* Contrasting Academic Dossier Band */}
      <div className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="liquid-glass grid grid-cols-1 divide-y divide-[var(--border-subtle)] overflow-hidden rounded-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {profileData.metricsSummary.map((metric, idx) => (
              <div key={idx} className="px-4 py-4 sm:px-5">
                <div className="font-mono-tech text-xl font-semibold text-[var(--accent-primary)] sm:text-2xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-[var(--ink-secondary)]">
                  {metric.label[locale]}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-8 lg:grid-cols-12"
          >
            <div className="space-y-6 lg:col-span-7">
              <div>
                <h2 className="font-serif-display text-2xl font-semibold text-[var(--ink-primary)] sm:text-[1.75rem]">
                  {uiStrings.profileSection.educationTitle[locale]}{' '}
                  <span className="text-[var(--accent-primary)]">
                    · {uiStrings.heroVisual.dossierHighlight[locale]}
                  </span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-[15px]">
                  {profileData.bioSummary[locale]}
                </p>
              </div>

              <div className="divide-y divide-[var(--border-subtle)] rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-page)]">
                {profileData.education.map((edu) => (
                  <div key={edu.id} className="p-4 sm:px-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex items-center gap-2 font-medium text-[var(--ink-primary)]">
                        <GraduationCap
                          className="h-4 w-4 shrink-0 text-[var(--accent-primary)]"
                          aria-hidden="true"
                        />
                        <span className="text-sm sm:text-[15px]">{edu.degree[locale]}</span>
                      </div>
                      <span className="font-mono-tech text-xs font-medium text-[var(--accent-primary)]">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-[var(--ink-secondary)] sm:text-sm">
                      {edu.institution[locale]}
                    </p>
                    <p className="mt-1 text-xs text-[var(--ink-muted)]">
                      {edu.specialty[locale]}
                      {edu.details[locale] ? ` · ${edu.details[locale]}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 lg:col-span-5">
              <h2 className="flex items-center gap-2 font-serif-display text-xl font-semibold text-[var(--ink-primary)]">
                <Wrench className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                <span>{uiStrings.profileSection.skillsTitle[locale]}</span>
              </h2>

              <div className="liquid-glass space-y-4 rounded-xl p-4 sm:p-5">
                {profileData.skillGroups.map((group) => (
                  <div key={group.id}>
                    <h3 className="font-sans text-xs font-semibold text-[var(--ink-primary)]">
                      {group.title[locale]}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2 py-0.5 text-xs text-[var(--ink-primary)]"
                        >
                          {item[locale]}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
