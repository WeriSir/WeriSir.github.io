import { useState } from 'react';
import {
  ArrowUp,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import type { Locale } from '../types/content';
import { profileData, uiStrings } from '../data/profile';

interface ContactsFooterProps {
  locale: Locale;
}

export function ContactsFooter({ locale }: ContactsFooterProps) {
  const [copied, setCopied] = useState(false);
  const { contacts, academicProfiles } = profileData;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = contacts.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <footer id="contacts" className="bg-[var(--bg-surface)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 border-b border-[var(--border-subtle)] pb-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif-display text-2xl font-semibold text-[var(--ink-primary)]">
              {uiStrings.contactsSection.heading[locale]}
            </h2>
            <p className="mt-2 text-sm text-[var(--ink-secondary)]">{contacts.city[locale]}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md border border-[var(--accent-primary)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent-primary)] transition-transform transition-colors duration-150 hover:bg-[var(--accent-primary)] hover:text-white active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2"
              >
                {copied ? (
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                )}
                <span translate="no">{contacts.email}</span>
              </button>

              <span aria-live="polite" className="text-xs font-medium text-[var(--accent-status)]">
                {copied
                  ? uiStrings.contactsSection.copiedEmail[locale]
                  : uiStrings.contactsSection.copyEmail[locale]}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${contacts.email}`}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-page)] px-3.5 py-2 text-xs font-medium text-[var(--ink-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{uiStrings.contactsSection.writeEmail[locale]}</span>
              </a>

              <a
                href={contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-page)] px-3.5 py-2 text-xs font-medium text-[var(--ink-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                <span translate="no">Telegram {contacts.telegramHandle}</span>
              </a>

              <a
                href={contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-page)] px-3.5 py-2 text-xs font-medium text-[var(--ink-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span translate="no">WhatsApp ({contacts.phoneDisplay})</span>
              </a>

              <a
                href={contacts.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-page)] px-3.5 py-2 text-xs font-medium text-[var(--ink-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{uiStrings.heroActions.cv[locale]}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h3 className="font-serif-display text-lg font-semibold text-[var(--ink-primary)]">
              {uiStrings.contactsSection.profilesHeading[locale]}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {academicProfiles.map((profile) => {
                if (profile.url) {
                  return (
                    <a
                      key={profile.id}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg-page)] px-3.5 py-2 text-xs font-medium text-[var(--ink-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                    >
                      <span translate="no" className="font-semibold text-[var(--accent-primary)]">
                        {profile.label}
                      </span>
                      {profile.identifier && (
                        <span translate="no" className="font-mono-tech text-[var(--ink-secondary)]">
                          {profile.identifier}
                        </span>
                      )}
                      <ExternalLink className="h-3.5 w-3.5 text-[var(--ink-secondary)]" aria-hidden="true" />
                    </a>
                  );
                }

                return (
                  <span
                    key={profile.id}
                    aria-disabled="true"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-dashed border-[var(--border-strong)] bg-[var(--bg-page)] px-3.5 py-2 text-xs text-[var(--ink-muted)]"
                  >
                    <span translate="no">{profile.label}</span>
                  </span>
                );
              })}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[var(--ink-muted)]">
              {uiStrings.contactsSection.reservedNote[locale]}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--ink-secondary)]">
          <p>{uiStrings.contactsSection.copyright[locale]}</p>
          <a
            href="#profile"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--accent-primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <span>{uiStrings.contactsSection.backToTop[locale]}</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
