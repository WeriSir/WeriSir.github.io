# Инструкция по обновлению контента сайта

Весь контент сайта вынесен в типизированные файлы данных в папке `src/data/`.  
Для добавления новой статьи, патента, точки на карте или видео **не нужно менять HTML/React-компоненты** — достаточно добавить объект в соответствующий массив.

Каждый текстовый блок поддерживает три языка:
```ts
{ ru: 'Текст на русском', en: 'English text', zh: '简体中文文本' }
```

---

## 1. Как добавить новую статью, патент или проект

Откройте файл `src/data/publications.ts` и добавьте новый элемент в начало массива `publicationsData`:

### Пример добавления статьи
```ts
{
  id: 'ije-2027-new-study',
  type: 'article', // 'article' | 'patent' | 'project'
  year: '2027',
  sortOrder: 202705, // Чем больше число, тем выше запись в списке (ГГГГММ)
  title: {
    ru: 'Название статьи на русском или оригинальное английское название',
    en: 'English Article Title',
    zh: '英文或中文论文标题',
  },
  authorsOrHolders: {
    ru: 'Rybakov D.A., Coauthor A.B.',
    en: 'Rybakov D.A., Coauthor A.B.',
    zh: 'Rybakov D.A., Coauthor A.B.',
  },
  venueOrNumber: {
    ru: 'Journal Name, Vol(Issue), pp. 10–20',
    en: 'Journal Name, Vol(Issue), pp. 10–20',
    zh: 'Journal Name, Vol(Issue), pp. 10–20',
  },
  summary: {
    ru: 'Краткая суть работы в 1–2 предложения.',
    en: 'Short 1–2 sentence summary.',
    zh: '1–2 句研究内容简介。',
  },
  badgeText: { ru: 'Статья · DOI', en: 'Article · DOI', zh: '期刊论文' },
  url: 'https://doi.org/10.xxxx/xxxxx', // Обязательная прямая ссылка (используется и для QR-кода, и для клика по изображению)
  identifierLabel: 'DOI: 10.xxxx/xxxxx',
  graphicalAbstractId: 'ijer-2027', // Опциональный визуальный тип аннотации
  image: '/images/gallery/forpost_2026_summer.jpg', // Опциональная фотография материала
  tags: ['PBL', 'CFD'],
},
```

### Пример добавления нового патента РФ
```ts
{
  id: 'patent-230000',
  type: 'patent',
  year: '2027',
  sortOrder: 202703,
  title: {
    ru: 'Название патента (Патент РФ № 230000 U1)',
    en: 'Patent Title (Russian Federation Patent No. 230000 U1)',
    zh: '专利名称（俄罗斯联邦专利号 230000 U1）',
  },
  authorsOrHolders: {
    ru: 'Авторы: Рыбаков Д.А., ... · Патентообладатель: ...',
    en: 'Inventors: Rybakov D.A., ... · Assignee: ...',
    zh: '发明人：Rybakov D.A. 等 · 专利权人：...',
  },
  venueOrNumber: {
    ru: 'МПК E21B ... · Заявл. ... · Опубл. ...',
    en: 'IPC E21B ... · Filed ... · Published ...',
    zh: 'IPC 分类号 E21B ... · 申请日 ... · 授权公告日 ...',
  },
  summary: {
    ru: 'Краткое назначение разработки.',
    en: 'Brief technical purpose of the invention.',
    zh: '专利核心技术方案简述。',
  },
  badgeText: { ru: 'Патент РФ', en: 'RF Patent', zh: '俄罗斯专利' },
  identifierLabel: 'RU 230000 U1',
  tags: ['E21B', 'Патент'],
},
```

Счётчики в фильтрах («Все», «Научные статьи», «Патенты РФ», «Проекты и доклады») обновятся автоматически.

---

## 2. Как добавить новую локацию на карту и в таймлайн

Откройте `src/data/locations.ts` и добавьте новый объект в массив `locationsData`:

