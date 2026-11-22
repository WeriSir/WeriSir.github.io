import type { LocalizedText } from '../types/content';

export interface EvaporiteBasin {
  id: string;
  coords: [number, number]; // [lat, lng]
  name: LocalizedText;
  region: LocalizedText;
  geology: LocalizedText;
  drillingChallenge: LocalizedText;
  isFocusStudy?: boolean;
}

export const saltBasinsData: EvaporiteBasin[] = [
  {
    id: 'kovykta',
    coords: [55.1, 105.8],
    isFocusStudy: true,
    name: {
      ru: 'Ковыктинское ГКМ',
      en: 'Kovykta Gas Condensate Field',
      zh: '科维克塔凝析气田',
    },
    region: {
      ru: 'Восточная Сибирь, Россия',
      en: 'Eastern Siberia, Russia',
      zh: '俄罗斯 · 东西伯利亚',
    },
    geology: {
      ru: 'Мощные кембрийские соленосные толщи (ангарская, бельская, усольская свиты) и подсолевые карбонаты.',
      en: 'Thick Cambrian evaporite/halite sequences overlying fractured carbonate reservoirs.',
      zh: '巨厚寒武系膏盐岩层覆盖裂缝性碳酸盐岩气藏。',
    },
    drillingChallenge: {
      ru: 'Рапопроявления с АВПД сменяются интенсивными поглощениями в трещиноватых коллекторах — целевой объект магистерской ВКР.',
      en: 'Alternating high-pressure brine kicks and severe mud losses; subject of M.Sc. thesis engineering.',
      zh: '高压卤水侵与裂缝性恶性井漏并存——硕士研究核心区块。',
    },
  },
  {
    id: 'precaspian',
    coords: [47.5, 49.5],
    name: {
      ru: 'Прикаспийская впадина',
      en: 'Pre-Caspian Salt Basin',
      zh: '里海沿岸含盐盆地',
    },
    region: {
      ru: 'Астраханское / Карачаганакское ГКМ',
      en: 'Astrakhan & Karachaganak GCF',
      zh: '阿斯特拉罕 / 卡拉恰甘纳克气田',
    },
    geology: {
      ru: 'Кунгурские соляные купола и подсолевые глубокозалегающие газоконденсатные залежи.',
      en: 'Kungurian salt domes capping deep subsalt gas-condensate reservoirs.',
      zh: '二叠系孔古尔阶巨型盐丘盖层及深层盐下凝析气藏。',
    },
    drillingChallenge: {
      ru: 'Узкое окно бурения между течением солей, рапой и поглощениями бурового раствора.',
      en: 'Narrow mud-weight window between salt creep, high-pressure brines, and severe lost circulation.',
      zh: '盐岩蠕变、高压盐水层与漏失层同井段交错，钻井液安全密度窗口极窄。',
    },
  },
  {
    id: 'persian-gulf',
    coords: [26.5, 52.0],
    name: {
      ru: 'Персидский залив (Южный Парс)',
      en: 'Persian Gulf (South Pars / North Field)',
      zh: '波斯湾（南帕尔斯/北方气田）',
    },
    region: {
      ru: 'Ближний Восток',
      en: 'Middle East Basin',
      zh: '中东地区',
    },
    geology: {
      ru: 'Миоценовые эвапориты формации Гачсаран и трещиновато-кавернозные карбонатные газовые коллекторы.',
      en: 'Gachsaran evaporites above fractured-vuggy Permian–Triassic carbonate gas reservoirs.',
      zh: '加奇萨兰组蒸发岩系及二叠-三叠系裂缝溶洞型碳酸盐岩气层。',
    },
    drillingChallenge: {
      ru: 'Катастрофические поглощения и необходимость быстрой доставки кольматантов через переводники PBL.',
      en: 'Total mud losses requiring rapid, high-concentration LCM spotting through bypass subs.',
      zh: '易发生失返性恶性井漏，迫切需要通过水力旁通短节快速注入高浓度堵漏材料。',
    },
  },
  {
    id: 'tarim-sichuan',
    coords: [37.0, 92.0],
    name: {
      ru: 'Таримский и Сычуаньский бассейны',
      en: 'Tarim & Sichuan Basins',
      zh: '塔里木与四川盆地',
    },
    region: {
      ru: 'Западный и Юго-Западный Китай',
      en: 'Western & Southwestern China',
      zh: '中国西部与西南气区',
    },
    geology: {
      ru: 'Сверхглубокие гипсо-солевые толщи и трещиноватые газоконденсатные карбонатные залежи.',
      en: 'Ultra-deep gypsum-salt beds over fractured gas-condensate carbonate formations.',
      zh: '超深层膏盐岩盖层及深部裂缝性碳酸盐岩凝析气藏。',
    },
    drillingChallenge: {
      ru: 'Экстремальные температуры и перепады пластовых давлений, осложнённые поглощениями под солью.',
      en: 'Extreme HPHT gradients paired with subsalt fractured lost-circulation intervals.',
      zh: '超深高温高压与盐下多压力系统导致频繁井漏，亟需可控水力堵漏工具。',
    },
  },
  {
    id: 'north-sea',
    coords: [56.5, 3.0],
    name: {
      ru: 'Бассейн Цехштейн (Северное море)',
      en: 'Zechstein Basin (North Sea)',
      zh: '北海蔡希斯坦含盐盆地',
    },
    region: {
      ru: 'Шельф Северной Европы',
      en: 'Northern European Offshore',
      zh: '北欧大陆架海域',
    },
    geology: {
      ru: 'Пермские соленосные диапиры Цехштейн и подсолевые газовые коллекторы.',
      en: 'Permian Zechstein salt diapirs and subsalt offshore gas-condensate plays.',
      zh: '二叠纪蔡希斯坦盐底辟构造及海洋深层盐下气藏。',
    },
    drillingChallenge: {
      ru: 'Морское наклонно-направленное бурение с жёсткими ограничениями по ЭЦП и потерям раствора.',
      en: 'Offshore directional/ERD wells constrained by tight ECD tolerances and fluid losses.',
      zh: '海洋大位移定向井对当量循环密度（ECD）及防漏失控制要求极为严苛。',
    },
  },
  {
    id: 'gom',
    coords: [26.5, -90.5],
    name: {
      ru: 'Мексиканский залив (Louann Salt)',
      en: 'Gulf of Mexico (Louann Salt)',
      zh: '墨西哥湾（路安盐层）',
    },
    region: {
      ru: 'Глубоководный шельф',
      en: 'Deepwater Subsalt',
      zh: '深水盐下油气区',
    },
    geology: {
      ru: 'Юрские аллохтонные соляные покровы и подсолевые высокодебитные горизонты.',
      en: 'Jurassic allochthonous Louann salt canopies sealing subsalt reservoirs.',
      zh: '侏罗系异地巨厚盐席盖层及盐下高压油气储层。',
    },
    drillingChallenge: {
      ru: 'Ослабленные подсолевые зоны с частыми поглощениями дорогостоящих растворов на углеводородной основе.',
      en: 'Rubble zones beneath salt canopies prone to costly synthetic-base mud losses.',
      zh: '盐下破碎带极易发生高成本合成基钻井液漏失，需高效旁通堵漏激活方案。',
    },
  },
  {
    id: 'santos',
    coords: [-24.5, -42.5],
    name: {
      ru: 'Бассейн Сантос (Pre-Salt)',
      en: 'Santos Basin (Pre-Salt)',
      zh: '桑托斯盆地（盐下碳酸盐岩）',
    },
    region: {
      ru: 'Шельф Бразилии',
      en: 'Offshore Brazil',
      zh: '巴西深海大陆架',
    },
    geology: {
      ru: 'Двухкилометровый эвапоритовый щит над высокопроницаемыми карбонатами.',
      en: '2,000 m evaporite seal above intensely fractured microbialite/carbonate reservoirs.',
      zh: '2000米厚蒸发岩盖层下伏高渗裂缝-溶蚀型碳酸盐岩储层。',
    },
    drillingChallenge: {
      ru: 'Интенсивные поглощения при вскрытии карбонатов под солью и необходимость адресной изоляции.',
      en: 'Severe drilling fluid losses upon entering subsalt vuggy carbonates.',
      zh: '钻穿盐层进入碳酸盐岩后极易遭遇严重井漏，需要快速精准隔离技术。',
    },
  },
];
