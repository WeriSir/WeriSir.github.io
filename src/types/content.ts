export type Locale = 'ru' | 'en' | 'zh';
export type ThemeMode = 'light' | 'dark';

export interface LocalizedText {
  ru: string;
  en: string;
  zh: string;
}

export interface AcademicProfileLink {
  id: string;
  label: string;
  url: string;
  identifier?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: LocalizedText;
  specialty: LocalizedText;
  institution: LocalizedText;
  details: LocalizedText;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  items: LocalizedText[];
}

export type PublicationType = 'article' | 'patent' | 'project';

export interface PublicationItem {
  id: string;
  type: PublicationType;
  year: string;
  sortOrder: number;
  title: LocalizedText;
  authorsOrHolders: LocalizedText;
  venueOrNumber: LocalizedText;
  summary: LocalizedText;
  badgeText: LocalizedText;
  url: string;
  identifierLabel?: string | LocalizedText;
  graphicalAbstractImage?: string;
  graphicalAbstractLegend?: LocalizedText[];
  tags: string[];
}

export interface LocationItem {
  id: string;
  order: number;
  coords: [number, number];
  period: string;
  city: LocalizedText;
  organization: LocalizedText;
  projectTitle: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  category: 'research' | 'field' | 'conference';
}

export type GalleryCategory = 'field' | 'rd';

export interface GalleryPhotoItem {
  id: string;
  src: string;
  category: GalleryCategory;
  date: LocalizedText;
  title: LocalizedText;
  caption: LocalizedText;
  location: LocalizedText;
  articleUrl?: string;
  articleLabel?: LocalizedText;
}

export interface FutureDirection {
  id: string;
  title: LocalizedText;
  hypothesis: LocalizedText;
  collaborationScope: LocalizedText;
  linkedVideoId?: string;
}

export type VideoPlatform = 'dzen' | 'youtube' | 'rutube' | 'vk' | 'mp4' | 'placeholder';

export interface VideoItem {
  id: string;
  directionId: string;
  date: LocalizedText;
  event: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  platform: VideoPlatform;
  url: string;
  posterImage?: string;
}
