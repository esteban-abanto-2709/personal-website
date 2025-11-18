export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';

export const locales: Locale[] = ['en', 'es'];

export function detectBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return defaultLocale;

  const browserLang = navigator.language.split('-')[0];
  return locales.includes(browserLang as Locale)
    ? (browserLang as Locale)
    : defaultLocale;
}

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('locale') as Locale | null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('locale', locale);
}

export async function getMessages(locale: Locale) {
  return (await import(`./messages/${locale}.json`)).default;
}