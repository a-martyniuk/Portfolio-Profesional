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
                            Available for new projects
                        </span>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6">
                            Full-Stack Developer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                                Building Production SaaS
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                            I run my own Next.js production site with CI/CD, analytics, and conversion tracking on Vercel.
                            Software engineering focused on performance, scalability, and ROI.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#projects"
                                className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                            >
                                View Projects <ArrowRight size={18} />
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
