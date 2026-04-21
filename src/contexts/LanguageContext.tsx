import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Nav
    'nav.dashboard': 'Dashboard',
    'nav.workflows': 'Workflows',
    'nav.marketplace': 'Marketplace',
    'nav.studio': 'Studio',
    'nav.settings': 'Settings',
    // Settings
    'settings.title': 'System Configuration',
    'settings.subtitle': 'Core Environment Settings',
    'settings.language': 'Interface Language',
    'settings.language.desc': 'Select your preferred operative language',
    'settings.appearance': 'Appearance',
    'settings.notifications': 'Notifications',
    'settings.security': 'Security',
    'settings.save': 'Save Changes',
    // ... add more as needed
  },
  es: {
    // Nav
    'nav.dashboard': 'Panel',
    'nav.workflows': 'Flujos',
    'nav.marketplace': 'Mercado',
    'nav.studio': 'Estudio',
    'nav.settings': 'Ajustes',
    // Settings
    'settings.title': 'Configuración del Sistema',
    'settings.subtitle': 'Ajustes del Entorno Principal',
    'settings.language': 'Idioma de Interfaz',
    'settings.language.desc': 'Selecciona tu idioma operativo preferido',
    'settings.appearance': 'Apariencia',
    'settings.notifications': 'Notificaciones',
    'settings.security': 'Seguridad',
    'settings.save': 'Guardar Cambios',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish as requested earlier

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
