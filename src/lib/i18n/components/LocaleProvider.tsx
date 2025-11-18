"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import {
  Locale,
  detectBrowserLanguage,
  getStoredLocale,
  setStoredLocale,
  defaultLocale,
} from "@/lib/i18n";

import { Messages } from "../types";

// ---- Tipo del contexto ----
type LocaleContextType = {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  messages: Messages;
};

// ---- Context correcto ----
const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// ---- Provider ----
export function LocaleProvider({
  initialMessages,
  children,
}: {
  initialMessages: Messages;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Messages>(initialMessages);

  useEffect(() => {
    const stored = getStoredLocale();
    const detected = stored || detectBrowserLanguage();

    if (detected !== defaultLocale) {
      setLocaleState(detected);
      loadMessages(detected);
    }
  }, []);

  const loadMessages = async (newLocale: Locale) => {
    const newMessages = await import(`../messages/${newLocale}.json`);
    setMessages(newMessages.default);
  };

  const setLocale = (newLocale: Locale) => {
    setStoredLocale(newLocale);
    setLocaleState(newLocale);
    loadMessages(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

// ---- Hook ----
export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context)
    throw new Error("useLocale must be used within LocaleProvider");

  return context;
}
