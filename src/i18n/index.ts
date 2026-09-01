import { es } from './es';
import { en } from './en';
import type { Locale, Translations } from './types';

export type { Locale, Translations };

const translations: Record<Locale, Translations> = { es, en };

export const defaultLocale: Locale = 'es';
export const locales: Locale[] = ['es', 'en'];

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'es';
}

/** Home path for a locale */
export function homePath(locale: Locale): string {
  return locale === 'en' ? '/en/' : '/';
}

/** Switch locale keeping the same page type */
export function switchLocalePath(currentPath: string, target: Locale): string {
  const isEn = currentPath.startsWith('/en');
  const path = isEn ? currentPath.replace(/^\/en/, '') || '/' : currentPath;

  if (path === '/aviso-legal' || path === '/aviso-legal/') {
    return target === 'en' ? '/en/legal-notice/' : '/aviso-legal/';
  }
  if (path === '/privacidad' || path === '/privacidad/') {
    return target === 'en' ? '/en/privacy/' : '/privacidad/';
  }
  if (path === '/legal-notice' || path === '/legal-notice/') {
    return target === 'en' ? '/en/legal-notice/' : '/aviso-legal/';
  }
  if (path === '/privacy' || path === '/privacy/') {
    return target === 'en' ? '/en/privacy/' : '/privacidad/';
  }

  if (target === 'en') {
    return path === '/' ? '/en/' : `/en${path.endsWith('/') ? path : `${path}/`}`;
  }

  if (path === '/' || path === '') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

export function localePrefix(locale: Locale): string {
  return locale === 'en' ? '/en' : '';
}

export function anchorHref(locale: Locale, id: string): string {
  return `${homePath(locale)}#${id}`;
}
