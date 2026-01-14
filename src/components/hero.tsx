'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[10%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]" />
                <div className="absolute bottom-[10%] left-[5%] h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                            Disponible para nuevos proyectos
                        </span>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6">
                            Alexis Martyniuk — <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                                Analytics Engineer de Sistemas Críticos
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                            Diseño y opero plataformas de datos que permiten a gobiernos, bancos y laboratorios tomar decisiones críticas con información confiable y en tiempo real.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#projects"
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                            >
                                Ver Proyectos Reales <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-primary/20 bg-background text-foreground font-bold flex items-center justify-center gap-2 hover:border-primary/50 transition-all"
                            >
                                Hablar Conmigo
                            </Link>
                            <div className="flex items-center gap-2 mt-4 sm:mt-0">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
