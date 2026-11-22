import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import type { Locale, ThemeMode } from './types/content';
import { uiStrings } from './data/profile';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GalleryCarousel } from './components/GalleryCarousel';
import { ResearchMapTimeline } from './components/ResearchMapTimeline';
import { PublicationsSection } from './components/PublicationsSection';
import { ProspectsVideosSection } from './components/ProspectsVideosSection';
import { InternshipSection } from './components/InternshipSection';
import { ContactsFooter } from './components/ContactsFooter';
import { PatentMechanismModal, type PatentId } from './components/PatentMechanismModal';

const LOCALE_STORAGE_KEY = 'rybakov_research_locale';
const THEME_STORAGE_KEY = 'rybakov_research_theme';

function resolveInitialLocale(): Locale {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('lang');
    if (fromQuery === 'ru' || fromQuery === 'en' || fromQuery === 'zh') {
      return fromQuery;
    }
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === 'ru' || saved === 'en' || saved === 'zh') {
      return saved;
    }
  } catch {
    // Ignore storage/URL access errors
  }
  return 'ru';
}

function resolveInitialTheme(): ThemeMode {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('theme');
    if (fromQuery === 'light' || fromQuery === 'dark') {
      return fromQuery;
    }
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }
  return 'light';
}

const PAGE_TITLES: Record<Locale, string> = {
  ru: 'Рыбаков Денис Александрович — Исследователь бурового оборудования | Научный профиль',
  en: 'Denis A. Rybakov — Drilling Equipment Researcher | Academic Profile',
  zh: '丹尼斯·雷巴科夫（Denis A. Rybakov）— 钻井装备研究员个人主页',
};

export function App() {
  const [locale, setLocale] = useState<Locale>(resolveInitialLocale);
  const [theme, setTheme] = useState<ThemeMode>(resolveInitialTheme);
  const [activePatentModal, setActivePatentModal] = useState<PatentId | null>(null);

  useEffect(() => {
    const htmlLang = locale === 'zh' ? 'zh-CN' : locale;
    document.documentElement.lang = htmlLang;
    document.title = PAGE_TITLES[locale];

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore storage write errors
    }
  }, [locale]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme-switching', 'true');
    root.setAttribute('data-theme', theme);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#050B18' : '#F4F8FD');
    }

    void document.body.offsetHeight;
    const raf = window.requestAnimationFrame(() => {
      root.removeAttribute('data-theme-switching');
    });

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write errors
    }

    return () => window.cancelAnimationFrame(raf);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--bg-page)] text-[var(--ink-primary)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[var(--accent-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          {uiStrings.skipToContent[locale]}
        </a>

        <Header
          locale={locale}
          onChangeLocale={setLocale}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        <main id="main-content">
          <Hero
            locale={locale}
            onOpenPblPatent={() => setActivePatentModal('patent-221930')}
          />
          <GalleryCarousel locale={locale} />
          <ResearchMapTimeline locale={locale} theme={theme} />
          <PublicationsSection
            locale={locale}
            onOpenPatentModal={(id) => setActivePatentModal(id)}
          />
          <ProspectsVideosSection locale={locale} />
          <InternshipSection locale={locale} />
        </main>

        <ContactsFooter locale={locale} />

        <PatentMechanismModal
          patentId={activePatentModal}
          locale={locale}
          onClose={() => setActivePatentModal(null)}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
