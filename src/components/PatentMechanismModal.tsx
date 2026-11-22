import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Pause, Play, RotateCcw, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import type { Locale, LocalizedText } from '../types/content';
import { uiStrings } from '../data/profile';

export type PatentId = 'patent-221930' | 'patent-226121';

interface PatentMechanismModalProps {
  patentId: PatentId | null;
  locale: Locale;
  onClose: () => void;
}

interface PatentStepInfo {
  stepNumber: number;
  positionLabel: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}

const PATENT_221930_STEPS: PatentStepInfo[] = [
  {
    stepNumber: 1,
    positionLabel: { ru: '1 · Закрыто (к долоту)', en: '1 · Closed (to bit)', zh: '1 · 关闭（直通钻头）' },
    title: {
      ru: 'Прямая циркуляция при обычном бурении',
      en: 'Normal Circulation During Standard Drilling',
      zh: '常规钻进时的轴向直通循环',
    },
    description: {
      ru: 'Пружина держит поршень наверху: боковые окна закрыты, раствор проходит сквозь поршень и обтекает нижнюю заглушку к долоту.',
      en: 'The spring keeps the piston up; side ports are closed and drilling mud passes smoothly down toward the drill bit.',
      zh: '弹簧使活塞保持上位，侧向窗口封闭，钻井液沿中心孔绕过下堵柱直达钻头。',
    },
  },
  {
    stepNumber: 2,
    positionLabel: { ru: '2 · Активация байпаса', en: '2 · Bypass Activated', zh: '2 · 触发旁通激活' },
    title: {
      ru: 'Перекрытие осевого канала и выход в затрубье',
      en: 'Axial Bore Sealed & Lateral Bypass Ports Opened',
      zh: '封闭下行通道并打开侧向旁通窗口',
    },
    description: {
      ru: 'Повышение расхода сдвигает поршень вниз на конусную заглушку — поток к долоту полностью перекрывается, и вся смесь уходит в боковые окна.',
      en: 'Higher pump rate drives the piston down onto the sealed plug cylinder, shutting off flow to the bit and diverting 100% into the annulus.',
      zh: '增大排量压差推动活塞下移套入下堵柱形成密封，彻底关闭下行流道并将堵漏液全量分流至环空。',
    },
  },
  {
    stepNumber: 3,
    positionLabel: { ru: '3 · Удержание при малых подачах', en: '3 · Locked Open', zh: '3 · 低排量锁定开启' },
    title: {
      ru: 'Фиксация открытых окон для закачки кольматанта',
      en: 'Locked-Open Bypass for Low-Rate LCM Spotting',
      zh: 'J型槽定位锁开，低排量稳定注入堵漏浆',
    },
    description: {
      ru: 'При снижении подачи фиксатор в J-канавке удерживает поршень на заглушке: окна остаются открытыми для бережной закачки составов.',
      en: 'When flow drops, the J-slot pin locks the piston on the plug so lateral ports remain open for gentle LCM placement.',
      zh: '降排量后导向销卡入J型槽锁止台阶，旁通窗口保持开启，可平稳注入高浓度堵漏材料。',
    },
  },
  {
    stepNumber: 4,
    positionLabel: { ru: '4 · Возврат в исходное', en: '4 · Reset Closed', zh: '4 · 复位恢复直通' },
    title: {
      ru: 'Следующий импульс закрывает окна и возвращает циркуляцию',
      en: 'Next Pump Cycle Closes Ports & Restores Normal Drilling',
      zh: '再次启停泵实现自动复位并恢复正常钻进',
    },
    description: {
      ru: 'Повторное включение и отключение насоса выводит фиксатор вверх: пружина поднимает поршень с заглушки, восстанавливая прямую промывку.',
      en: 'A second pump-up/bleed-off cycle frees the pin, allowing the spring to lift the piston and restore circulation to the bit.',
      zh: '再次脉冲循环后导向销脱锁回顶，弹簧推动活塞上行脱离堵柱，恢复直通钻头循环。',
    },
  },
];

