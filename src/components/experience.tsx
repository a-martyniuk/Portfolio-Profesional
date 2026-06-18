'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

export function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center">
                        {t.titles.experience}
                    </h2>

                    <div className="relative">
                        {/* Timeline Line - Gradient Fade */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent transform md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {t.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline Dot - Cyber Ring with Pulse */}
                                    <div className="absolute left-0 md:left-1/2 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center transform -translate-x-1/2 z-10 hidden md:flex shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 md:w-[45%]">
                                        <div className="group relative p-6 rounded border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-muted/10 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
                                            {/* Corner Decorative Tech Accents */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                                            <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                                <Briefcase size={16} />
                                                <span>{exp.title}</span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                                                <span className="flex items-center gap-1 font-medium text-foreground">
                                                    {exp.company}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {exp.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    {exp.location}
                                                </span>
                                            </div>
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Spacer for Desktop */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
