import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return segment in languages ? (segment as Lang) : defaultLang;
}

export const useTranslations = (lang: Lang) => ui[lang];

export const localeUrl = (lang: Lang) => getRelativeLocaleUrl(lang, '');
