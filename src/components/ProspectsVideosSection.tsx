import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Play, Video } from 'lucide-react';
import type { Locale, VideoItem } from '../types/content';
import { futureDirectionsData, videosData } from '../data/futureVideos';
import { uiStrings } from '../data/profile';

interface ProspectsVideosSectionProps {
  locale: Locale;
}

function getEmbedSrc(video: VideoItem): string | null {
  const url = video.url.trim();
  if (!url) return null;

  if (video.platform === 'youtube') {
    const match = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }
  if (video.platform === 'rutube') {
    const match = url.match(/video\/([A-Za-z0-9]+)/);
    return match ? `https://rutube.ru/play/embed/${match[1]}/` : url;
  }
  if (video.platform === 'vk') {
    return url;
  }
  if (video.platform === 'dzen' && url.includes('/embed/')) {
    return url;
  }
  return null;
}

export function ProspectsVideosSection({ locale }: ProspectsVideosSectionProps) {
  const directionTitleMap = new Map(
    futureDirectionsData.map((d) => [d.id, d.title[locale]]),
  );

  return (
    <section
      id="prospects"
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-serif-display text-2xl font-semibold text-[var(--ink-primary)] sm:text-3xl">
            {uiStrings.prospectsSection.heading[locale]}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-secondary)] sm:text-base">
            {uiStrings.prospectsSection.subtitle[locale]}
          </p>
        </div>

        {/* Prospective R&D Directions */}
        <div className="mt-8">
          <h3 className="flex items-center gap-2 font-serif-display text-lg font-semibold text-[var(--ink-primary)]">
            <Compass className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
            <span>{uiStrings.prospectsSection.directionsTitle[locale]}</span>
          </h3>

          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {futureDirectionsData.map((dir, idx) => (
              <motion.article
                key={dir.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.42, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="liquid-glass flex flex-col justify-between rounded-b-xl border-t-2 border-t-[var(--accent-primary)] p-5"
              >
                <div>
                  <h4 className="font-serif-display text-base font-semibold leading-snug text-[var(--ink-primary)]">
                    {dir.title[locale]}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-secondary)]">
                    {dir.hypothesis[locale]}
                  </p>
                </div>

                <p className="mt-4 border-t border-[var(--border-subtle)] pt-3 text-xs leading-relaxed text-[var(--accent-primary)]">
                  {dir.collaborationScope[locale]}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Video Presentations Gallery */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 font-serif-display text-lg font-semibold text-[var(--ink-primary)]">
            <Video className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
            <span>{uiStrings.prospectsSection.videosTitle[locale]}</span>
          </h3>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {videosData.map((video, idx) => {
              const embedSrc = getEmbedSrc(video);
              const directionName = directionTitleMap.get(video.directionId);

              return (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.42, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="liquid-glass flex flex-col overflow-hidden rounded-xl"
                >
                  {video.platform === 'mp4' && video.url ? (
                    <video
                      controls
                      preload="metadata"
                      poster={video.posterImage}
                      className="aspect-video w-full bg-[#061024]"
                    >
                      <source src={video.url} type="video/mp4" />
                    </video>
                  ) : embedSrc ? (
                    <div className="aspect-video w-full bg-[#061024]">
                      <iframe
                        src={embedSrc}
                        title={video.title[locale]}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                    </div>
                  ) : video.platform === 'placeholder' || !video.url ? (
                    <div className="flex aspect-video flex-col items-center justify-center border-b border-dashed border-[var(--border-strong)] bg-[var(--bg-muted)] p-4 text-center">
                      <Video className="h-6 w-6 text-[var(--ink-muted)]" aria-hidden="true" />
                      <span className="mt-2 text-xs font-medium text-[var(--ink-secondary)]">
                        {uiStrings.prospectsSection.slotPending[locale]}
                      </span>
                    </div>
                  ) : (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${video.title[locale]} — ${uiStrings.prospectsSection.watchVideo[locale]}`}
                      className="group relative block aspect-video overflow-hidden border-b border-[var(--border-subtle)] bg-[#061024] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent-primary)]"
                    >
                      {video.posterImage && (
                        <img
                          src={video.posterImage}
                          alt={video.title[locale]}
                          width={800}
                          height={450}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#061024]/30 transition-colors duration-200 group-hover:bg-[#1D4ED8]/35">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1D4ED8] shadow-md transition-transform duration-200 group-hover:scale-105">
                          <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                        </span>
                      </div>
                      <span className="absolute bottom-2.5 left-2.5 rounded bg-[#061024]/90 px-2 py-0.5 font-mono-tech text-[11px] font-medium text-white">
                        Dzen Video
                      </span>
                    </a>
                  )}

                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--ink-secondary)]">
                        <span className="font-mono-tech font-medium text-[var(--accent-primary)]">
                          {video.date[locale]}
                        </span>
                        <span className="truncate">{video.event[locale]}</span>
                      </div>

                      <h4 className="mt-2 font-serif-display text-base font-semibold leading-snug text-[var(--ink-primary)]">
                        {video.title[locale]}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
                        {video.description[locale]}
                      </p>

                      {directionName && (
                        <p className="mt-3 text-xs text-[var(--ink-secondary)]">
                          <span className="font-medium text-[var(--ink-primary)]">
                            {uiStrings.prospectsSection.relatedDirectionLabel[locale]}
                          </span>{' '}
                          {directionName}
                        </p>
                      )}
                    </div>

                    {video.url && (
                      <div className="mt-4 pt-2">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                        >
                          <span>{uiStrings.prospectsSection.watchVideo[locale]}</span>
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
