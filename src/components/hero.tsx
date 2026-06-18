'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Activity, Database, Cloud, BarChart3, Shield } from 'lucide-react';
import Link from 'next/link';
import { useAnalytics } from '@/lib/analytics';
import { useLanguage } from '@/components/providers/language-provider';

const STAT_ITEMS = [
    { value: '8+', label: 'años exp.' },
    { value: '20+', label: 'proyectos' },
    { value: '99.9%', label: 'uptime' },
    { value: '15+', label: 'tecnologías' },
];

const TECH_BADGES = [
    { icon: <Database size={12} />, label: 'Snowflake' },
    { icon: <Cloud size={12} />, label: 'Microsoft Fabric' },
    { icon: <Database size={12} />, label: 'Oracle ODI' },
    { icon: <BarChart3 size={12} />, label: 'Power BI' },
    { icon: <Cloud size={12} />, label: 'Azure / AWS' },
    { icon: <Shield size={12} />, label: 'ISO 27001' },
    { icon: <Database size={12} />, label: 'PySpark' },
    { icon: <BarChart3 size={12} />, label: 'Delta Lake' },
];

export function Hero() {
    const { trackCTAClick } = useAnalytics();
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative pt-28 pb-16 overflow-hidden">
            {/* Fine grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            {/* Background glows */}
            <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-10 pointer-events-none">
                <div className="absolute top-[-5%] right-[5%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-[20%] left-[5%] h-[400px] w-[400px] rounded-full bg-cyan-900/20 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative">

                {/* System Telemetry Status Bar — full width */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 p-3 neon-card flex flex-wrap items-center justify-between gap-4 font-mono text-xs md:text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_rgba(6,182,212,0.8)] dark:shadow-[0_0_8px_#06b6d4]"></span>
                        </span>
                        <span className="font-bold text-foreground">{t.hero.status}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 divide-x divide-border">
                        <span className="pl-4">PING: 14ms</span>
                        <span className="pl-4">SEC_LEVEL: ISO_27001</span>
                        <span className="pl-4">LOC: AR/BUE</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        <span className="font-bold">ENG_VER: 2.6.0</span>
                    </div>
                </motion.div>

                {/* Two-column hero layout */}
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* LEFT — Main headline + CTAs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="inline-block py-1 px-3 rounded border border-primary/20 bg-primary/10 text-primary text-xs font-mono tracking-wider uppercase mb-6">
                            {t.hero.available}
                        </span>

                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold tracking-tight mb-5 leading-tight">
                            Alexis Martyniuk
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500">
                                Senior Data Engineer
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <Link
                                href="#projects"
                                onClick={() => trackCTAClick('Ver Proyectos Reales')}
                                className="w-full sm:w-auto px-6 py-3.5 rounded border border-primary bg-primary text-primary-foreground font-mono font-bold text-sm flex items-center justify-center gap-2 hover:bg-transparent hover:text-primary transition-all duration-300 shadow-lg shadow-primary/20"
                            >
                                {t.hero.ctaProjects} <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="#contact"
                                onClick={() => trackCTAClick('Hablar Conmigo')}
                                className="w-full sm:w-auto px-6 py-3.5 rounded border border-border bg-muted/40 hover:bg-muted text-foreground font-mono font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                {t.hero.ctaContact}
                            </Link>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://github.com/a-martyniuk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded border border-border hover:bg-muted transition-colors flex items-center justify-center text-muted-foreground hover:text-foreground"
                                    aria-label="GitHub"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/alexismartyniuk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded border border-border hover:bg-muted transition-colors flex items-center justify-center text-muted-foreground hover:text-foreground"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT — Stats panel + tech stack badges */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="hidden lg:flex flex-col gap-6"
                    >
                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {STAT_ITEMS.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="neon-card p-5 group"
                                >
                                    <div className="text-4xl font-heading font-black text-primary group-hover:scale-105 transition-transform origin-left drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tech badges */}
                        <div className="neon-card p-5">
                            <p className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
                                {'// Core Stack'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {TECH_BADGES.map((badge) => (
                                    <span
                                        key={badge.label}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-background/60 text-xs md:text-sm font-mono text-muted-foreground hover:border-primary/40 hover:text-primary hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all duration-300"
                                    >
                                        <span className="text-primary">{badge.icon}</span>
                                        {badge.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Pipeline visual indicator */}
                        <div className="neon-card p-5 font-mono text-xs md:text-sm">
                            <div className="flex items-center gap-2 text-primary mb-3">
                                <Activity size={14} className="animate-pulse" />
                                <span className="font-bold tracking-wider drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]">PIPELINE STATUS</span>
                            </div>
                            <div className="space-y-2.5 text-muted-foreground">
                                {['INGEST', 'TRANSFORM', 'LOAD', 'VALIDATE'].map((stage, i) => (
                                    <div key={stage} className="flex items-center gap-2">
                                        <span className="w-20 text-right text-xs md:text-sm">{stage}</span>
                                        <div className="flex-1 h-1.5 rounded-full bg-muted dark:bg-zinc-800 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-primary rounded-full shadow-[0_0_8px_#06b6d4] dark:shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${[100, 95, 88, 100][i]}%` }}
                                                transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                                            />
                                        </div>
                                        <span className="text-primary text-xs md:text-sm font-bold drop-shadow-[0_0_4px_rgba(6,182,212,0.3)]">{['100%', '95%', '88%', '100%'][i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
