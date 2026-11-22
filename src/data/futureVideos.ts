import type { FutureDirection, VideoItem } from '../types/content';

export const futureDirectionsData: FutureDirection[] = [
  {
    id: 'hydrodynamic-activation',
    title: {
      ru: 'Гидродинамическая активация тампонирующих составов',
      en: 'Hydrodynamic Activation of Plugging Slurries',
      zh: '裂缝-孔隙型储层堵漏浆液的水动力激活调控',
    },
    hypothesis: {
      ru: 'Исследование реологии и кинетики структурообразования тампонажных и кольматирующих смесей при высокоэнергетическом истечении через байпасные каналы и конфузорные насадки переводника для ускоренной изоляции трещиновато-поровых коллекторов.',
      en: 'Investigating slurry rheology and bridging kinetics under high-shear hydrodynamic activation through circulation sub bypass ports and confuser nozzles to accelerate sealing of fractured-porous formations.',
      zh: '研究堵漏浆液在高速流经循环短节旁通流道及渐缩喷嘴后的流变响应与成桥动力学特性，以提升裂缝-孔隙型地层封堵效率。',
    },
    collaborationScope: {
      ru: 'Потенциал для стажировки: совместные реологические, фильтрационные и стендовые эксперименты по взаимодействию активированных составов с трещиноватыми кернами.',
      en: 'Internship scope: joint rheology, core-flooding, and dynamic fracture-plugging bench experiments.',
      zh: '实习合作方向：联合开展活化堵漏浆液的流变学测试、岩心驱替及动态裂缝封堵物理模拟实验。',
    },
    linkedVideoId: 'video-spmi-2026',
  },
  {
    id: 'pbl-factory-field',
    title: {
      ru: 'Заводские и опытно-промысловые испытания PBL d121 и оптимизация конфузоров',
      en: 'Factory & Field Validation of PBL d121 and Confuser Geometry Optimization',
      zh: 'd121 循环短节厂内与现场试验及渐缩流道优化',
    },
    hypothesis: {
      ru: 'Сопоставление результатов заводских ресурсных испытаний образца d121 с 3D CFD-моделями (COMSOL / КОМПАС-Flow) для минимизации эрозионного износа, застойных зон и стабилизации порога гидравлического срабатывания на различных плотностях раствора.',
      en: 'Correlating d121 factory endurance test telemetry with 3D CFD models to reduce erosive wear, eliminate stagnation zones, and stabilize hydraulic actuation thresholds across mud weights.',
      zh: '将 d121 样机厂内耐久性测试数据与三维 CFD 仿真进行耦合校准，降低冲蚀磨损、消除流道滞流区并稳定不同钻井液密度下的开启阈值。',
    },
    collaborationScope: {
      ru: 'Потенциал для стажировки: численное FSI-моделирование (жидкость–конструкция), усталостные расчёты пружинно-клапанных групп и испытания на циркуляционных петлях.',
      en: 'Internship scope: fluid–structure interaction (FSI) simulation, valve-spring fatigue analysis, and flow-loop endurance trials.',
      zh: '实习合作方向：流固耦合（FSI）数值仿真、阀簧疲劳寿命分析及室内闭环水力试验台架测试。',
    },
    linkedVideoId: 'video-eth-2024',
  },
  {
    id: 'complex-fields',
    title: {
      ru: 'Интеграция систем контроля поглощений в горизонтальных и БОВ-скважинах',
      en: 'Integrated Lost Circulation Systems for Horizontal & Extended-Reach Wells',
      zh: '水平井与大位移井（ERD）防漏失综合井下工具集成',
    },
    hypothesis: {
      ru: 'Комбинирование быстродействующих циркуляционных переводников с пакерными узлами и кольмататорами для управляемой очистки ствола и превентивного снижения эквивалентной циркуляционной плотности (ЭЦП/ECD) на объектах уровня Ковыктинского ГКМ.',
      en: 'Coupling quick-acting circulation subs with specialized packers and acoustic/hydraulic emitters to manage ECD and hole cleaning in extended-reach horizontal sections.',
      zh: '将水力快速循环短节与专用封隔器、水力脉冲发生器进行管柱集成，实现长水平段及大位移井的 ECD 精准调控与高效携岩洗井。',
    },
    collaborationScope: {
      ru: 'Потенциал для стажировки: моделирование компоновок низа бурильной колонны (КНБК), гидравлических программ промывки и планирование опытно-промысловых работ.',
      en: 'Internship scope: BHA hydraulic modeling, circulation program design, and pilot field trial engineering.',
      zh: '实习合作方向：下部钻具组合（BHA）水力学仿真、井眼清洁循环程序设计及矿场先导试验方案论证。',
    },
    linkedVideoId: 'video-kovykta-2025',
  },
];

