import type {
  AcademicProfileLink,
  EducationItem,
  LocalizedText,
  SkillGroup,
} from '../types/content';

export const profileData = {
  fullName: {
    ru: 'Рыбаков Денис Александрович',
    en: 'Denis A. Rybakov',
    zh: '丹尼斯·雷巴科夫（Denis A. Rybakov）',
  } satisfies LocalizedText,

  shortName: {
    ru: 'Денис Рыбаков',
    en: 'Denis Rybakov',
    zh: '丹尼斯·雷巴科夫',
  } satisfies LocalizedText,

  roleTitle: {
    ru: 'Исследователь и инженер-разработчик бурового оборудования',
    en: 'Drilling Equipment Researcher & R&D Engineer',
    zh: '钻井装备研发与流体力学研究员',
  } satisfies LocalizedText,

  affiliation: {
    ru: 'Санкт-Петербургский горный университет императрицы Екатерины II · УНП «Саблино»',
    en: 'Empress Catherine II Saint Petersburg Mining University · Sablino R&D Ground',
    zh: '圣彼得堡叶卡捷琳娜二世矿业大学 · 萨布利诺教学科研实验基地',
  } satisfies LocalizedText,

  statusBadge: {
    ru: 'Открыт к научным стажировкам и R&D-сотрудничеству',
    en: 'Open to Research Internships & R&D Collaborations',
    zh: '开放科研实习、实验室访问及联合研发合作',
  } satisfies LocalizedText,

  heroThesis: {
    ru: 'Исследую гидродинамические методы борьбы с поглощениями бурового раствора и проектирую забойные циркуляционные переводники (PBL) с гидравлической активацией. Объединяю CFD-моделирование конфузорных узлов, конструкторскую проработку (CAD) и натурные стендовые испытания; опытный образец d121 проходит заводские испытания.',
    en: 'My research focuses on hydrodynamically-activated lost circulation control in directional and horizontal wells. I develop hydraulic circulation subs (PBL), combining CFD modeling of flow-through piston confusers, CAD engineering, and bench/field rig testing; the d121 prototype is currently undergoing factory trials.',
    zh: '专注于定向井与水平井的水力激活防漏失技术及井下循环短节（PBL）研发。将渐缩流通活塞的CFD流体力学仿真、三维机械结构设计与台架/现场试验相结合；目前 d121 型工程样机正处于工厂测试阶段。',
  } satisfies LocalizedText,

  heroFocusPoints: [
    {
      ru: 'Ликвидация поглощений в трещиновато-поровых коллекторах и скважинах с БОВ',
      en: 'Lost circulation control in fractured-porous reservoirs and extended-reach wells',
      zh: '裂缝-孔隙型储层及大位移水平井的井漏预防与封堵激活技术',
    },
    {
      ru: 'Гидродинамически активируемые переводники (PBL) и пакерные узлы',
      en: 'Hydrodynamically-activated circulation subs (PBL) and packer assemblies',
      zh: '水力快速激活循环短节（PBL）与封隔器机构设计及专利研发',
    },
    {
      ru: 'Ищу научную стажировку в профильной лаборатории или R&D-центре по бурению и гидродинамике',
      en: 'Seeking a research internship or visiting fellowship in a drilling, fluid mechanics, or R&D laboratory',
      zh: '寻求油气钻井工程、井下工具或计算流体力学（CFD）实验室科研实习与合作机会',
    },
  ] satisfies LocalizedText[],

  metricsSummary: [
    {
      value: '6',
      label: {
        ru: 'научных публикаций (IJE, ВАК, тезисы)',
        en: 'peer-reviewed & conference papers',
        zh: '篇学术论文与会议报告',
      },
    },
    {
      value: '2',
      label: {
        ru: 'патента РФ на полезную модель',
        en: 'RF utility model patents',
        zh: '项俄罗斯联邦实用新型专利',
      },
    },
    {
      value: '2023–2026',
      label: {
        ru: 'R&D и испытания циркуляционных переводников PBL',
        en: 'PBL circulation sub R&D & testing',
        zh: 'PBL 循环短节研发与台架/厂内试验',
      },
    },
  ],

  bioSummary: {
    ru: 'Выпускник Нефтегазового факультета Санкт-Петербургского горного университета (бакалавриат «Бурение нефтяных и газовых скважин на шельфе», магистратура «Бурение горизонтальных скважин»). С июля 2023 года руковожу проектами в учебно-научном полигоне «Саблино» (СПГУ): организую учебные и производственные практики, сопровождаю испытания стороннего бурового оборудования, разрабатываю учебно-методические пособия. Научные исследования по циркуляционным переводникам и ликвидации поглощений веду с 2023 года; результаты опубликованы в International Journal of Engineering (Transactions A/B) и российском отраслевом журнале «Строительство нефтяных и газовых скважин на суше и на море», а также защищены двумя патентами РФ.',
    en: 'Graduate of the Oil and Gas Faculty at Empress Catherine II Saint Petersburg Mining University (B.Sc. in Offshore Oil and Gas Well Drilling; M.Sc. in Horizontal Well Drilling). Since July 2023, I serve as Project Manager at the Sablino Training and Research Ground, coordinating field drilling practices, third-party tool testing, and engineering curricula. In parallel, I conduct research on hydraulic circulation subs and lost circulation control, with peer-reviewed papers in the International Journal of Engineering and Russian industry journals, alongside two Russian Federation patents.',
    zh: '毕业于圣彼得堡叶卡捷琳娜二世矿业大学油气学院（海上油气井钻井工程学士、水平井钻井工程硕士）。自2023年7月起担任萨布利诺教学科研实验基地项目负责人，统筹现场钻井实践教学、第三方井下工具测试及工程教材编写。同时长期开展水力循环短节与防漏失技术研究，相关成果发表于《International Journal of Engineering》等期刊并获两项俄罗斯联邦专利授权。',
  } satisfies LocalizedText,

  portraitCaption: {
    ru: 'Рыбаков Д.А. с 3D-макетом циркуляционного переводника PBL · СПГУ',
    en: 'D.A. Rybakov with 3D-printed PBL circulation sub prototype · Mining University',
    zh: '丹尼斯·雷巴科夫手持 PBL 循环短节 3D 打印原型样机 · 矿业大学',
  } satisfies LocalizedText,

  education: [
    {
      id: 'msc',
      period: '2023–2025',
      degree: {
        ru: 'Магистратура · 21.04.01 «Бурение горизонтальных скважин»',
        en: 'M.Sc. · 21.04.01 Horizontal Well Drilling',
        zh: '硕士学位 · 21.04.01 水平井钻井工程',
      },
      institution: {
        ru: 'Санкт-Петербургский горный университет императрицы Екатерины II, Нефтегазовый факультет',
        en: 'Empress Catherine II Saint Petersburg Mining University, Oil & Gas Faculty',
        zh: '圣彼得堡叶卡捷琳娜二世矿业大学 · 油气学院',
      },
      specialty: {
        ru: 'Выпускной проект по Ковыктинскому ГКМ',
        en: 'Master’s thesis focused on the Kovykta Gas Condensate Field',
        zh: '硕士论文课题：科维克塔凝析气田水平井钻井工程设计',
      },
      details: {
        ru: '',
        en: '',
        zh: '',
      },
    },
    {
      id: 'bsc',
      period: '2019–2023',
      degree: {
        ru: 'Бакалавриат · 21.03.01 «Бурение нефтяных и газовых скважин на шельфе»',
        en: 'B.Sc. · 21.03.01 Offshore Oil & Gas Well Drilling',
        zh: '学士学位 · 21.03.01 海上油气井钻井工程',
      },
      institution: {
        ru: 'Санкт-Петербургский горный университет императрицы Екатерины II, Нефтегазовый факультет',
        en: 'Empress Catherine II Saint Petersburg Mining University, Oil & Gas Faculty',
        zh: '圣彼得堡叶卡捷琳娜二世矿业大学 · 油气学院',
      },
      specialty: {
        ru: 'Профиль подготовки: морское и шельфовое бурение',
        en: 'Specialization: offshore drilling systems & wellbore construction',
        zh: '专业方向：海洋及大陆架油气钻井工艺',
      },
      details: {
        ru: '',
        en: '',
        zh: '',
      },
    },
  ] satisfies EducationItem[],

  skillGroups: [
    {
      id: 'cae-cfd',
      title: {
        ru: 'CAD, CFD и инженерные расчёты',
        en: 'CAD, CFD & Engineering Simulation',
        zh: 'CAD / CFD 流体仿真与工程计算',
      },
      items: [
        { ru: 'COMSOL Multiphysics', en: 'COMSOL Multiphysics', zh: 'COMSOL Multiphysics' },
        { ru: 'КОМПАС-3D (FLOW)', en: 'KOMPAS-3D (FLOW)', zh: 'KOMPAS-3D (FLOW)' },
        { ru: 'AutoCAD', en: 'AutoCAD', zh: 'AutoCAD' },
        { ru: 'Halliburton Landmark', en: 'Halliburton Landmark', zh: 'Halliburton Landmark' },
        { ru: 'БурсофтПроект', en: 'BursoftProekt (Drilling CAD)', zh: 'BursoftProekt（钻井工程计算）' },
        { ru: 'ГИС Gintel', en: 'Gintel Well Logging GIS', zh: 'Gintel 测井解释系统' },
        { ru: 'Golden Software Surfer', en: 'Golden Software Surfer', zh: 'Golden Software Surfer' },
        { ru: 'TableCurve 3D', en: 'TableCurve 3D', zh: 'TableCurve 3D' },
        { ru: 'MathCAD', en: 'MathCAD', zh: 'MathCAD' },
        { ru: 'Delphi', en: 'Delphi', zh: 'Delphi' },
      ],
    },
    {
      id: 'field-rigs',
      title: {
        ru: 'Буровое оборудование, стенды и допуски',
        en: 'Drilling Rigs, Bench Testing & Certifications',
        zh: '现场钻机操作、台架试验与专业资质',
      },
      items: [
        {
          ru: 'УРБ-2Д3 / КГК-100 (КАМАЗ-43118-50)',
          en: 'URB-2D3 / KGK-100 Rigs (KAMAZ-43118-50)',
          zh: 'URB-2D3 / KGK-100 车载钻机',
        },
        {
          ru: 'GM-200 GT(GTT) / GM-200 GL / GM-50',
          en: 'GM-200 GT(GTT) / GM-200 GL / GM-50 Rigs',
          zh: 'GM-200 GT(GTT) / GL / GM-50 自行式钻机',
        },
        {
          ru: 'Буровой насос 8Т650 и циркуляционная система',
          en: '8T650 Mud Pump & Circulation Systems',
          zh: '8T650 泥浆泵与钻井液循环系统',
        },
        {
          ru: 'ГНВП / Контроль скважины',
          en: 'Well Control & Kick Management',
          zh: '井控与溢流压井技术',
        },
        {
          ru: 'Промбезопасность А.1, Б.8.1, Б.8.3',
          en: 'Industrial & Pressure Equipment Safety (A.1, B.8.1, B.8.3)',
          zh: '工业及承压设备安全认证（A.1 / B.8.1 / B.8.3）',
        },
        {
          ru: 'Помощник бурильщика ЭиРБСНГ 5 разряда',
          en: 'Assistant Driller (5th Category, Oil & Gas)',
          zh: '油气勘探与开发钻井五级副钻井工资格',
        },
        {
          ru: 'English B2 (Upper-Intermediate)',
          en: 'English B2 (Upper-Intermediate)',
          zh: '英语水平 B2（中高级工程交流）',
        },
      ],
    },
  ] satisfies SkillGroup[],

  internship: {
    heading: {
      ru: 'Стажировки и научное сотрудничество',
      en: 'Research Internships & Collaboration',
      zh: '科研实习与联合研究合作',
    },
    lead: {
      ru: 'Этот сайт создан как продолжение моих научных докладов — чтобы коллеги, научные руководители и специалисты R&D-лабораторий могли быстро оценить задел и предложить совместную работу.',
      en: 'This page accompanies my conference presentations so principal investigators, lab leads, and R&D engineers can rapidly review my technical track record and initiate a collaboration.',
      zh: '本主页作为学术报告的延伸窗口，旨在帮助实验室负责人、导师及研发同行快速了解我的研究基础并探讨具体合作。',
    },
    formatsTitle: {
      ru: 'Интересные форматы взаимодействия',
      en: 'Target Formats',
      zh: '期望合作与实习形式',
    },
    formats: [
      {
        ru: 'Научная или индустриальная R&D-стажировка (2–6 месяцев, очно или гибридно) в лаборатории бурения, механики жидкостей или нефтегазового инжиниринга.',
        en: 'Visiting research or industrial R&D internship (2–6 months, on-site or hybrid) in drilling technology, fluid mechanics, or downhole tool engineering.',
        zh: '钻井工程、流体力学或井下工具研发实验室的短期科研实习或访学（2–6个月，线下或混合模式）。',
      },
      {
        ru: 'Совместная экспериментальная и численная проверка гипотез: CFD-моделирование (COMSOL / КОМПАС-Flow) и стендовые гидравлические испытания.',
        en: 'Joint numerical and experimental studies combining CFD modeling (COMSOL / KOMPAS-Flow) with hydraulic bench testing.',
        zh: '基于数值仿真（COMSOL / KOMPAS-Flow）与室内水力台架试验的联合验证课题。',
      },
      {
        ru: 'Подготовка совместных научных публикаций (Scopus / Web of Science / ВАК) и патентных заявок по противопоглощающим системам.',
        en: 'Co-authoring peer-reviewed journal papers (Scopus / WoS / VAK) and patent applications on lost circulation control.',
        zh: '联合撰写高水平期刊论文（Scopus / WoS 收录）及井漏防治装备专利申请。',
      },
    ],
    valueTitle: {
      ru: 'Чем я могу быть полезен принимающей лаборатории',
      en: 'What I Bring to a Host Lab',
      zh: '我能为合作实验室提供的价值',
    },
    valuePoints: [
      {
        ru: 'Полный инженерный цикл без долгой раскачки: от постановки физической и CFD-модели до выпуска КД, 3D-макетирования и стендовых проливок.',
        en: 'End-to-end hardware & simulation workflow: from hydraulic formulation and FEM/CFD modeling to CAD drawings, prototyping, and flow-loop testing.',
        zh: '完整的工程研发闭环能力：从水力计算、有限元/CFD建模到图纸绘制、样机加工与流道台架实测。',
      },
      {
        ru: 'Подтверждённый публикационный и патентный задел по гидродинамическим переводникам (6 публикаций за 2024–2027 гг., 2 патента РФ).',
        en: 'Verified publication and IP track record in hydraulic circulation subs (6 articles/proceedings in 2024–2027, 2 RF patents).',
        zh: '扎实的学术与知识产权积累（2024–2027年已发表6篇学术论文/会议论文及2项发明/实用新型专利）。',
      },
      {
        ru: 'Практический опыт на полигоне и буровых установках (УНП «Саблино», ПАО «Сургутнефтегаз»), понимание реальных промысловых ограничений.',
        en: 'Hands-on rig and test-ground experience (Sablino, Surgutneftegas), bridging laboratory models with field drilling constraints.',
        zh: '具备矿业大学试验基地及苏尔古特油气公司现场钻机实操经验，能有效衔接理论模型与现场工况。',
      },
    ],
    helpTitle: {
      ru: 'Как можно помочь прямо сейчас',
      en: 'How You Can Help',
      zh: '您可以通过以下方式提供帮助',
    },
    helpActions: [
      {
        ru: 'Пригласить на научную стажировку или в исследовательскую группу (академический или корпоративный R&D-центр).',
        en: 'Invite me for a research internship or visiting project in an academic or corporate R&D group.',
        zh: '提供高校实验室或企业研发中心的科研实习、访问研究岗位。',
      },
      {
        ru: 'Поделиться контактом научного руководителя, лаборатории или инженеров, работающих над забойным инструментом и тампонажными системами.',
        en: 'Connect me with principal investigators or R&D leads working on downhole tools, fluid mechanics, or lost circulation systems.',
        zh: '引荐从事井下工具、水动力学或堵漏材料研究的导师及研发团队负责人。',
      },
      {
        ru: 'Предложить совместный эксперимент, тестирование узла или рецензирование методической/конструкторской задачи.',
        en: 'Propose a joint bench experiment, prototype validation, or co-authored technical study.',
        zh: '共同开展台架验证实验、样机测试或联合申报/撰写研究论文。',
      },
      {
        ru: 'Дать рекомендацию для участия в международных исследовательских программах (включая академические обмены в России, Китае и за рубежом).',
        en: 'Provide a recommendation or host letter for international research fellowships and academic exchange programs.',
        zh: '为参与国内外（含中俄高校及科研院所）学术交流与访学项目提供推荐或接收意向。',
      },
    ],
  },

  contacts: {
    email: 'rybakov_da@pers.spmi.ru',
    telegramUrl: 'https://t.me/Rybakov_D',
    telegramHandle: '@Rybakov_D',
    whatsappUrl: 'https://wa.me/79110187910',
    phoneDisplay: '+7 911 018-79-10',
    cvUrl: 'https://drive.google.com/file/d/13S75WAfVtGXze4Cf_Y6CCX4l1O6ZW22s/view?usp=drive_link',
    city: {
      ru: 'Санкт-Петербург, Россия',
      en: 'Saint Petersburg, Russia',
      zh: '俄罗斯 · 圣彼得堡',
    } satisfies LocalizedText,
  },

  // Чтобы добавить ссылку на новый профиль, просто вставьте URL в нужное поле `url`.
  // Поля с пустым `url` отображаются как зарезервированный неактивный слот (или скрываются).
  academicProfiles: [
    {
      id: 'orcid',
      label: 'ORCID',
      url: 'https://orcid.org/0009-0008-2290-3864',
      identifier: '0009-0008-2290-3864',
    },
    {
      id: 'openalex',
      label: 'OpenAlex',
      url: 'https://openalex.org/A5099426669',
      identifier: 'A5099426669',
    },
    {
      id: 'scopus',
      label: 'Scopus',
      url: '',
    },
    {
      id: 'scholar',
      label: 'Google Scholar',
      url: '',
    },
    {
      id: 'researchgate',
      label: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/Denis-Rybakov-2?ev=prf_overview',
      identifier: 'Denis-Rybakov-2',
    },
    {
      id: 'elibrary',
      label: 'eLibrary',
      url: '',
    },
  ] satisfies AcademicProfileLink[],
};

