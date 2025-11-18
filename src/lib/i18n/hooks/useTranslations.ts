import { useLocale } from '../components/LocaleProvider';

export function useTranslations(namespace?: string) {
  const { messages } = useLocale();

  return (key: string): string => {
    const keys = namespace ? `${namespace}.${key}` : key;
    const path = keys.split('.');

    let value: unknown = messages;
    
    for (const k of path) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key "${keys}" not found`);
        return key;
      }
    }

    if (typeof value === 'object' && value !== null) {
      console.warn(`Translation key "${keys}" returned an object, expected string`);
      return key;
    }

    return String(value ?? key);
  };
}

export function useMessages() {
  const { messages } = useLocale();
  return messages;
}