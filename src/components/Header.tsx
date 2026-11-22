import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { Locale, ThemeMode } from '../types/content';
import { profileData, uiStrings } from '../data/profile';

interface HeaderProps {
  locale: Locale;
  onChangeLocale: (locale: Locale) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const LOCALES: { code: Locale; label: string; aria: string }[] = [
  { code: 'ru', label: 'RU', aria: 'Русский язык' },
  { code: 'en', label: 'EN', aria: 'English language' },
  { code: 'zh', label: '中文', aria: '简体中文' },
];

export function Header({ locale, onChangeLocale, theme, onToggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  const themeAriaLabel =
    theme === 'light'
      ? uiStrings.themeToggle.toDark[locale]
      : uiStrings.themeToggle.toLight[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--glass-strong-bg)] backdrop-blur-xl">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: smoothProgress, transformOrigin: '0% 50%' }}
        className="h-[2px] w-full bg-[var(--accent-primary)]"
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2.5 px-4 py-2.5 sm:px-6">
        <a
          href="#profile"
          className="min-w-0 truncate font-serif-display text-base font-semibold tracking-tight text-[var(--ink-primary)] transition-colors duration-150 hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 sm:text-lg"
        >
          {profileData.shortName[locale]}
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {uiStrings.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap text-sm font-medium text-[var(--ink-secondary)] transition-colors duration-150 hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2"
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeAriaLabel}
            aria-pressed={theme === 'dark'}
            title={themeAriaLabel}
            className="liquid-glass-pill inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-[var(--ink-primary)] transition-transform transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] sm:w-auto sm:gap-1.5 sm:px-2.5"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 shrink-0" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4 shrink-0 text-[#60A5FA]" aria-hidden="true" />
            )}
            <span className="hidden text-xs font-medium xl:inline">
              {theme === 'light'
                ? uiStrings.themeToggle.darkLabel[locale]
                : uiStrings.themeToggle.lightLabel[locale]}
            </span>
          </button>

          <div
            role="group"
            aria-label="Language switcher"
            className="liquid-glass-pill inline-flex items-center rounded-md p-0.5"
          >
            {LOCALES.map((item) => {
              const active = locale === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onChangeLocale(item.code)}
                  aria-pressed={active}
                  aria-label={item.aria}
                  translate="no"
                  className={`relative cursor-pointer rounded px-2 py-1 text-xs font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-1 sm:px-2.5 ${
                    active
                      ? 'text-white'
                      : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="lang-pill"
                      transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
                      className="absolute inset-0 rounded bg-[var(--accent-primary)]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="liquid-glass-pill inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-[var(--ink-primary)] transition-transform transition-colors duration-150 hover:text-[var(--accent-primary)] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {uiStrings.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-[var(--ink-primary)] transition-colors duration-150 hover:bg-[var(--bg-muted)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                >
                  {item.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
