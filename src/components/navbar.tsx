'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const navLinks = [
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.stack, href: '#stack' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-heading text-xl font-bold tracking-tighter">
                    Alexis<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    {/* Segmented Language Selector */}
                    <div className="flex items-center rounded border border-border bg-muted/20 p-0.5 font-mono text-[10px] font-bold">
                        <button
                            onClick={() => setLanguage('es')}
                            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                                language === 'es' 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                                language === 'en' 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            EN
                        </button>
                    </div>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    {/* Mobile Segmented Language Selector */}
                    <div className="flex items-center rounded border border-border bg-muted/20 p-0.5 font-mono text-[10px] font-bold mr-1">
                        <button
                            onClick={() => setLanguage('es')}
                            className={`px-2 py-1 rounded transition-all ${
                                language === 'es' 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-2 py-1 rounded transition-all ${
                                language === 'en' 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            EN
                        </button>
                    </div>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-3 rounded-full hover:bg-muted transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-3 rounded-md hover:bg-muted transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="px-4 py-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors min-h-[44px] flex items-center"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
