'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationDict } from '@/lib/translations';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('es');

    useEffect(() => {
        const storedLanguage = localStorage.getItem('portfolio-language') as Language;
        if (storedLanguage && (storedLanguage === 'es' || storedLanguage === 'en')) {
            setLanguageState(storedLanguage);
            document.documentElement.lang = storedLanguage;
        } else {
            document.documentElement.lang = 'es';
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('portfolio-language', lang);
        document.documentElement.lang = lang;
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
