'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface TimelineEvent {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements?: string[];
    technologies?: string[];
}

interface InteractiveTimelineProps {
    events: TimelineEvent[];
}

export function InteractiveTimeline({ events }: InteractiveTimelineProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
        >
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

            <div className="space-y-8">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative pl-16"
                    >
                        {/* Timeline Dot */}
                        <motion.div
                            className={`absolute left-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${expandedIndex === index
                                    ? 'bg-primary border-primary shadow-lg shadow-primary/30'
                                    : 'bg-background border-primary/30'
                                }`}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Briefcase
                                size={20}
                                className={expandedIndex === index ? 'text-primary-foreground' : 'text-primary'}
                            />
                        </motion.div>

                        {/* Content Card */}
                        <motion.div
                            className={`rounded-2xl border transition-all cursor-pointer ${expandedIndex === index
                                    ? 'bg-accent/30 border-primary/30 shadow-xl'
                                    : 'bg-background border-border hover:border-primary/20'
                                }`}
                            onClick={() => toggleExpand(index)}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                                        <p className="text-primary font-semibold mb-2">{event.company}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {event.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {event.location}
                                            </span>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="text-muted-foreground" size={20} />
                                    </motion.div>
                                </div>

                                {/* Expanded Content */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: expandedIndex === index ? 'auto' : 0,
                                        opacity: expandedIndex === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 mt-4 border-t border-border/50 space-y-4">
                                        <p className="text-muted-foreground leading-relaxed">
                                            {event.description}
                                        </p>

                                        {event.achievements && event.achievements.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">
                                                    Logros Clave
                                                </h4>
                                                <ul className="space-y-2">
                                                    {event.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <span className="text-primary mt-1">▸</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {event.technologies && event.technologies.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">
                                                    Tecnologías
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {event.technologies.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
