'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ArrowLeft, Sun, Moon, Calendar, User, Clock, BookOpen } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

interface ArticleClientProps {
    htmlContent: string;
}

export function ArticleClient({ htmlContent }: ArticleClientProps) {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [readProgress, setReadProgress] = useState(0);

    useEffect(() => {
        setMounted(true);
        
        // Track reading progress
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setReadProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Estimate reading time (rough calculation: ~200 words per minute)
    const [readingTime, setReadingTime] = useState(3);
    useEffect(() => {
        const textContent = htmlContent.replace(/<[^>]*>/g, '');
        const wordCount = textContent.trim().split(/\s+/).length;
        const minutes = Math.max(1, Math.ceil(wordCount / 200));
        setReadingTime(minutes);
    }, [htmlContent]);

    // Back to portfolio text depending on language
    const backText = language === 'es' ? 'Volver al Inicio' : 'Back to Home';
    const readTimeText = language === 'es' ? `${readingTime} min de lectura` : `${readingTime} min read`;

    return (
        <div className="min-h-screen bg-background text-foreground relative selection:bg-slate-400/30 font-sans pb-20 overflow-x-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
            <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-slate-400/5 dark:bg-slate-400/5 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-primary/5 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Reading Progress Bar */}
            <div 
                className="fixed top-0 left-0 h-[3px] bg-primary z-50 transition-all duration-100 ease-out" 
                style={{ width: `${readProgress}%` }}
            />

            {/* Floating Dynamic Navbar */}
            <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/70 backdrop-blur-md transition-colors">
                <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-heading text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        Alexis<span className="text-primary">.</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        {/* Segmented Language Selector */}
                        <div className="flex items-center rounded border border-border bg-muted/20 p-0.5 font-mono text-[10px] font-bold">
                            <button
                                onClick={() => setLanguage('es')}
                                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                                    mounted && language === 'es' 
                                        ? 'bg-primary text-primary-foreground' 
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                ES
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                                    mounted && language === 'en' 
                                        ? 'bg-primary text-primary-foreground' 
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <div className="w-[18px] h-[18px]" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 md:px-6 pt-8 max-w-4xl relative">
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        href="/#projects" 
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all group py-1.5 px-3 rounded-lg border border-border/50 bg-muted/10 hover:bg-muted/30 cursor-pointer"
                    >
                        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                        {backText}
                    </Link>
                </div>

                {/* Article Card Wrapper */}
                <article className="glass p-6 md:p-10 rounded-2xl border border-border/50 shadow-xl relative overflow-hidden backdrop-blur-sm">
                    {/* Corner decorative light */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Metadata Header Row */}
                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground mb-8 pb-6 border-b border-border/60">
                        <div className="flex items-center gap-1.5">
                            <User size={14} className="text-primary" />
                            <span>Alexis Martyniuk</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-border" />
                        <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-primary" />
                            <span>{language === 'es' ? 'Junio 2026' : 'June 2026'}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-border" />
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-primary" />
                            <span>{readTimeText}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-border" />
                        <div className="flex items-center gap-1.5">
                            <BookOpen size={14} className="text-primary" />
                            <span>{language === 'es' ? 'Caso de Estudio' : 'Case Study'}</span>
                        </div>
                    </div>

                    {/* Rendered HTML Content */}
                    <div 
                        className="prose-markdown"
                        dangerouslySetInnerHTML={{ __html: htmlContent }} 
                    />
                </article>

                {/* Footer Navigation */}
                <div className="mt-12 text-center">
                    <Link 
                        href="/#projects" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors py-2.5 px-5 rounded-xl cursor-pointer"
                    >
                        <ArrowLeft size={16} />
                        {language === 'es' ? 'Volver al Portafolio Completo' : 'Back to Full Portfolio'}
                    </Link>
                </div>
            </main>
        </div>
    );
}
