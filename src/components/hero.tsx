'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Activity } from 'lucide-react';
import Link from 'next/link';
import { useAnalytics } from '@/lib/analytics';

export function Hero() {
    const { trackCTAClick } = useAnalytics();

    return (
        <section id="hero" className="relative pt-32 pb-16 overflow-hidden">
            {/* Minimalist Grid Overlay for industrial aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
            
            {/* Background Decor - Amber radial glow instead of purple */}
            <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-10 pointer-events-none">
                <div className="absolute top-[-5%] right-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-[20%] left-[5%] h-[400px] w-[400px] rounded-full bg-zinc-500/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto">
                    
                    {/* System Telemetry Status Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 p-3 rounded-lg border border-border bg-muted/30 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="font-bold text-foreground">SYSTEM: ONLINE</span>
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

                    <div className="text-center sm:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="inline-block py-1 px-3 rounded border border-primary/20 bg-primary/10 text-primary text-xs font-mono tracking-wider uppercase mb-6">
                                {"// DISPONIBLE PARA NUEVOS PROYECTOS"}
                            </span>
                            
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
                                Alexis Martyniuk <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-600 to-amber-500">
                                    Analytics Engineer de Sistemas Críticos
                                </span>
                            </h1>
                            
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                                Diseño, opero y automatizo plataformas de datos escalables. Especializado en migración de pipelines (ETL/ELT), arquitecturas dimensionales de nube (Snowflake/Azure/Fabric) y optimización de flujos corporativos de alta transaccionalidad.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="#projects"
                                    onClick={() => trackCTAClick('Ver Proyectos Reales')}
                                    className="w-full sm:w-auto px-6 py-3.5 rounded border border-primary bg-primary text-primary-foreground font-mono font-bold text-sm flex items-center justify-center gap-2 hover:bg-transparent hover:text-primary transition-all duration-300 shadow-lg shadow-primary/10"
                                >
                                    VER PROYECTOS <ArrowRight size={16} />
                                </Link>
                                <Link
                                    href="#contact"
                                    onClick={() => trackCTAClick('Hablar Conmigo')}
                                    className="w-full sm:w-auto px-6 py-3.5 rounded border border-border bg-muted/40 hover:bg-muted text-foreground font-mono font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                                >
                                    ESTABLECER CONEXIÓN
                                </Link>
                                
                                <div className="flex items-center gap-3 mt-4 sm:mt-0">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
