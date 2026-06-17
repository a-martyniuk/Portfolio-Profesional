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
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center">
                        {t.titles.experience}
                    </h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

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
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 hidden md:block" />

                                    {/* Content Card */}
                                    <div className="flex-1 md:w-[45%]">
                                        <div className="p-6 rounded-2xl border border-border bg-accent/30 hover:border-primary/50 transition-colors">
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