```ts
{
  id: 'tyumen-2027',
  order: 7, // Порядковый номер на карте и в таймлайне
  coords: [57.1522, 65.5272], // [широта, долгота]
  period: '2027',
  category: 'research', // 'research' | 'field' | 'conference'
  city: { ru: 'Тюмень', en: 'Tyumen', zh: '秋明' },
  organization: {
    ru: 'Название университета, лаборатории или R&D-центра',
    en: 'University / Lab / R&D Center Name',
    zh: '高校 / 实验室 / 研发中心名称',
  },
  projectTitle: {
    ru: 'Название проекта или стажировки',
    en: 'Project or Internship Title',
    zh: '项目或实习课题名称',
  },
  role: {
    ru: 'Ваша роль',
    en: 'Your role',
    zh: '担任角色',
  },
  summary: {
    ru: 'Краткое описание выполненных задач и результатов.',
    en: 'Concise summary of tasks and outcomes.',
    zh: '项目任务与成果简要说明。',
  },
},
```

---

## 3. Как добавить видеопрезентацию или перспективное направление

Откройте `src/data/futureVideos.ts`:

- Для нового направления добавьте объект в `futureDirectionsData`.
- Для нового видео добавьте объект в `videosData`. Поддерживаются платформы:
  - `'dzen'` — открывает видео по ссылке с красивой карточкой-постером (или встраивается, если указана ссылка вида `https://dzen.ru/embed/...`);
  - `'youtube'`, `'rutube'`, `'vk'` — автоматически встраиваются как интерактивный видеоплеер прямо на странице;
  - `'mp4'` — воспроизводит локальный видеофайл из папки `public/videos/...`;
  - `'placeholder'` — аккуратный зарезервированный слот без ссылки.

```ts
{
  id: 'video-new-2027',
  directionId: 'pbl-factory-field', // id направления из futureDirectionsData
  date: { ru: 'Март 2027', en: 'March 2027', zh: '2027年3月' },
  event: {
    ru: 'Конференция или стендовые испытания',
    en: 'Conference or Bench Trials',
    zh: '学术会议或台架试验',
  },
  title: {
    ru: 'Название видеопрезентации',
    en: 'Video Presentation Title',
    zh: '视频汇报标题',
  },
  description: {
    ru: 'О чём доклад (1–2 предложения).',
    en: 'Brief description of the presentation.',
    zh: '视频汇报内容简介。',
  },
  platform: 'youtube', // 'dzen' | 'youtube' | 'rutube' | 'vk' | 'mp4' | 'placeholder'
  url: 'https://www.youtube.com/watch?v=VIDEO_ID',
  posterImage: '/images/pbl-bench-test.png',
},
```

---

## 4. Как добавить ссылки на Scopus, Google Scholar, ResearchGate, eLibrary

Откройте `src/data/profile.ts` и найдите массив `academicProfiles`.  
Заполните пустое поле `url` для нужного сервиса — соответствующая ссылка автоматически станет активной кнопкой в футере:

```ts
{
  id: 'scopus',
  label: 'Scopus',
  url: 'https://www.scopus.com/authid/detail.uri?authorId=ВАШ_ID',
  identifier: 'ВАШ_ID',
},
```

Там же в `src/data/profile.ts` можно обновить статус в `statusBadge`, счётчики в `metricsSummary`, ссылку на новый файл резюме (`contacts.cvUrl`) и описание статуса `d121` в `uiStrings.publicationsSection.flagshipStatus`.

---

## 5. Как добавить новое фото в интерактивную галерею (карусель)

Скопируйте изображение в `public/images/gallery/` и добавьте объект в файл `src/data/gallery.ts`:

```ts
{
  id: 'factory-test-2026',
  src: '/images/gallery/factory_d121.jpg',
  category: 'rd', // 'rd' (стенды и PBL) | 'field' (полигон Саблино)
  date: { ru: 'Осень 2026', en: 'Autumn 2026', zh: '2026年秋' },
  title: {
    ru: 'Заводские испытания образца d121',
    en: 'Factory Trials of Prototype d121',
    zh: 'd121 原型样机工厂测试',
  },
  caption: {
    ru: 'Краткое описание кадра для карточки и окна просмотра.',
    en: 'Concise caption for card and lightbox preview.',
    zh: '图片卡片及大图弹窗简介。',
  },
  location: {
    ru: 'Санкт-Петербург',
    en: 'Saint Petersburg',
    zh: '圣彼得堡',
  },
  articleUrl: 'https://forpost-sz.ru/a/...', // Опциональная ссылка на связанную статью или патент
  articleLabel: {
    ru: 'Читать материал',
    en: 'Read article',
    zh: '阅读文章',
  },
},
```

---

## 6. Локальный запуск и сборка

```bash
npm install
npm run dev      # запуск для локальной проверки
npm run build    # проверка TypeScript и сборка продакшен-версии в dist/
```