const PATENT_226121_STEPS: PatentStepInfo[] = [
  {
    stepNumber: 1,
    positionLabel: { ru: '1 · Транспортное', en: '1 · Run-in Mode', zh: '1 · 下入直通状态' },
    title: {
      ru: 'Плашки убраны внутрь корпуса',
      en: 'Slips Retracted Inside Packer Housing',
      zh: '密封滑块缩回壳体内部，环空畅通',
    },
    description: {
      ru: 'При штатном расходе пружина удерживает поршень вверху, раздвижные плашки сложены и не касаются стенок скважины.',
      en: 'Under normal flow, the spring holds the piston up and radial sealing slips stay retracted clear of the wellbore wall.',
      zh: '常规排量下弹簧顶起活塞，径向密封滑块完全缩入壳体，保证安全下钻与正常循环。',
    },
  },
  {
    stepNumber: 2,
    positionLabel: { ru: '2 · Герметизация ствола', en: '2 · Sealed Annulus', zh: '2 · 径向扩张密封' },
    title: {
      ru: 'Конусный поршень выдвигает плашки до стенки скважины',
      en: 'Piston Drives Conical Slips Radially to Seal the Annulus',
      zh: '活塞下行驱动滑块径向顶出贴紧井壁完成封隔',
    },
    description: {
      ru: 'Увеличение подачи сдвигает проточный поршень вниз: его конусные поверхности выдвигают плашки к стенкам скважины, герметизируя затрубье.',
      en: 'Increasing flow shifts the piston down, wedging the conical slips outward against the wellbore wall to isolate the zone.',
      zh: '增大排量推动活塞下移，利用楔形锥面将滑块径向顶出贴合井壁，实现环空封隔与井底控压。',
    },
  },
];

const GENERAL_OVERVIEW_221930: LocalizedText = {
  ru: 'Многоцикловой гидравлический переводник для колонны бурильных труб. Позволяет по команде с поверхности (изменением расхода насоса, без сброса шаров) переключать поток в затрубье и перекрывать проход к долоту для адресной борьбы с поглощениями.',
  en: 'Multi-cycle hydraulic circulation sub installed above the BHA. Triggered solely by surface pump rate changes (no ball drops), it seals axial flow to the bit and redirects plugging slurries into the annulus.',
  zh: '安装于钻柱下部的多循环水力激活旁通短节。无需投球，仅靠地面调节泵排量即可切换旁通并切断至钻头通道，实现高效井漏治理。',
};

const GENERAL_OVERVIEW_226121: LocalizedText = {
  ru: 'Скважинный пакер с гидравлическим приводом от проточного поршня. При повышении подачи раствора выдвигает уплотняющие плашки к стенкам скважины, разобщая интервал поглощения или притока для управления забойным давлением.',
  en: 'Flow-actuated borehole packer using a spring-loaded piston. Higher flow rates push radial sealing slips against the borehole wall to isolate thief or influx zones and regulate bottomhole pressure.',
  zh: '基于流通活塞水力驱动的井下封隔器。提高排量时带动密封滑块径向扩张压紧井壁，有效隔离漏失或溢流层并实现控压钻进。',
};

const ASSEMBLIES_221930: LocalizedText[] = [
  { ru: 'Проточный поршень со сменной диафрагмой — создаёт усилие срабатывания', en: 'Flow piston with orifice diaphragm — drives axial stroke', zh: '带节流孔板的流通活塞 — 产生轴向驱动压差' },
  { ru: 'Возвратная пружина сжатия — возвращает поршень в исходную позицию', en: 'Compression return spring — resets piston upward', zh: '压缩复位弹簧 — 停泵后推动活塞回位' },
  { ru: 'Нижняя заглушка — герметично перекрывает поток к долоту при активации', en: 'Pointed lower plug — seals axial BHA passage on bypass', zh: '下部锥头堵柱 — 激活时完全封堵下行钻头通道' },
  { ru: 'Боковые окна и J-канавка — выводят поток в затрубье и фиксируют режим', en: 'Side ports & J-slot track — divert flow and lock open state', zh: '侧向旁通孔与J型定位槽 — 旁通分流并锁定开启状态' },
];