export const videosData: VideoItem[] = [
  {
    id: 'video-spmi-2026',
    directionId: 'hydrodynamic-activation',
    date: {
      ru: 'Май 2026',
      en: 'May 2026',
      zh: '2026年5月',
    },
    event: {
      ru: 'V Междунар. НПК «Прорывные технологии…», Санкт-Петербург',
      en: '5th Int. Conf. “Breakthrough Technologies…”, Saint Petersburg',
      zh: '第五届“突破性技术”国际学术会议 · 圣彼得堡',
    },
    title: {
      ru: 'Гидродинамическая активация тампонирующих составов при ликвидации поглощений',
      en: 'Hydrodynamic Activation of Plugging Slurries for Lost Circulation Control',
      zh: '裂缝-孔隙型储层堵漏浆液的水动力激活报告',
    },
    description: {
      ru: 'Выступление с научным докладом о результатах экспериментальных и численных исследований работы переводника и механизмах активации тампонирующих составов.',
      en: 'Conference talk presenting numerical and experimental findings on circulation sub operation and hydrodynamic activation of plugging slurries.',
      zh: '学术会议现场汇报，重点阐述水力循环短节流道特性及堵漏浆液水动力激活机理的实验与仿真成果。',
    },
    platform: 'dzen',
    url: 'https://dzen.ru/video/watch/6a0e1a3e930e7f5969e96753',
    posterImage: '/images/pbl-confuser-rig.png',
  },
  {
    id: 'video-kovykta-2025',
    directionId: 'complex-fields',
    date: {
      ru: 'Июнь 2025',
      en: 'June 2025',
      zh: '2025年6月',
    },
    event: {
      ru: 'Защита магистерской ВКР · СПГУ',
      en: 'M.Sc. Thesis Defense · Mining University',
      zh: '硕士毕业答辩 · 圣彼得堡矿业大学',
    },
    title: {
      ru: 'Защита магистерского проекта по Ковыктинскому ГКМ',
      en: 'Master’s Project Defense: Kovykta Gas Condensate Field',
      zh: '科维克塔凝析气田水平井钻井硕士项目答辩实录',
    },
    description: {
      ru: 'Видеозапись защиты выпускного магистерского проекта по строительству горизонтальных скважин в осложнённых горно-геологических условиях (оценка «отлично»).',
      en: 'Recorded M.Sc. thesis defense covering horizontal well drilling engineering for the Kovykta Gas Condensate Field (graded Excellent).',
      zh: '围绕科维克塔凝析气田水平井施工难点与井筒安全控制展开的硕士毕业答辩完整录像（获评“优秀”）。',
    },
    platform: 'dzen',
    url: 'https://dzen.ru/video/watch/684ea7cff0cba24df01fb8ca?share_to=link',
    posterImage: '/images/pbl-bench-test.png',
  },
  {
    id: 'video-eth-2024',
    directionId: 'pbl-factory-field',
    date: {
      ru: 'Июль 2024',
      en: 'July 2024',
      zh: '2024年7月',
    },
    event: {
      ru: 'Инкубатор «Энерготехнохаб Петербург»',
      en: 'Energotekhnohab Petersburg Incubator',
      zh: '彼得堡能源技术中心科技孵化器',
    },
    title: {
      ru: 'Презентация проекта циркуляционного переводника PBL',
      en: 'PBL Circulation Sub R&D Pitch & Prototype Overview',
      zh: 'PBL 水力循环短节研发项目决赛路演报告',
    },
    description: {
      ru: 'Запись финальной презентации разработки циркуляционного переводника с материалами стендовых и производственных этапов.',
      en: 'Finalist pitch presentation covering the PBL circulation sub mechanics, prototype fabrication, and testing progress.',
      zh: '决赛现场路演录像，介绍水力激活循环短节结构原理、样机试制及台架试验进展。',
    },
    platform: 'dzen',
    url: 'https://dzen.ru/video/watch/684ea73d84ca1f2a39d45f92?share_to=link',
    posterImage: '/images/pbl-cutaway.png',
  },
];
