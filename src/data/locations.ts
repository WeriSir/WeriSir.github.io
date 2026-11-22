import type { LocationItem } from '../types/content';

export const locationsData: LocationItem[] = [
  {
    id: 'spmi',
    order: 1,
    coords: [59.9296, 30.2707],
    period: '2019–2026',
    category: 'research',
    city: {
      ru: 'Санкт-Петербург',
      en: 'Saint Petersburg',
      zh: '圣彼得堡',
    },
    organization: {
      ru: 'Санкт-Петербургский горный университет императрицы Екатерины II',
      en: 'Empress Catherine II Saint Petersburg Mining University',
      zh: '圣彼得堡叶卡捷琳娜二世矿业大学',
    },
    projectTitle: {
      ru: 'Академическая база, кафедра бурения скважин и V Междунар. НПК (май 2026)',
      en: 'Academic Base, Well Drilling Dept., Patents & 5th Int. Conference (May 2026)',
      zh: '核心科研基地、钻井工程教研室、专利研发及第五届国际会议（2026年5月）',
    },
    role: {
      ru: 'Бакалавриат (2019–2023), магистратура (2023–2025), исследователь',
      en: 'B.Sc. (2019–2023), M.Sc. (2023–2025), Researcher',
      zh: '学士（2019–2023）、硕士（2023–2025）、钻井装备研究员',
    },
    summary: {
      ru: 'Фундаментальная подготовка по бурению на шельфе и горизонтальных скважин, CFD-исследования проточного поршня-конфузора, 2 патента РФ (221930 U1, 226121 U1), публикации в IJE и доклад на V Международной НПК «Прорывные технологии…» (май 2026).',
      en: 'Offshore & horizontal well drilling degrees, CFD modeling of flow-through piston confusers, two RF patents (221930 U1, 226121 U1), IJE papers, and May 2026 conference talk.',
      zh: '完成海上及水平井钻井工程专业培养，开展渐缩流通活塞CFD仿真与防漏工具研发，获2项俄罗斯专利并在2026年5月国际会议作报告。',
    },
  },
  {
    id: 'sablino',
    order: 2,
    coords: [59.654, 30.793],
    period: '2020–2026',
    category: 'field',
    city: {
      ru: 'п. Саблино, Ленинградская обл.',
      en: 'Sablino, Leningrad Oblast',
      zh: '列宁格勒州 · 萨布利诺',
    },
    organization: {
      ru: 'Учебно-научный полигон «Саблино» (СПГУ)',
      en: 'Sablino Training and Research Ground (Mining University)',
      zh: '矿业大学萨布利诺教学科研实验基地',
    },
    projectTitle: {
      ru: 'Бурение модели скважины, стендовые испытания и руководство проектами',
      en: 'Model Well Drilling, Hydraulic Bench Tests & Project Management',
      zh: '模型井钻探、水力台架测试与基地研发项目管理',
    },
    role: {
      ru: 'Практикант (2020–2023), помощник бурильщика 5 разряда (02.2023), руководитель проекта (с 07.2023)',
      en: 'Trainee (2020–2023), Assistant Driller Cat. 5 (02.2023), Project Manager (since 07.2023)',
      zh: '实习生（2020–2023）、五级钻井副工（2023.02）、项目负责人（2023.07至今）',
    },
    summary: {
      ru: 'Участие в бурении модели скважины (2023), разработка пособий по насосу 8Т650 и ГНВП, проведение курсов ДПК и производственных практик, организационное и ситуационное сопровождение испытаний оборудования.',
      en: 'Model well drilling (2023), authoring 8T650 pump & well-control training manuals, organizing student practices, and supervising third-party equipment tests.',
      zh: '参与2023年模型井钻井施工，编写8T650泥浆泵及井控教材，组织全阶段学生生产实习并统筹第三方井下设备试验。',
    },
  },
  {
    id: 'surgut',
    order: 3,
    coords: [61.254, 73.3962],
    period: '06–07.2022',
    category: 'field',
    city: {
      ru: 'Сургут, ХМАО-Югра',
      en: 'Surgut, Khanty-Mansi AO',
      zh: '汉特-曼西自治区 · 苏尔古特',
    },
    organization: {
      ru: 'ПАО «Сургутнефтегаз», Управление буровых работ № 1 (УБР № 1)',
      en: 'PJSC Surgutneftegas, Drilling Operations Department No. 1',
      zh: '苏尔古特石油天然气股份公司（Surgutneftegas）第一钻井工程处',
    },
    projectTitle: {
      ru: 'Производственно-технологическая буровая практика в Западной Сибири',
      en: 'Industrial Drilling Field Internship in Western Siberia',
      zh: '西西伯利亚油田生产技术实习',
    },
    role: {
      ru: 'Помощник бурильщика ЭиРБСНГ 5 разряда (второй)',
      en: 'Assistant Driller (5th Category) in Production & Exploratory Drilling',
      zh: '生产与勘探钻井五级副钻井工',
    },
    summary: {
      ru: 'Полевая работа на производственном буровом объекте ПАО «Сургутнефтегаз» в штате буровой бригады; освоение промысловых регламентов и буровых операций.',
      en: 'Hands-on field experience in an active drilling crew at PJSC Surgutneftegas, mastering field drilling routines and equipment operation.',
      zh: '在苏尔古特石油天然气公司一线钻井队参与现场施工作业，积累了丰富的西西伯利亚现场钻井规程与装备运行经验。',
    },
  },
  {
    id: 'energotekhnohab',
    order: 4,
    coords: [59.9615, 30.3195],
    period: '07.2024',
    category: 'conference',
    city: {
      ru: 'Санкт-Петербург',
      en: 'Saint Petersburg',
      zh: '圣彼得堡',
    },
    organization: {
      ru: 'Технологический инкубатор «Энерготехнохаб Петербург»',
      en: 'Energotekhnohab Petersburg Technology Incubator',
      zh: '彼得堡能源技术中心（Energotekhnohab）科技孵化器',
    },
    projectTitle: {
      ru: 'Финал акселератора с проектом циркуляционного переводника PBL',
      en: 'Technology Incubator Finalist Pitch (PBL Circulation Sub)',
      zh: '“PBL 水力循环短节”入围能源科技孵化器决赛路演',
    },
    role: {
      ru: 'Финалист инкубатора',
      en: 'Program Finalist',
      zh: '孵化器决赛项目负责人',
    },
    summary: {
      ru: 'Экспертная защита технологического и экономического потенциала гидравлического циркуляционного переводника перед индустриальным жюри.',
      en: 'Presented the hydraulic circulation sub R&D roadmap and field value proposition to energy sector experts and investors.',
      zh: '向能源行业专家评审团系统展示水力循环短节的研发路线、技术壁垒与现场降本价值并入围决赛。',
    },
  },
  {
    id: 'moscow',
    order: 5,
    coords: [55.7558, 37.6173],
    period: '08.2024',
    category: 'conference',
    city: {
      ru: 'Москва',
      en: 'Moscow',
      zh: '莫斯科',
    },
    organization: {
      ru: 'ГК «Газпром Бурение» и «РусГазБурение»',
      en: 'Gazprom Burenie & RusGazBurenie Group',
      zh: '俄罗斯天然气钻井集团（Gazprom Burenie）与 RusGazBurenie',
    },
    projectTitle: {
      ru: 'Научно-техническая конференция (I этап): доклад «PBL-переводники в бурении»',
      en: 'Scientific & Technical Conference (Stage I): “PBL Circulation Subs in Drilling”',
      zh: '科研技术大会（第一阶段）：《PBL 循环短节在钻井中的应用》专题报告',
    },
    role: {
      ru: 'Докладчик на отраслевой научно-технической конференции',
      en: 'Conference Presenter',
      zh: '行业科技大会报告人',
    },
    summary: {
      ru: 'Представление решений по применению гидравлически активируемых переводников для повышения надёжности промывки и борьбы с поглощениями.',
      en: 'Technical presentation detailing hydraulic PBL sub advantages for wellbore cleaning and lost circulation control in industrial operations.',
      zh: '面向大型钻井工程企业汇报水力激活 PBL 短节在提高井眼净化及防治井漏方面的工程优势。',
    },
  },
  {
    id: 'kovykta',
    order: 6,
    coords: [55.12, 105.75],
    period: '06.2025',
    category: 'research',
    city: {
      ru: 'Иркутская обл. · Ковыктинское ГКМ',
      en: 'Irkutsk Oblast · Kovykta GCF',
      zh: '伊尔库茨克州 · 科维克塔凝析气田',
    },
    organization: {
      ru: 'Объект магистерского исследования (СПГУ, 21.04.01)',
      en: 'M.Sc. Thesis Study Site (Mining University, 21.04.01)',
      zh: '硕士毕业论文工程研究对象（圣彼得堡矿业大学 21.04.01）',
    },
    projectTitle: {
      ru: 'Магистерский проект по бурению горизонтальных скважин на Ковыктинском ГКМ',
      en: 'M.Sc. Project on Horizontal Well Drilling at the Kovykta Field',
      zh: '科维克塔大型凝析气田水平井钻井工程硕士课题',
    },
    role: {
      ru: 'Автор магистерского проекта (защита в июне 2025 на «отлично»)',
      en: 'M.Sc. Thesis Author (defended June 2025 with Distinction)',
      zh: '硕士课题负责人（2025年6月以“优秀”成绩通过答辩）',
    },
    summary: {
      ru: 'Разработка технологических решений по строительству горизонтальных скважин в сложных горно-геологических условиях Ковыктинского газоконденсатного месторождения.',
      en: 'Engineering solutions for horizontal well construction under the complex geological conditions of the Kovykta Gas Condensate Field.',
      zh: '针对科维克塔凝析气田复杂地质构造，完成水平井钻井工艺及井下复杂情况预防工程设计。',
    },
  },
];
