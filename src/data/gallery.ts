import type { GalleryPhotoItem } from '../types/content';

const FORPOST_2026_URL =
  'https://forpost-sz.ru/a/2026-07-27/kak-v-2026-godu-proshli-letnie-shkoly-v-gornom-universitete';
const FORPOST_2024_URL =
  'https://forpost-sz.ru/a/2024-06-27/uchebno-nauchnyj-poligon-sankt-peterburgskogo-gornogo-sablino-porazhaet-svoim';
const PATENT_221930_URL = 'https://patents.google.com/patent/RU221930U1/ru';

export const galleryData: GalleryPhotoItem[] = [
  {
    id: 'forpost-2026-summer',
    src: '/images/gallery/forpost_2026_summer.jpg',
    category: 'field',
    date: { ru: 'Июль 2026', en: 'July 2026', zh: '2026年7月' },
    title: {
      ru: 'Международные Летние школы — 2026 на полигоне «Саблино»',
      en: '2026 International Summer Schools at Sablino Ground',
      zh: '2026年圣彼得堡矿业大学国际暑期学校现场教学',
    },
    caption: {
      ru: 'Демонстрация узлов буровой установки и циркуляционных систем иностранным участникам Летних школ Санкт-Петербургского горного университета.',
      en: 'Demonstrating drilling rig assemblies and circulation systems to international Summer School participants at Mining University.',
      zh: '向参加矿业大学国际暑期学校的各国学员现场讲解钻机结构及钻井液循环系统。',
    },
    location: {
      ru: 'УНП «Саблино» · Форпост СЗ',
      en: 'Sablino Ground · Forpost-SZ',
      zh: '萨布利诺实验基地 · Forpost-SZ',
    },
    articleUrl: FORPOST_2026_URL,
    articleLabel: {
      ru: 'Статья о Летних школах — 2026',
      en: 'Read 2026 Summer Schools Article',
      zh: '阅读 2026 暑期学校报道',
    },
  },
  {
    id: 'forpost-2024-sablino',
    src: '/images/gallery/forpost_2024_sablino.jpg',
    category: 'field',
    date: { ru: 'Июнь 2024', en: 'June 2024', zh: '2024年6月' },
    title: {
      ru: 'Буровой комплекс УНП «Саблино» (КРС-100 / УРБ-2Д3)',
      en: 'Sablino Training & Research Ground Drilling Complex',
      zh: '萨布利诺教学科研实验基地钻探场区交流实景',
    },
    caption: {
      ru: 'Совместная полевая работа с зарубежными коллегами на технологической площадке УНП «Саблино» на фоне буровых агрегатов КРС-100 и УРБ-2Д3.',
      en: 'Fieldwork with international colleagues at the Sablino training ground beside KRS-100 workover and URB-2D3 exploration rigs.',
      zh: '与国际科研合作团队在萨布利诺实验基地 KRS-100 修井机及 URB-2D3 钻机井场开展现场交流。',
    },
    location: {
      ru: 'УНП «Саблино» · Форпост СЗ',
      en: 'Sablino Ground · Forpost-SZ',
      zh: '萨布利诺实验基地 · Forpost-SZ',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'Статья о полигоне «Саблино»',
      en: 'Read Sablino Facility Article',
      zh: '阅读萨布利诺基地专访报道',
    },
  },
  {
    id: 'forpost-sablino-rig-crew',
    src: '/images/gallery/forpost_sablino_rig_crew_1080p.jpg',
    category: 'field',
    date: { ru: '2024–2025', en: '2024–2025', zh: '2024–2025' },
    title: {
      ru: 'ДПК: бурение скважин установкой УРБ-2Д3 со студентами',
      en: 'Additional Competency: Well Drilling on URB-2D3 Rig with Students',
      zh: '附加职业技能实践：URB-2D3 钻机现场操作带教',
    },
    caption: {
      ru: 'Реализация программы ДПК «Практические навыки и опыт работы бурения скважин установкой УРБ-2Д3» и рабочей профессии «Машинист буровой установки» на УНП «Саблино».',
      en: 'Leading hands-on student training under the URB-2D3 Drilling Rig Practical Competency and Rig Operator programs at Sablino Ground.',
      zh: '在萨布利诺基地指导学生开展 URB-2D3 钻机实操训练与“钻机司钻工”职业技能培训。',
    },
    location: {
      ru: 'УНП «Саблино» · Форпост СЗ',
      en: 'Sablino Ground · Forpost-SZ',
      zh: '萨布利诺实验基地 · Forpost-SZ',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'Статья о полигоне «Саблино»',
      en: 'Read Sablino Facility Article',
      zh: '阅读萨布利诺基地报道',
    },
  },
  {
    id: 'forpost-sablino-derrick',
    src: '/images/gallery/forpost_sablino_derrick_1080p.jpg',
    category: 'field',
    date: { ru: '2024–2025', en: '2024–2025', zh: '2024–2025' },
    title: {
      ru: 'Рабочая профессия «Машинист буровой установки» (КРС-100 / УРБ-2Д3)',
      en: 'Drilling Rig Operator Trade Training (KRS-100 / URB-2D3)',
      zh: '“钻机司钻工”职业资质实训（KRS-100 / URB-2D3 井架作业）',
    },
    caption: {
      ru: 'Инструктаж учебной смены студентов у талевой системы и буровой мачты при отработке спуско-подъёмных операций на установках КРС-100 и УРБ-2Д3.',
      en: 'Rig-floor safety and travelling-block rigging instruction during student hoisting and tripping shifts on KRS-100 and URB-2D3.',
      zh: '在基地钻机游车与天车滑轮系统旁指导本科及硕士生进行起下钻作业规范演练。',
    },
    location: {
      ru: 'УНП «Саблино» · Форпост СЗ',
      en: 'Sablino Ground · Forpost-SZ',
      zh: '萨布利诺实验基地 · Forpost-SZ',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'Статья о полигоне «Саблино»',
      en: 'Read Sablino Facility Article',
      zh: '阅读萨布利诺基地报道',
    },
  },
  {
    id: 'pbl-bench-mode',
    src: '/images/pbl-bench-test.png',
    category: 'rd',
    date: { ru: '2024–2025', en: '2024–2025', zh: '2024–2025' },
    title: {
      ru: 'Стендовые испытания переводника PBL',
      en: 'PBL Circulation Sub Bench Trials',
      zh: 'PBL 循环短节水力台架试验',
    },
    caption: {
      ru: 'Переключение гидравлического режима прототипа: основной осевой поток (слева) и активированный байпасный сброс через боковые порты (справа).',
      en: 'Prototype hydraulic switching: primary axial circulation (left) vs. activated lateral bypass flow through side ports (right).',
      zh: '样机水力切换对比：左侧为常规轴向循环，右侧为激活后旁通侧孔分流模式。',
    },
    location: {
      ru: 'Лаборатория и стенд СПГУ',
      en: 'Mining University Test Bench',
      zh: '圣彼得堡矿业大学实验台架',
    },
    articleUrl: PATENT_221930_URL,
    articleLabel: {
      ru: 'Патент RU 221930 U1',
      en: 'Patent RU 221930 U1',
      zh: '专利 RU 221930 U1',
    },
  },
  {
    id: 'pbl-confuser-stand',
    src: '/images/pbl-confuser-rig.png',
    category: 'rd',
    date: { ru: '2025', en: '2025', zh: '2025' },
    title: {
      ru: 'Стенд проточного поршня с конфузорным переходом',
      en: 'Flow-Through Piston Confuser Rig',
      zh: '渐缩流通活塞试验台架与流道设计',
    },
    caption: {
      ru: 'Исследование гидравлических сопротивлений сменных конфузорных вставок и верификация расчётной CFD-геометрии узла.',
      en: 'Experimental investigation of hydraulic drag across interchangeable confuser inserts and validation of CFD piston geometry.',
      zh: '不同几何尺寸渐缩插件的压降阻力实测及 CFD 流体仿真模型校准。',
    },
    location: {
      ru: 'Санкт-Петербург · СПГУ',
      en: 'Saint Petersburg · Mining University',
      zh: '圣彼得堡 · 矿业大学',
    },
    articleUrl: 'https://doi.org/10.5829/ije.2025.38.04a.21',
    articleLabel: {
      ru: 'Статья в IJE (DOI 38.04a.21)',
      en: 'IJE Paper (DOI 38.04a.21)',
      zh: 'IJE 期刊论文 (DOI 38.04a.21)',
    },
  },
  {
    id: 'pbl-cad-roadmap',
    src: '/images/pbl-cutaway.png',
    category: 'rd',
    date: { ru: '2025–2026', en: '2025–2026', zh: '2025–2026' },
    title: {
      ru: 'Цифровой двойник и КД циркуляционного переводника PBL',
      en: 'Digital Twin & Engineering Cutaway (PBL)',
      zh: 'PBL 循环短节三维剖面与研发路线',
    },
    caption: {
      ru: 'Трёхмерная сборка пружинно-клапанного узла с конфузорным поршнем; опытный образец переводника передан на заводские испытания.',
      en: '3D assembly of the spring-returned valve and confuser piston; the manufactured prototype is currently undergoing factory trials.',
      zh: '带弹簧复位及渐缩活塞的三维总成结构图；工程样机已进入工厂测试阶段。',
    },
    location: {
      ru: 'СПГУ · Заводские испытания',
      en: 'Mining University · Factory Trials',
      zh: '矿业大学 · 厂内试验中',
    },
    articleUrl: PATENT_221930_URL,
    articleLabel: {
      ru: 'Патент RU 221930 U1',
      en: 'Patent RU 221930 U1',
      zh: '专利 RU 221930 U1',
    },
  },
  {
    id: 'sablino-dpk-march',
    src: '/images/gallery/slide_02_dpk_march.png',
    category: 'field',
    date: { ru: 'Март 2025', en: 'March 2025', zh: '2025年3月' },
    title: {
      ru: 'ДПК «Практические навыки и опыт работы бурения скважин установкой УРБ-2Д3»',
      en: 'Practical Competency Program: Well Drilling on URB-2D3 Rig',
      zh: '附加职业能力课程：URB-2D3 钻机井筒钻探实操',
    },
    caption: {
      ru: 'Обучение студентов практическим навыкам вращательного бурения и управления гидросистемой самоходной установки УРБ-2Д3 на полигоне «Саблино».',
      en: 'Hands-on student instruction in rotary drilling and hydraulic system controls on the self-propelled URB-2D3 unit at Sablino.',
      zh: '在萨布利诺实验基地开展 URB-2D3 自行式车载钻机回转钻进及液压系统操控实训。',
    },
    location: {
      ru: 'УНП «Саблино», Ленобласть',
      en: 'Sablino Ground, Leningrad Oblast',
      zh: '列宁格勒州 · 萨布利诺基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-1905-crew',
    src: '/images/gallery/slide_05_1905.png',
    category: 'field',
    date: { ru: 'Май 2025', en: 'May 2025', zh: '2025年5月' },
    title: {
      ru: 'ДПК: бурение с гидротранспортом керна на КГК-100',
      en: 'KGK-100 Reverse-Circulation Core Hydrotransport Drilling Shift',
      zh: 'KGK-100 岩心水力反循环钻探实训班组',
    },
    caption: {
      ru: 'Практическая подготовка студентов по программе ДПК на установке КГК-100 (КАМАЗ-43118-50) и освоения смежной техники уровня КРС-100.',
      en: 'Student shift completing the KGK-100 core hydrotransport drilling competency module on the KAMAZ-43118-50 chassis rig.',
      zh: '学生团队基于卡玛斯底盘 KGK-100 车载钻机完成岩心水力反循环连续取心工艺实践。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'forpost-sablino-kamaz',
    src: '/images/gallery/forpost_sablino_kamaz_1080p.jpg',
    category: 'field',
    date: { ru: '2024–2025', en: '2024–2025', zh: '2024–2025' },
    title: {
      ru: 'Учебная смена на установке УРБ-2Д3 / КГК-100 (КАМАЗ)',
      en: 'Field Shift on KAMAZ Mobile Drilling Unit (URB-2D3 / KGK-100)',
      zh: '卡玛斯底盘移动钻机（URB-2D3 / KGK-100）现场教学班组',
    },
    caption: {
      ru: 'Полевая практика студентов горного и нефтегазового профилей: освоение монтажа мачты, работы лебёдки и циркуляционного комплекса.',
      en: 'Field practicum for mining and petroleum students mastering mast erection, hoisting winch operation, and surface circulation setups.',
      zh: '采矿与石油工程方向学生联合实操：井架起放、绞车操作与地面泥浆循环管汇连接。',
    },
    location: {
      ru: 'УНП «Саблино» · Форпост СЗ',
      en: 'Sablino Ground · Forpost-SZ',
      zh: '萨布利诺实验基地 · Forpost-SZ',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'forpost-sablino-wellpad',
    src: '/images/gallery/forpost_sablino_wellpad_1080p.jpg',
    category: 'field',
    date: { ru: 'Июнь 2024', en: 'June 2024', zh: '2024年6月' },
    title: {
      ru: 'Буровая площадка агрегата КРС-100 и учебный полигон',
      en: 'KRS-100 Workover Rig Pad at Sablino Training Ground',
      zh: '萨布利诺基地 KRS-100 修井及重型钻机训练井场全景',
    },
    caption: {
      ru: 'Технологическая площадка буровых работ УНП «Саблино» с агрегатом КРС-100 и приёмными мостками для подготовки помощников бурильщика ЭиРБСНГ.',
      en: 'Full-scale Sablino drilling pad equipped with the KRS-100 unit and pipe racks for Assistant Driller qualification training.',
      zh: '配备 KRS-100 钻修机与钻杆管排架的萨布利诺全景实训井场。',
    },
    location: {
      ru: 'УНП «Саблино» · Форпост СЗ',
      en: 'Sablino Ground · Forpost-SZ',
      zh: '萨布利诺实验基地 · Forpost-SZ',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-winter-rig',
    src: '/images/gallery/slide_09_w2.jpg',
    category: 'field',
    date: { ru: 'Зима 2024–2025', en: 'Winter 2024–2025', zh: '2024–2025年冬季' },
    title: {
      ru: 'Зимние пусковые работы на буровой установке КГК-100 / УРБ-2Д3',
      en: 'Winter Rig Operations on KGK-100 / URB-2D3 Unit',
      zh: '冬季低温工况下 KGK-100 / URB-2D3 钻机启动调试',
    },
    caption: {
      ru: 'Подготовка и проверка работы самоходной буровой установки на базе КАМАЗ-43118-50 в зимних полевых условиях.',
      en: 'Field commissioning and cold-weather operation check on the KAMAZ-43118-50 mobile drilling rig.',
      zh: '冬季严寒现场条件下卡玛斯-43118-50车载钻机的泵压调试与工况检验。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-pump-team',
    src: '/images/gallery/slide_01_0506.png',
    category: 'field',
    date: { ru: 'Июнь 2025', en: 'June 2025', zh: '2025年6月' },
    title: {
      ru: 'Рабочая профессия «Помощник бурильщика ЭиРБСНГ» (КРС-100 / УРБ-2Д3)',
      en: 'Assistant Driller Qualification Practice (KRS-100 / URB-2D3)',
      zh: '“油气井副钻井工”职业资质实操（KRS-100 / URB-2D3）',
    },
    caption: {
      ru: 'Совместная работа с учебной буровой бригадой на полигоне «Саблино»: отработка операций спуско-подъёма и контроля циркуляции бурового раствора.',
      en: 'Hands-on student crew supervision at Sablino Ground covering tripping operations and mud circulation monitoring.',
      zh: '带领学生钻井班组在现场开展井口作业、起下钻及钻井液循环系统监测训练。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-rig-panorama',
    src: '/images/gallery/slide_04_0319a.png',
    category: 'field',
    date: { ru: 'Март 2025', en: 'March 2025', zh: '2025年3月' },
    title: {
      ru: 'Буровая площадка УРБ-2Д3 и насосный блок 8Т650',
      en: 'URB-2D3 Drill Pad & Mud Pump Circulation Line',
      zh: 'URB-2D3 井场布置与泥浆泵循环管汇连接',
    },
    caption: {
      ru: 'Обвязка мобильной буровой установки с циркуляционной системой и буровым насосом при отработке промывки ствола студентами ДПК.',
      en: 'Rig-up of the mobile URB-2D3 unit with circulation manifold and mud pump during borehole flushing practice.',
      zh: '移动钻机与高压泥浆泵及循环管汇的现场连接与洗井工艺实训。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-1405-team',
    src: '/images/gallery/slide_03_1405.jpg',
    category: 'field',
    date: { ru: 'Май 2025', en: 'May 2025', zh: '2025年5月' },
    title: {
      ru: 'Пульт машиниста буровой установки УРБ-2Д3',
      en: 'Driller Console Training on URB-2D3 Rig',
      zh: 'URB-2D3 司钻控制台现场带教与压力监测',
    },
    caption: {
      ru: 'Обучение студентов 1–5 курсов контролю давления нагнетания, режимам промывки и технике безопасности в рамках рабочих профессий СПГУ.',
      en: 'Training undergraduate and graduate students in standpipe pressure control, mud circulation, and rig-floor safety.',
      zh: '在司钻控制台指导矿业大学本硕生掌握泵压调节、循环排量控制与现场安全规程。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-0319b-hose',
    src: '/images/gallery/slide_06_0319b.png',
    category: 'field',
    date: { ru: 'Март 2025', en: 'March 2025', zh: '2025年3月' },
    title: {
      ru: 'Промывочный контур и обвязка УРБ-2Д3',
      en: 'Circulation Manifold & Suction Line Setup (URB-2D3)',
      zh: 'URB-2D3 钻井液循环管路与水力流程调试',
    },
    caption: {
      ru: 'Работа учебной бригады у буровой мачты УРБ-2Д3 и всасывающей линии при подготовке промывочного контура модели скважины.',
      en: 'Student crew coordinating rig-floor operations and suction-line assembly for model well circulation testing.',
      zh: '模型井循环回路筹备期间在钻机井架与吸浆管线开展的现场协同实训。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-120525',
    src: '/images/gallery/slide_07_120525.png',
    category: 'field',
    date: { ru: '12 мая 2025', en: 'May 12, 2025', zh: '2025年5月12日' },
    title: {
      ru: 'Настройка нагнетательной линии и вертлюга (КРС-100 / УРБ-2Д3)',
      en: 'Rotary Hose & Swivel Calibration Shift',
      zh: '水龙头与高压水龙带系统巡检实训',
    },
    caption: {
      ru: 'Проверка гидравлической обвязки вертлюга и рукава высокого давления студентами программы «Помощник бурильщика ЭиРБСНГ» перед запуском бурения.',
      en: 'Inspecting the rotary swivel and high-pressure mud hose assembly with Assistant Driller trainees prior to spud-in.',
      zh: '开钻前带领职业资质实训学员对水龙头及高压钻井水龙带进行耐压巡检与标定。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
  {
    id: 'sablino-130525',
    src: '/images/gallery/slide_08_130525.png',
    category: 'field',
    date: { ru: '13 мая 2025', en: 'May 13, 2025', zh: '2025年5月13日' },
    title: {
      ru: 'Работа с бурильным инструментом на мостках (КРС-100 / УРБ-2Д3)',
      en: 'Drill Pipe & Tool Rack Handling Practice',
      zh: '管排架钻具检查与井口协同实训',
    },
    caption: {
      ru: 'Производственная практика студентов СПГУ на полигоне «Саблино»: дефектоскопия и подготовка бурильных труб и элементов КНБК.',
      en: 'Mining University field practicum: drill pipe inspection and BHA component preparation on the pipe rack.',
      zh: '矿业大学生产实习现场：钻杆柱及下部钻具组合（BHA）入井前检查准备。',
    },
    location: {
      ru: 'УНП «Саблино»',
      en: 'Sablino Ground',
      zh: '萨布利诺实验基地',
    },
    articleUrl: FORPOST_2024_URL,
    articleLabel: {
      ru: 'О полигоне «Саблино» (Форпост СЗ)',
      en: 'Sablino Facility Article (Forpost-SZ)',
      zh: '萨布利诺基地报道 (Forpost-SZ)',
    },
  },
];