const ASSEMBLIES_226121: LocalizedText[] = [
  { ru: 'Проточный поршень с диафрагмой и конусными клиньями', en: 'Flow-through piston with diaphragm and conical wedges', zh: '带节流孔板与楔形锥面的流通活塞' },
  { ru: 'Возвратная пружина — удерживает плашки сложенными при спуске', en: 'Return spring — keeps slips retracted during run-in', zh: '复位弹簧 — 下入阶段保持滑块收拢状态' },
  { ru: 'Раздвижные уплотняющие плашки — перекрывают кольцевой зазор', en: 'Radial sealing slips — isolate the wellbore annulus', zh: '径向扩张密封滑块 — 贴紧井壁隔离环空' },
  { ru: 'Корпус с направляющими пазами для плавного хода плашек', en: 'Slotted outer housing guiding radial slip travel', zh: '带导向槽的封隔器壳体 — 引导滑块精准扩张' },
];

export function PatentMechanismModal({ patentId, locale, onClose }: PatentMechanismModalProps) {
  const [stepIdx, setStepIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const is221930 = patentId === 'patent-221930';
  const steps = is221930 ? PATENT_221930_STEPS : PATENT_226121_STEPS;
  const activeStepIdx = stepIdx % steps.length;
  const activeStep = steps[activeStepIdx];

  useEffect(() => {
    setStepIdx(0);
    setAutoPlay(true);
  }, [patentId]);

  useEffect(() => {
    if (!patentId) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setAutoPlay(false);
        setStepIdx((prev) => (prev + 1) % steps.length);
      }
      if (e.key === 'ArrowLeft') {
        setAutoPlay(false);
        setStepIdx((prev) => (prev - 1 + steps.length) % steps.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [patentId, onClose, steps.length]);

  useEffect(() => {
    if (!patentId || !autoPlay) return;
    const id = window.setInterval(() => {
      setStepIdx((prev) => (prev + 1) % steps.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [patentId, autoPlay, steps.length]);

  if (!patentId) return null;

  const patentUrl = is221930
    ? 'https://patents.google.com/patent/RU221930U1/ru'
    : 'https://patents.google.com/patent/RU226121U1/ru';

  const patentTitle: LocalizedText = is221930
    ? {
        ru: 'ПАТЕНТ РФ № 221930 U1 — Циркуляционный переводник с приводом преобразователя',
        en: 'PATENT RU 221930 U1 — Hydraulic Circulation Sub (PBL)',
        zh: '俄罗斯联邦专利 RU 221930 U1 — 水力循环短节',
      }
    : {
        ru: 'ПАТЕНТ РФ № 226121 U1 — Скважинный гидравлический пакер',
        en: 'PATENT RU 226121 U1 — Hydraulic Flow-Through Packer',
        zh: '俄罗斯联邦专利 RU 226121 U1 — 井下水力封隔器',
      };

  // Accurate kinematics:
  const piston221930Y = activeStepIdx === 0 ? 0 : activeStepIdx === 1 ? 66 : activeStepIdx === 2 ? 56 : 0;
  const isBypass221930 = activeStepIdx === 1 || activeStepIdx === 2;
  const spring221930ScaleY = activeStepIdx === 0 ? 1 : activeStepIdx === 1 ? 0.44 : activeStepIdx === 2 ? 0.54 : 1;
  const jSlotPinCoords = [
    { x: 24, y: 18 },
    { x: 48, y: 74 },
    { x: 64, y: 58 },
    { x: 96, y: 18 },
  ][activeStepIdx];

  const packerPistonY = activeStepIdx === 0 ? 0 : 44;
  const packerSlipsExtended = activeStepIdx === 1;

  const labels = {
    housing: locale === 'ru' ? 'Корпус' : locale === 'en' ? 'Housing' : '外筒壳体',
    piston: locale === 'ru' ? 'Поршень' : locale === 'en' ? 'Piston' : '流通活塞',
    spring: locale === 'ru' ? 'Пружина' : locale === 'en' ? 'Spring' : '复位弹簧',
    plug: locale === 'ru' ? 'Заглушка' : locale === 'en' ? 'Plug' : '下堵柱',
    bypass: locale === 'ru' ? 'Боковые окна' : locale === 'en' ? 'Bypass Ports' : '旁通窗口',
    slips: locale === 'ru' ? 'Плашки' : locale === 'en' ? 'Sealing Slips' : '密封滑块',
    wellbore: locale === 'ru' ? 'Стенка скважины' : locale === 'en' ? 'Borehole Wall' : '井壁',
  };

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={patentTitle[locale]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overscroll-contain bg-[#030814]/82 p-2.5 backdrop-blur-md sm:p-5"
      >
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="liquid-glass-strong relative my-auto max-h-[94dvh] w-[96vw] max-w-7xl overflow-y-auto rounded-2xl text-[var(--ink-primary)] shadow-2xl"
        >
          {/* Prominent PATENT Header */}
          <div className="flex items-start justify-between gap-3 border-b border-[var(--border-subtle)] bg-[var(--bg-muted)]/85 px-4 py-3.5 sm:px-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-[var(--accent-primary)] px-2.5 py-0.5 font-mono-tech text-xs font-bold tracking-wider text-white">
                  {uiStrings.patentModal.patentLabel[locale]}
                </span>
                <span className="font-mono-tech text-xs font-semibold text-[var(--accent-primary)]">
                  {is221930 ? 'RU 221930 U1 · МПК E21B 21/10, 34/10' : 'RU 226121 U1 · МПК E21B 33/12'}
                </span>
              </div>
              <h3 className="mt-1 font-serif-display text-lg font-semibold text-[var(--ink-primary)] sm:text-2xl">
                {patentTitle[locale]}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={uiStrings.patentModal.closeLabel[locale]}
              className="liquid-glass-pill inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[var(--ink-primary)] transition-colors duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-12">
            {/* Large Vertical-Dominant Animation Stage (8 columns) */}
            <div className="flex flex-col gap-3 lg:col-span-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5" role="tablist">
                  {steps.map((s, idx) => {
                    const active = idx === activeStepIdx;
                    return (
                      <button
                        key={`${patentId}-${s.stepNumber}`}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => {
                          setAutoPlay(false);
                          setStepIdx(idx);
                        }}
                        className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                          active
                            ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white shadow-sm'
                            : 'liquid-glass-pill text-[var(--ink-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--ink-primary)]'
                        }`}
                      >
                        {s.positionLabel[locale]}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setAutoPlay((p) => !p)}
                    className="liquid-glass-pill inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-[var(--ink-primary)] hover:border-[var(--accent-primary)]"
                  >
                    {autoPlay ? (
                      <>
                        <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{uiStrings.patentModal.pausePlay[locale]}</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{uiStrings.patentModal.autoPlay[locale]}</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAutoPlay(false);
                      setStepIdx(0);
                    }}
                    aria-label="Reset step"
                    className="liquid-glass-pill inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Very Large Tall SVG Viewport filling left stage */}
              <div className="flex min-h-[290px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-[#1D325C] bg-[#061024] p-2.5 sm:min-h-[560px] sm:p-4 lg:min-h-[640px]">
                {is221930 ? (
                  <svg
                    viewBox="42 8 624 422"
                    role="img"
                    aria-label={patentTitle[locale]}
                    className="h-full max-h-[45dvh] w-full sm:max-h-[74vh]"
                  >
                    <defs>
                      <pattern id="hatchSteelLarge" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="#3B82F6" strokeOpacity="0.28" strokeWidth="1.5" />
                      </pattern>
                    </defs>

                    {/* Wellbore Walls */}
                    <line x1="60" y1="16" x2="60" y2="424" stroke="#475569" strokeWidth="2.5" strokeDasharray="6 4" />
                    <line x1="390" y1="16" x2="390" y2="424" stroke="#475569" strokeWidth="2.5" strokeDasharray="6 4" />
                    <text x="68" y="34" fill="#94A3B8" fontSize="11" fontFamily="Inter, sans-serif">
                      {labels.wellbore}
                    </text>

                    {/* Upper Sub */}
                    <path d="M 150 20 H 200 V 80 H 174 V 98 H 150 Z" fill="url(#hatchSteelLarge)" stroke="#60A5FA" strokeWidth="1.6" />
                    <path d="M 300 20 H 250 V 80 H 276 V 98 H 300 Z" fill="url(#hatchSteelLarge)" stroke="#60A5FA" strokeWidth="1.6" />
                    <rect x="171" y="65" width="6" height="8" rx="2" fill="#2DD4BF" />
                    <rect x="273" y="65" width="6" height="8" rx="2" fill="#2DD4BF" />

                    {/* Outer Housing with Lower Bypass Windows */}
                    <rect x="150" y="98" width="22" height="172" fill="#172E59" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="278" y="98" width="22" height="172" fill="#172E59" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="150" y="302" width="22" height="48" fill="#172E59" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="278" y="302" width="22" height="48" fill="#172E59" stroke="#60A5FA" strokeWidth="1.5" />

                    {/* Clean Human-Readable Label: Housing */}
                    <text x="138" y="180" textAnchor="end" fill="#93C5FD" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                      {labels.housing}
                    </text>
                    {/* Clean Human-Readable Label: Bypass Ports */}
                    <text x="312" y="314" textAnchor="start" fill="#2DD4BF" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">
                      {labels.bypass}
                    </text>

                    {/* Guide Pin-Bolts */}
                    <rect x="145" y="126" width="38" height="8" rx="2" fill="#F59E0B" />
                    <rect x="267" y="126" width="38" height="8" rx="2" fill="#F59E0B" />

                    {/* Lower Sub + Pointed Plug Cylinder */}
                    <path d="M 150 350 H 180 V 410 H 150 Z" fill="url(#hatchSteelLarge)" stroke="#60A5FA" strokeWidth="1.6" />
                    <path d="M 300 350 H 270 V 410 H 300 Z" fill="url(#hatchSteelLarge)" stroke="#60A5FA" strokeWidth="1.6" />
                    <rect x="180" y="366" width="22" height="11" fill="#1E3A8A" />
                    <rect x="248" y="366" width="22" height="11" fill="#1E3A8A" />
                    <path d="M 225 264 L 250 290 V 386 H 200 V 290 Z" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="1.8" />
                    <rect x="197" y="302" width="5" height="9" rx="2" fill="#2DD4BF" />
                    <rect x="248" y="302" width="5" height="9" rx="2" fill="#2DD4BF" />
                    <text x="312" y="380" textAnchor="start" fill="#93C5FD" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                      {labels.plug}
                    </text>

                    {/* Compression Spring */}
                    <motion.g
                      style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
                      animate={{ scaleY: spring221930ScaleY }}
                      transition={shouldReduceMotion ? { duration: 0.1 } : { type: 'spring', duration: 0.45, bounce: 0 }}
                    >
                      <path
                        d="M 179 194 L 188 202 L 179 210 L 188 218 L 179 226 L 188 234 L 179 242 L 188 250 L 179 258"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="2.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 271 194 L 262 202 L 271 210 L 262 218 L 271 226 L 262 234 L 271 242 L 262 250 L 271 258"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="2.8"
                        strokeLinejoin="round"
                      />
                    </motion.g>
                    <text x="138" y="246" textAnchor="end" fill="#FBBF24" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                      {labels.spring}
                    </text>

                    {/* Moving Flow-Through Piston with Diaphragm & Lateral Ports */}
                    <motion.g
                      animate={{ y: piston221930Y }}
                      transition={shouldReduceMotion ? { duration: 0.1 } : { type: 'spring', duration: 0.5, bounce: 0 }}
                    >
                      <path d="M 176 80 H 199 V 202 H 176 V 176 H 185 V 104 H 176 Z" fill="#475569" stroke="#CBD5E1" strokeWidth="1.3" />
                      <path d="M 274 80 H 251 V 202 H 274 V 176 H 265 V 104 H 274 Z" fill="#475569" stroke="#CBD5E1" strokeWidth="1.3" />
                      <rect x="187" y="186" width="13" height="18" fill="#475569" stroke="#CBD5E1" strokeWidth="1.2" />
                      <rect x="250" y="186" width="13" height="18" fill="#475569" stroke="#CBD5E1" strokeWidth="1.2" />
                      <rect x="187" y="236" width="13" height="22" fill="#475569" stroke="#CBD5E1" strokeWidth="1.2" />
                      <rect x="250" y="236" width="13" height="22" fill="#475569" stroke="#CBD5E1" strokeWidth="1.2" />

                      {/* Streamlined Diaphragm inside piston */}
                      <path d="M 199 134 H 211 L 215 150 H 199 Z" fill="#3B82F6" />
                      <path d="M 251 134 H 239 L 235 150 H 251 Z" fill="#3B82F6" />
                      <rect x="199" y="150" width="16" height="9" fill="#93C5FD" />
                      <rect x="235" y="150" width="16" height="9" fill="#93C5FD" />

                      <text x="312" y="148" textAnchor="start" fill="#F1F5F9" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                        {labels.piston}
                      </text>
                    </motion.g>

                    {/* Fluid Streamlines */}
                    <motion.line
                      x1="225"
                      y1="14"
                      x2="225"
                      y2={isBypass221930 ? 284 : 424}
                      stroke="#38BDF8"
                      strokeWidth="3.6"
                      strokeDasharray="8 6"
                      animate={shouldReduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, -28] }}
                      transition={shouldReduceMotion ? { duration: 0 } : { repeat: Infinity, ease: 'linear', duration: 0.6 }}
                    />

                    {/* Direct bit flow when closed */}
                    <motion.g animate={{ opacity: isBypass221930 ? 0.08 : 0.95 }} transition={{ duration: 0.25 }}>
                      <path d="M 225 246 C 209 266, 189 298, 189 358 L 189 420" fill="none" stroke="#38BDF8" strokeWidth="2.6" strokeDasharray="6 5" />
                      <path d="M 225 246 C 241 266, 261 298, 261 358 L 261 420" fill="none" stroke="#38BDF8" strokeWidth="2.6" strokeDasharray="6 5" />
                    </motion.g>

                    {/* Lateral Bypass Flow exiting into annulus */}
                    <motion.g animate={{ opacity: isBypass221930 ? 1 : 0.05 }} transition={{ duration: 0.25 }}>
                      <motion.path
                        d="M 225 282 Q 170 286 78 286"
                        fill="none"
                        stroke="#2DD4BF"
                        strokeWidth="3.6"
                        strokeDasharray="7 5"
                        animate={isBypass221930 && !shouldReduceMotion ? { strokeDashoffset: [0, -24] } : { strokeDashoffset: 0 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 0.5 }}
                      />
                      <motion.path
                        d="M 225 282 Q 280 286 372 286"
                        fill="none"
                        stroke="#2DD4BF"
                        strokeWidth="3.6"
                        strokeDasharray="7 5"
                        animate={isBypass221930 && !shouldReduceMotion ? { strokeDashoffset: [0, -24] } : { strokeDashoffset: 0 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 0.5 }}
                      />
                    </motion.g>

                    {/* Synchronized J-Slot Cycle Indexer */}
                    <g transform="translate(455, 36)">
                      <rect x="0" y="0" width="200" height="178" rx="10" fill="#0C1730" stroke="#2A457A" strokeWidth="1.2" />
                      <text x="14" y="24" fill="#93C5FD" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
                        {uiStrings.patentModal.jSlotTitle[locale]}
                      </text>
                      <g transform="translate(42, 46)">
                        <path
                          d="M 24 18 L 24 74 L 48 74 L 64 58 L 82 74 L 96 18 L 24 18"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="6"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          opacity="0.35"
                        />
                        <path
                          d="M 24 18 L 24 74 L 48 74 L 64 58 L 82 74 L 96 18"
                          fill="none"
                          stroke="#60A5FA"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <motion.circle
                          r="7"
                          fill="#F59E0B"
                          stroke="#FFFFFF"
                          strokeWidth="1.6"
                          animate={{ cx: jSlotPinCoords.x, cy: jSlotPinCoords.y }}
                          transition={shouldReduceMotion ? { duration: 0.1 } : { type: 'spring', duration: 0.45, bounce: 0 }}
                        />
                      </g>
                      <text x="14" y="160" fill="#CBD5E1" fontSize="10.5" fontFamily="Inter, sans-serif">
                        {activeStep.positionLabel[locale]}
                      </text>
                    </g>

                    {/* Clear Status Box */}
                    <g transform="translate(455, 232)">
                      <rect x="0" y="0" width="200" height="96" rx="10" fill="#0C1730" stroke="#2A457A" strokeWidth="1.2" />
                      <circle cx="18" cy="36" r="5.5" fill={isBypass221930 ? '#334155' : '#38BDF8'} />
                      <text x="32" y="40" fill={isBypass221930 ? '#64748B' : '#F8FAFC'} fontSize="11.5" fontFamily="Inter, sans-serif">
                        {locale === 'ru' ? 'Поток к долоту' : locale === 'en' ? 'Flow to drill bit' : '流向钻头'}
                      </text>
                      <circle cx="18" cy="68" r="5.5" fill={isBypass221930 ? '#2DD4BF' : '#334155'} />
                      <text x="32" y="72" fill={isBypass221930 ? '#2DD4BF' : '#64748B'} fontSize="11.5" fontWeight={isBypass221930 ? '700' : '400'} fontFamily="Inter, sans-serif">
                        {locale === 'ru' ? 'Поток в затрубье' : locale === 'en' ? 'Flow to annulus' : '旁通入环空'}
                      </text>
                    </g>
                  </svg>
                ) : (
                  /* Patent RU 226121 U1 — Simplified Tall Packer Cutaway */
                  <svg
                    viewBox="48 10 544 400"
                    role="img"
                    aria-label={patentTitle[locale]}
                    className="h-full max-h-[45dvh] w-full sm:max-h-[74vh]"
                  >
                    <line x1="70" y1="18" x2="70" y2="402" stroke="#64748B" strokeWidth="3.5" />
                    <line x1="570" y1="18" x2="570" y2="402" stroke="#64748B" strokeWidth="3.5" />
                    <text x="84" y="38" fill="#94A3B8" fontSize="12" fontFamily="Inter, sans-serif">
                      {labels.wellbore}
                    </text>

                    {/* Upper sub & Housing */}
                    <rect x="220" y="28" width="32" height="60" fill="#172E59" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="388" y="28" width="32" height="60" fill="#172E59" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="220" y="88" width="28" height="132" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="392" y="88" width="28" height="132" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="220" y="276" width="28" height="100" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.5" />
                    <rect x="392" y="276" width="28" height="100" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.5" />
                    <text x="206" y="150" textAnchor="end" fill="#93C5FD" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                      {labels.housing}
                    </text>

                    {/* Return Spring */}
                    <motion.g
                      style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
                      animate={{ scaleY: packerSlipsExtended ? 0.5 : 1 }}
                      transition={shouldReduceMotion ? { duration: 0.1 } : { type: 'spring', duration: 0.4, bounce: 0 }}
                    >
                      <path d="M 254 256 L 266 266 L 254 276 L 266 286 L 254 296 L 266 306 L 254 316" fill="none" stroke="#F59E0B" strokeWidth="2.8" />
                      <path d="M 386 256 L 374 266 L 386 276 L 374 286 L 386 296 L 374 306 L 386 316" fill="none" stroke="#F59E0B" strokeWidth="2.8" />
                    </motion.g>
                    <text x="436" y="294" textAnchor="start" fill="#FBBF24" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                      {labels.spring}
                    </text>

                    {/* Conical Piston */}
                    <motion.g
                      animate={{ y: packerPistonY }}
                      transition={shouldReduceMotion ? { duration: 0.1 } : { type: 'spring', duration: 0.45, bounce: 0 }}
                    >
                      <path d="M 254 78 H 284 V 176 L 264 220 H 254 Z" fill="#475569" stroke="#CBD5E1" strokeWidth="1.3" />
                      <path d="M 386 78 H 356 V 176 L 376 220 H 386 Z" fill="#475569" stroke="#CBD5E1" strokeWidth="1.3" />
                      <path d="M 284 118 H 304 L 310 132 H 284 Z" fill="#3B82F6" />
                      <path d="M 356 118 H 336 L 330 132 H 356 Z" fill="#3B82F6" />
                      <text x="436" y="130" textAnchor="start" fill="#F1F5F9" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
                        {labels.piston}
                      </text>
                    </motion.g>

                    {/* Radially Extending Slips + Telescoping Guide Arms */}
                    <motion.g animate={{ opacity: packerSlipsExtended ? 1 : 0 }} transition={{ duration: 0.25 }}>
                      <line x1="100" y1="240" x2="222" y2="240" stroke="#60A5FA" strokeWidth="3.5" />
                      <line x1="100" y1="256" x2="222" y2="256" stroke="#60A5FA" strokeWidth="3.5" />
                      <line x1="418" y1="240" x2="540" y2="240" stroke="#60A5FA" strokeWidth="3.5" />
                      <line x1="418" y1="256" x2="540" y2="256" stroke="#60A5FA" strokeWidth="3.5" />
                    </motion.g>
                    <motion.g
                      animate={{ x: packerSlipsExtended ? -145 : 0 }}
                      transition={shouldReduceMotion ? { duration: 0.1 } : { type: 'spring', duration: 0.45, bounce: 0 }}
                    >
                      <polygon points="216,220 248,220 248,274 216,274" fill="#0F766E" stroke="#2DD4BF" strokeWidth="1.8" />
                    </motion.g>
                    <motion.g
                      animate={{ x: packerSlipsExtended ? 145 : 0 }}
                      transition={shouldReduceMotion ? { duration: 0.1 } : { type: 'spring', duration: 0.45, bounce: 0 }}
                    >
                      <polygon points="392,220 424,220 424,274 392,274" fill="#0F766E" stroke="#2DD4BF" strokeWidth="1.8" />
                    </motion.g>
                    <text x="148" y="206" textAnchor="middle" fill="#2DD4BF" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">
                      {labels.slips}
                    </text>

                    {/* Central Flow */}
                    <motion.line
                      x1="320"
                      y1="16"
                      x2="320"
                      y2="404"
                      stroke="#38BDF8"
                      strokeWidth="3.6"
                      strokeDasharray="8 6"
                      animate={shouldReduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, -28] }}
                      transition={shouldReduceMotion ? { duration: 0 } : { repeat: Infinity, ease: 'linear', duration: 0.6 }}
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Right Sidebar: Active Step Phase Card at Top, Overview, Core Assemblies & Patent QR */}
            <div className="flex flex-col justify-between gap-3.5 lg:col-span-4">
              <div className="space-y-3.5">
                {/* Active Step Explanation Box Moved to Right Sidebar Top */}
                <div className="liquid-glass rounded-xl border-l-4 border-l-[var(--accent-primary)] p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-wide text-[var(--accent-primary)]">
                      {uiStrings.patentModal.activeStepHeading[locale]}
                    </span>
                    <span className="font-mono-tech text-xs font-semibold text-[var(--ink-muted)]">
                      {activeStepIdx + 1} / {steps.length}
                    </span>
                  </div>
                  <p className="mt-1 font-mono-tech text-xs font-medium text-[var(--accent-primary)]">
                    {activeStep.positionLabel[locale]}
                  </p>
                  <h4 className="mt-1 font-serif-display text-sm font-semibold text-[var(--ink-primary)] sm:text-base">
                    {activeStep.title[locale]}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--ink-secondary)] sm:text-sm">
                    {activeStep.description[locale]}
                  </p>
                </div>

                <div className="liquid-glass rounded-xl p-3.5 sm:p-4">
                  <h4 className="font-serif-display text-sm font-semibold text-[var(--ink-primary)]">
                    {uiStrings.patentModal.overviewTitle[locale]}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-secondary)]">
                    {is221930 ? GENERAL_OVERVIEW_221930[locale] : GENERAL_OVERVIEW_226121[locale]}
                  </p>
                </div>

                <div className="liquid-glass rounded-xl p-3.5 sm:p-4">
                  <h4 className="font-serif-display text-sm font-semibold text-[var(--ink-primary)]">
                    {uiStrings.patentModal.legendTitle[locale]}
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[var(--ink-secondary)]">
                    {(is221930 ? ASSEMBLIES_221930 : ASSEMBLIES_226121).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]"
                          aria-hidden="true"
                        />
                        <span>{item[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="liquid-glass flex items-center gap-3.5 rounded-xl p-3.5 sm:p-4">
                <div className="shrink-0 rounded-lg border border-[var(--border-subtle)] bg-white p-1.5">
                  <QRCodeSVG
                    value={patentUrl}
                    size={88}
                    level="M"
                    fgColor="#0F172A"
                    bgColor="#FFFFFF"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono-tech text-[11px] font-semibold text-[var(--accent-primary)]">
                    QR · {uiStrings.patentModal.patentLabel[locale]}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-[var(--ink-secondary)]">
                    {is221930 ? 'RU 221930 U1' : 'RU 226121 U1'}
                  </p>
                  <a
                    href={patentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-primary)] hover:underline"
                  >
                    <span>{uiStrings.patentModal.openPatentDoc[locale]}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
