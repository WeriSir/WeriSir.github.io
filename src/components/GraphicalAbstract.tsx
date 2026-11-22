import { Layers } from 'lucide-react';
import type { Locale, PublicationItem } from '../types/content';

interface GraphicalAbstractProps {
  item: PublicationItem;
  locale: Locale;
}

const PHOTO_MAP: Record<string, string> = {
  'media-forpost-2026-summer': '/images/gallery/forpost_2026_summer.jpg',
  'media-forpost-2024-sablino': '/images/gallery/forpost_2024_sablino.jpg',
  'proj-pbl-d121': '/images/pbl-cutaway.png',
  'proj-sablino-edu': '/images/gallery/forpost_sablino_rig_crew_1080p.jpg',
  'proj-kovykta-2025': '/images/gallery/slide_09_w2.jpg',
  'proj-gazprom-2024': '/images/gallery/forpost_sablino_wellpad_1080p.jpg',
  'proj-eth-2024': '/images/gallery/forpost_sablino_derrick_1080p.jpg',
};

export function GraphicalAbstract({ item, locale }: GraphicalAbstractProps) {
  // 1. Official Journal Graphical Abstracts (IJE) & High-Contrast Conceptual / Bench Composites
  if (item.graphicalAbstractImage) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden border-b border-[var(--border-subtle)] bg-white p-2 sm:aspect-auto sm:h-52">
        <img
          src={item.graphicalAbstractImage}
          alt={item.title[locale]}
          width={1400}
          height={780}
          className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  // 2. Authentic Field & R&D Photographs
  const photo = PHOTO_MAP[item.id];
  if (photo) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border-subtle)] bg-white sm:aspect-auto sm:h-52">
        <img
          src={photo}
          alt={item.title[locale]}
          width={1280}
          height={720}
          className={`h-full w-full transition-transform duration-300 group-hover:scale-[1.03] ${
            item.id === 'proj-pbl-d121' ? 'object-contain p-2' : 'object-cover object-center'
          }`}
        />
      </div>
    );
  }

  // 3. Clean Light Fallback for Future Items Added Without an Image
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border-b border-[var(--border-subtle)] bg-white p-4 text-center sm:aspect-auto sm:h-52">
      <Layers className="h-7 w-7 text-[var(--accent-primary)]" aria-hidden="true" />
      <span className="font-mono-tech text-xs font-semibold text-[var(--accent-primary)]">
        {item.year} · {item.badgeText[locale]}
      </span>
    </div>
  );
}