export const uiStrings = {
  skipToContent: {
    ru: 'Перейти к основному содержанию',
    en: 'Skip to main content',
    zh: '跳至正文内容',
  },
  nav: [
    {
      id: 'profile',
      label: { ru: 'Профиль', en: 'Profile', zh: '个人简介' },
    },
    {
      id: 'gallery',
      label: { ru: 'Галерея', en: 'Gallery', zh: '现场图集' },
    },
    {
      id: 'geography',
      label: { ru: 'Карта и динамика', en: 'Map & Timeline', zh: '科研足迹' },
    },
    {
      id: 'publications',
      label: { ru: 'Статьи и патенты', en: 'Publications', zh: '论文与专利' },
    },
    {
      id: 'prospects',
      label: { ru: 'Перспективы и видео', en: 'Prospects & Video', zh: '研究展望' },
    },
    {
      id: 'internship',
      label: { ru: 'Стажировки', en: 'Internships', zh: '实习合作' },
    },
  ],
  themeToggle: {
    toDark: {
      ru: 'Включить тёмную тему',
      en: 'Switch to dark theme',
      zh: '切换至深色主题',
    },
    toLight: {
      ru: 'Включить светлую тему',
      en: 'Switch to light theme',
      zh: '切换至浅色主题',
    },
    lightLabel: { ru: 'Светлая', en: 'Light', zh: '浅色' },
    darkLabel: { ru: 'Тёмная', en: 'Dark', zh: '深色' },
  },
  heroVisual: {
    basinsMapTitle: {
      ru: 'Мировая география соленосных газоконденсатных бассейнов с зонами поглощений',
      en: 'Global Evaporite & Salt-Bearing Gas-Condensate Basins with Lost-Circulation Risks',
      zh: '全球含盐蒸发岩凝析气田井漏风险盆地分布',
    },
    basinsHint: {
      ru: 'Нажмите на точку бассейна — линии ведут к инженерному решению проблемы',
      en: 'Select a basin pin — animated trajectories connect directly to the engineering solution',
      zh: '点击盆地坐标查看地质特征——动态流线直指对应工程解决方案',
    },
    pblSolutionBadge: {
      ru: 'Инженерное решение · Патент RU 221930 U1',
      en: 'Engineered Solution · Patent RU 221930 U1',
      zh: '工程解决方案 · 专利 RU 221930 U1',
    },
    pblSolutionTitle: {
      ru: 'Циркуляционный переводник PBL d121',
      en: 'Hydraulic Circulation Sub PBL d121',
      zh: 'd121 水力激活循环短节（PBL）',
    },
    pblSolutionDesc: {
      ru: 'Адресная подача тампонирующих составов при поглощениях под солями без подъёма колонны. Нажмите, чтобы перейти к разработке.',
      en: 'Targeted LCM spotting in subsalt thief zones without tripping out. Click to jump to the device showcase.',
      zh: '不起钻精准注入堵漏浆液以封堵盐下漏失层。点击直达装置详情。',
    },
    pblSolutionAction: {
      ru: 'Перейти к устройству',
      en: 'Jump to device',
      zh: '查看装置详情',
    },
    dossierHighlight: {
      ru: 'Гидродинамика, КД и испытания',
      en: 'Fluid Dynamics, CAD & Field Testing',
      zh: '流体力学仿真、结构设计与现场试验',
    },
  },
  heroActions: {
    primary: {
      ru: 'Обсудить стажировку / Сотрудничество',
      en: 'Discuss Internship / Collaboration',
      zh: '洽谈科研实习与合作',
    },
    secondary: {
      ru: 'Статьи и патенты',
      en: 'Articles & Patents',
      zh: '查看论文与专利',
    },
    cv: {
      ru: 'Скачать CV (PDF)',
      en: 'Download CV (PDF)',
      zh: '下载简历 (PDF)',
    },
  },
  profileSection: {
    educationTitle: {
      ru: 'Образование и академическая база',
      en: 'Education & Academic Background',
      zh: '教育背景与学术训练',
    },
    skillsTitle: {
      ru: 'Инженерный и экспериментальный стек',
      en: 'Simulation, CAD & Field Stack',
      zh: '仿真建模与现场工程工具栈',
    },
  },
  gallerySection: {
    heading: {
      ru: 'Фотоархив исследований и полигонных работ',
      en: 'Research & Fieldwork Visual Archive',
      zh: '科研实验与现场实践影像档案',
    },
    subtitle: {
      ru: 'Перелистывайте реальные фотографии Летних школ, полевых практик в УНП «Саблино» и стендовых испытаний PBL. С каждой фотографией связана публикация или патент.',
      en: 'Browse authentic photography from International Summer Schools, Sablino field training, and PBL bench trials — each photo links directly to its published article or patent.',
      zh: '浏览国际暑期学校、萨布利诺基地钻井实训及 PBL 台架试验纪实影像，每张照片均直接关联对应报道或专利全文。',
    },
    categories: {
      all: { ru: 'Все кадры', en: 'All Photos', zh: '全部影像' },
      field: { ru: 'Полигон «Саблино»', en: 'Sablino Fieldwork', zh: '萨布利诺现场' },
      rd: { ru: 'Стенды и PBL', en: 'Bench & PBL R&D', zh: 'PBL 研发与台架' },
    },
    prevLabel: {
      ru: 'Предыдущее фото',
      en: 'Previous photo',
      zh: '上一张照片',
    },
    nextLabel: {
      ru: 'Следующее фото',
      en: 'Next photo',
      zh: '下一张照片',
    },
    zoomLabel: {
      ru: 'Открыть крупно',
      en: 'Inspect full size',
      zh: '放大查看详情',
    },
    readArticle: {
      ru: 'Читать публикацию',
      en: 'Read linked article',
      zh: '阅读相关文章',
    },
    closeLightbox: {
      ru: 'Закрыть просмотр',
      en: 'Close preview',
      zh: '关闭大图预览',
    },
  },
  patentModal: {
    patentLabel: { ru: 'ПАТЕНТ', en: 'PATENT', zh: '专利' },
    overviewTitle: {
      ru: 'Общая характеристика устройства',
      en: 'General Device Overview',
      zh: '装置总体技术特点',
    },
    closeLabel: {
      ru: 'Закрыть схему',
      en: 'Close diagram',
      zh: '关闭图解弹窗',
    },
    prevStep: { ru: 'Назад', en: 'Previous', zh: '上一步' },
    nextStep: { ru: 'Следующий шаг', en: 'Next step', zh: '下一步' },
    autoPlay: { ru: 'Автоцикл', en: 'Auto cycle', zh: '自动演示' },
    pausePlay: { ru: 'Пауза', en: 'Pause', zh: '暂停' },
    openPatentDoc: {
      ru: 'Открыть патент (Google Patents)',
      en: 'Open Patent Record (Google Patents)',
      zh: '打开专利全文 (Google Patents)',
    },
    legendTitle: {
      ru: 'Основные узлы конструкции',
      en: 'Core Assemblies',
      zh: '核心结构部件',
    },
    jSlotTitle: {
      ru: 'Фиксатор цикла (J-канавка)',
      en: 'Cycle Indexer (J-Slot)',
      zh: '循环定位槽 (J型槽)',
    },
    activeStepHeading: {
      ru: 'Текущий этап работы',
      en: 'Active Operating Phase',
      zh: '当前工作阶段',
    },
  },
  mapSection: {
    heading: {
      ru: 'Динамика исследований и география проектов',
      en: 'Research Trajectory & Project Geography',
      zh: '研究演进轨迹与项目地理分布',
    },
    subtitle: {
      ru: 'Хронология и ключевые площадки работ: от полевых буровых практик и стендов полигона «Саблино» до патентов, инкубаторов и международных конференций.',
      en: 'Interactive map and chronological timeline linking field drilling operations, Sablino test-ground trials, conferences, and academic milestones.',
      zh: '将现场钻井实践、萨布利诺实验基地台架测试、学术会议及工程课题与地理位置联动呈现。',
    },
    fitAllBtn: {
      ru: 'Вся география',
      en: 'Fit all locations',
      zh: '显示全部坐标',
    },
    focusSpbBtn: {
      ru: 'СПб и Саблино',
      en: 'SPb & Sablino',
      zh: '圣彼得堡与萨布利诺',
    },
    timelineHeading: {
      ru: 'Хронология развития работ',
      en: 'Research Timeline',
      zh: '研究进展时间线',
    },
    selectedLabel: {
      ru: 'Выбранная площадка',
      en: 'Selected Site',
      zh: '当前选中地点',
    },
    coordsLabel: {
      ru: 'Координаты',
      en: 'Coordinates',
      zh: '地理坐标',
    },
  },
  publicationsSection: {
    heading: {
      ru: 'Статьи, патенты и научный задел',
      en: 'Publications, Patents & R&D Output',
      zh: '学术论文、专利与研发成果',
    },
    subtitle: {
      ru: 'Титульные карточки исследований с графическими аннотациями, концептуальными схемами и быстрыми QR-кодами. Нажмите на патент, чтобы изучить точную кинематику и принцип работы.',
      en: 'Visual research cards with graphical abstracts, conceptual visuals, and scannable QR codes. Open any patent card to inspect its exact operating mechanism.',
      zh: '配备官方图文摘要、概念示意图与扫码直达二维码的研究成果卡片。点击专利方案按钮可交互查看精密机械工作原理。',
    },
    filters: {
      all: { ru: 'Все', en: 'All', zh: '全部' },
      article: { ru: 'Научные статьи', en: 'Articles', zh: '学术论文' },
      patent: { ru: 'Патенты РФ', en: 'Patents', zh: '俄罗斯专利' },
      project: { ru: 'Проекты и доклады', en: 'Projects & Talks', zh: '项目与报告' },
    },
    showingCount: {
      ru: 'Показано записей:',
      en: 'Showing records:',
      zh: '当前显示条目：',
    },
    openLink: {
      ru: 'Открыть источник',
      en: 'Open source',
      zh: '查看原文',
    },
    inspectPatentMechanism: {
      ru: 'Схема и принцип работы (Патент)',
      en: 'Interactive Patent Mechanism',
      zh: '交互式专利原理图解',
    },
    expandAbstract: {
      ru: 'Аннотация и расшифровка схемы',
      en: 'Abstract & Graphical Guide',
      zh: '展开摘要与图解说明',
    },
    collapseAbstract: {
      ru: 'Скрыть аннотацию',
      en: 'Hide abstract',
      zh: '收起摘要',
    },
    gaBreakdownTitle: {
      ru: 'Расшифровка графической аннотации',
      en: 'Graphical Abstract Breakdown',
      zh: '图文摘要详解',
    },
    gaZoomLabel: {
      ru: 'Увеличить схему',
      en: 'Enlarge graphical abstract',
      zh: '放大查看图文摘要',
    },
    graphicalSectionTitle: {
      ru: 'Графическая аннотация научного задела',
      en: 'Graphical Abstract of Research Track',
      zh: '科研成果逻辑脉络图解',
    },
    graphicalSteps: [
      {
        label: { ru: '1. Проблема', en: '1. Problem', zh: '1. 工程痛点' },
        title: {
          ru: 'Поглощения в соленосных и трещиноватых пластах',
          en: 'Lost circulation in evaporites & fractures',
          zh: '含盐及裂缝地层井漏风险',
        },
      },
      {
        label: { ru: '2. Моделирование', en: '2. Modeling', zh: '2. 流体仿真' },
        title: {
          ru: 'CFD конфузорного поршня и сменных диафрагм',
          en: 'Confuser-piston CFD & orifice ΔP',
          zh: '渐缩活塞与节流孔板 CFD',
        },
      },
      {
        label: { ru: '3. Патенты РФ', en: '3. Patents', zh: '3. 知识产权' },
        title: {
          ru: 'Патенты 221930 U1 (PBL) и 226121 U1 (Пакер)',
          en: 'Patents 221930 U1 (PBL) & 226121 U1 (Packer)',
          zh: '专利 221930 U1 与 226121 U1',
        },
      },
      {
        label: { ru: '4. Практика', en: '4. Validation', zh: '4. 试验应用' },
        title: {
          ru: 'Стенды «Саблино» и заводские испытания d121',
          en: 'Sablino benches & d121 factory testing',
          zh: '基地台架与 d121 工厂试验',
        },
      },
    ],
    fullBibToggle: {
      ru: 'Полный библиографический список (раскрыть текстом)',
      en: 'Full Bibliographic Reference List (Expand Text)',
      zh: '完整文献参考列表（点击展开文本）',
    },
    qrLabel: {
      ru: 'QR · ссылка / DOI',
      en: 'QR · Link / DOI',
      zh: '扫码直达 / DOI',
    },
    swipeHint: {
      ru: 'Листайте карточки горизонтально',
      en: 'Swipe or scroll cards horizontally',
      zh: '支持左右滑动翻阅卡片',
    },
    flagshipHeading: {
      ru: 'Флагманская разработка: циркуляционный переводник (PBL) d121',
      en: 'Flagship R&D Device: Hydraulic Circulation Sub (PBL) d121',
      zh: '核心研发装置：d121 水力激活循环短节（PBL）',
    },
    flagshipStatus: {
      ru: 'Текущий статус: проходит заводские испытания',
      en: 'Current status: undergoing factory testing',
      zh: '当前进展：正在进行工厂试验',
    },
    flagshipLaunchMechanism: {
      ru: 'Интерактивная схема работы (Патент RU 221930 U1)',
      en: 'Launch Interactive Patent Mechanism (RU 221930 U1)',
      zh: '打开专利交互原理动画 (RU 221930 U1)',
    },
    flagshipPoints: [
      {
        ru: 'Неограниченное число циклов гидравлической активации с любыми промывочными и тампонажными составами, включая горизонтальные и БОВ-скважины.',
        en: 'Unlimited hydraulic activation cycles with diverse drilling fluids and LCM slurries, including horizontal and extended-reach wells.',
        zh: '支持任意钻井液及堵漏浆液下的无限次水力循环激活，适用于水平井及大位移井工况。',
      },
      {
        ru: 'Байпасный принцип работы снижает фильтрацию в пласт, ускоряет активацию и повышает качество очистки ствола скважины.',
        en: 'Bypass flow architecture minimizes formation fluid invasion, accelerates activation response, and improves hole cleaning.',
        zh: '采用旁通分流机理，有效降低钻井液向地层的滤失，显著提升激活响应速度并改善井眼净化效果。',
      },
      {
        ru: 'Создан цифровой двойник и конструкторская документация, проведены стендовые гидравлические испытания на проточном поршне-конфузоре; образец d121 передан на заводские испытания.',
        en: 'Digital twin, engineering drawings, and flow-through piston confuser bench tests completed; d121 prototype is now in factory testing.',
        zh: '已完成数字孪生建模、施工图设计及渐缩流通活塞水力台架测试；d121 原型样机已进入厂内测试阶段。',
      },
    ],
    flagshipImages: [
      {
        src: '/images/pbl-cutaway.png',
        caption: {
          ru: '3D-разрез конструкции PBL и этапы технологической готовности',
          en: '3D CAD cutaway of the PBL circulation sub and readiness roadmap',
          zh: 'PBL 循环短节三维剖面结构及技术成熟度路线图',
        },
      },
      {
        src: '/images/pbl-bench-test.png',
        caption: {
          ru: 'Стендовые испытания прототипа: основной поток (слева) и байпасный режим (справа)',
          en: 'Bench flow-loop testing: primary flow (left) and activated bypass mode (right)',
          zh: '样机水力台架试验对比：常规循环模式（左）与激活旁通模式（右）',
        },
      },
      {
        src: '/images/pbl-confuser-rig.png',
        caption: {
          ru: 'Экспериментальный стенд проточного поршня с конфузорным переходом и CFD-схемой',
          en: 'Experimental rig for the flow-through piston confuser assembly with geometry schematics',
          zh: '渐缩流通活塞实验测试台架及流道几何结构示意图',
        },
      },
    ],
  },
  prospectsSection: {
    heading: {
      ru: 'Перспективные направления и видеопрезентации',
      en: 'Future R&D Directions & Video Presentations',
      zh: '前沿研究方向与视频汇报',
    },
    subtitle: {
      ru: 'Задачи, которые можно развивать в рамках совместных проектов и научной стажировки, подкреплённые записанными докладами и защитами.',
      en: 'Next-stage R&D hypotheses open for joint work during an internship, paired with recorded conference talks and project defenses.',
      zh: '可在科研实习或联合课题中进一步拓展的研究方向，附带学术会议汇报与答辩实录。',
    },
    directionsTitle: {
      ru: 'Куда можно развивать исследования',
      en: 'Next Research Horizons',
      zh: '拟深化研究方向',
    },
    videosTitle: {
      ru: 'Записи докладов и защит',
      en: 'Recorded Presentations & Defenses',
      zh: '学术汇报与答辩视频实录',
    },
    watchVideo: {
      ru: 'Смотреть видео',
      en: 'Watch presentation',
      zh: '观看视频汇报',
    },
    slotPending: {
      ru: 'Слот готов для добавления видео',
      en: 'Slot ready for upcoming video',
      zh: '预留视频槽位（可随时添加）',
    },
    relatedDirectionLabel: {
      ru: 'Направление:',
      en: 'Direction:',
      zh: '对应方向：',
    },
  },
  contactsSection: {
    heading: {
      ru: 'Контакты и научные профили',
      en: 'Contacts & Academic Identifiers',
      zh: '联系方式与学术主页',
    },
    copyEmail: {
      ru: 'Скопировать Email',
      en: 'Copy Email',
      zh: '复制邮箱',
    },
    copiedEmail: {
      ru: 'Email скопирован',
      en: 'Email copied',
      zh: '已复制邮箱',
    },
    writeEmail: {
      ru: 'Написать письмо',
      en: 'Send Email',
      zh: '发送邮件',
    },
    profilesHeading: {
      ru: 'Идентификаторы и базы данных',
      en: 'Research Identifiers',
      zh: '学术识别码与数据库主页',
    },
    reservedNote: {
      ru: 'Дополнительные профили (Scopus, Google Scholar, eLibrary) зарезервированы в файле данных и появятся автоматически после указания URL.',
      en: 'Additional profile slots (Scopus, Google Scholar, eLibrary) are pre-wired in the data schema and activate automatically once URLs are added.',
      zh: 'Scopus、Google Scholar 与 eLibrary 槽位已在数据层预留，填入链接后自动启用。',
    },
    copyright: {
      ru: '© 2026 Рыбаков Денис Александрович · Научный профиль',
      en: '© 2026 Denis A. Rybakov · Researcher Profile',
      zh: '© 2026 Denis A. Rybakov · 研究者个人主页',
    },
    backToTop: {
      ru: 'Наверх',
      en: 'Back to top',
      zh: '返回顶部',
    },
  },
};
