'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Newspaper } from 'lucide-react';
import Image from 'next/image';
import { useAnalytics } from '@/lib/analytics';
import { useLanguage } from '@/components/providers/language-provider';
import type { Publication } from '@/lib/translations';

interface PressCardProps {
    publication: Publication;
    featured?: boolean;
}

export function PressCard({ publication, featured = false }: PressCardProps) {
    const { trackOracleClick } = useAnalytics();
    const { language } = useLanguage();

    const handleLinkClick = () => {
        if (publication.link.includes('oracle')) {
            trackOracleClick();
        }
    };

    const technicalId = `PRESS-${publication.source.substring(0, 3).toUpperCase()}-${publication.date.replace(/[^0-9]/g, '') || '2023'}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`group relative rounded border border-border/40 bg-background/30 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/60 hover:bg-muted/5 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] ${
                featured ? 'lg:grid lg:grid-cols-12 lg:gap-8' : ''
            }`}
        >
            {/* Tech Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Image Section */}
            <div className={`relative aspect-video overflow-hidden bg-muted border-b border-border/40 ${
                featured ? 'lg:col-span-5 lg:aspect-auto lg:min-h-[300px] lg:border-b-0 lg:border-r lg:border-border/40' : ''
            }`}>
                <Image
                    src={publication.image}
                    alt={publication.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-95"
                />
                
                {/* Tech ID Code Badge */}
                <div className="absolute top-4 left-4 z-10 font-mono text-[9px] bg-background/90 text-muted-foreground border border-border/40 px-2 py-0.5 rounded shadow-sm">
                    {technicalId}
                </div>

                {/* Source Badge */}
                <div className="absolute top-4 right-4 z-10 font-mono text-[9px] tracking-wider uppercase">
                    <span className="px-2 py-0.5 rounded border font-bold bg-cyan-400/10 text-cyan-400 border-cyan-400/20">
                        {publication.source}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className={`p-6 md:p-8 flex flex-col justify-between ${
                featured ? 'lg:col-span-7' : ''
            }`}>
                <div className="space-y-4">
                    {/* Date and Category */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans">
                        <span className="flex items-center gap-1.5 font-medium">
                            <Calendar size={13} className="text-primary/70" />
                            {publication.date}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-border" />
                        <span className="flex items-center gap-1.5 font-medium">
                            <Newspaper size={13} className="text-primary/70" />
                            {language === 'es' ? 'Publicación Oficial' : 'Official Press'}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-heading font-extrabold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {publication.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                        {publication.description}
                    </p>
                </div>

                {/* Footer with tags and action */}
                <div className="mt-8 pt-6 border-t border-border/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {publication.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-2 py-0.5 rounded border border-border/60 bg-muted/40 text-[9px] font-mono text-muted-foreground tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Link Action */}
                    <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group/link cursor-pointer sm:self-center"
                    >
                        {language === 'es' ? 'Leer artículo' : 'Read article'}
                        <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

