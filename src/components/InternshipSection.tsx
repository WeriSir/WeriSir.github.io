import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Mail, Send } from 'lucide-react';
import type { Locale } from '../types/content';
import { profileData, uiStrings } from '../data/profile';

interface InternshipSectionProps {
  locale: Locale;
}

export function InternshipSection({ locale }: InternshipSectionProps) {
  const { internship, contacts } = profileData;

  return (
    <section
      id="internship"
      className="border-b border-[#1D325C] bg-[var(--bg-band-deep)] py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 style={{ color: '#FFFFFF' }} className="font-serif-display text-2xl font-semibold text-white sm:text-3xl">
            {internship.heading[locale]}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
            {internship.lead[locale]}
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Formats + Value */}
          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-lg border border-[#1E3A6E] bg-[#0B1B3B]/90 p-5 sm:p-6">
              <h3 style={{ color: '#FFFFFF' }} className="font-serif-display text-lg font-semibold text-white">
                {internship.formatsTitle[locale]}
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-[#CBD5E1]">
                {internship.formats.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#38BDF8]"
                      aria-hidden="true"
                    />
                    <span>{item[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-[#1E3A6E] bg-[#0B1B3B]/90 p-5 sm:p-6">
              <h3 style={{ color: '#FFFFFF' }} className="font-serif-display text-lg font-semibold text-white">
                {internship.valueTitle[locale]}
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-[#CBD5E1]">
                {internship.valuePoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2DD4BF]"
                      aria-hidden="true"
                    />
                    <span>{item[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actionable Ways to Help */}
          <div className="flex flex-col justify-between rounded-lg border border-[#2A4B88] bg-[#11244D] p-5 sm:p-6 lg:col-span-6">
            <div>
              <h3 style={{ color: '#FFFFFF' }} className="font-serif-display text-lg font-semibold text-white">
                {internship.helpTitle[locale]}
              </h3>

              <ul className="mt-4 space-y-3.5 text-sm leading-relaxed text-[#E2E8F0]">
                {internship.helpActions.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#2DD4BF]"
                      aria-hidden="true"
                    />
                    <span>{action[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 border-t border-[#1E3A6E] pt-5">
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${contacts.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white transition-transform transition-colors duration-150 hover:bg-[#1D4ED8] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{uiStrings.contactsSection.writeEmail[locale]}</span>
                </a>

                <a
                  href={contacts.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#3B5998] bg-[#0B1B3B] px-4 py-2.5 text-sm font-medium text-white transition-transform transition-colors duration-150 hover:border-[#60A5FA] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Telegram ({contacts.telegramHandle})</span>
                </a>

                <a
                  href={contacts.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#3B5998] bg-[#0B1B3B] px-4 py-2.5 text-sm font-medium text-white transition-transform transition-colors duration-150 hover:border-[#60A5FA] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span>{uiStrings.heroActions.cv[locale]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
