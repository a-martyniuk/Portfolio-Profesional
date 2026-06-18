'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useAnalytics } from '@/lib/analytics';
import { useLanguage } from '@/components/providers/language-provider';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    alt?: string;
    tags: string[];
    link?: string;
    linkType?: 'demo' | 'article';
    github?: string;
    onClick?: () => void;
    horizontal?: boolean;
}

export function ProjectCard({ title, description, image, alt, tags, link, linkType = 'demo', github, onClick, horizontal = false }: ProjectCardProps) {
    const { trackOracleClick, trackGitHubClick } = useAnalytics();
    const { t } = useLanguage();

    const handleLinkClick = (e: React.MouseEvent) => {
        // Prevent click bubbling to card onClick if there's one
        e.stopPropagation();
        if (link?.includes('oracle')) {
            trackOracleClick();
        }
    };

    const handleGitHubClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (github) {
            const repoName = github.split('/').pop() || title;
            trackGitHubClick(repoName);
        }
    };

    // Generate a simple hash/id for technical spec vibe
    const technicalId = `SYS-SPEC_${title.toUpperCase().replace(/[^A-Z0-9]/g, '_').slice(0, 12)}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={onClick}
            className={`group relative rounded overflow-hidden neon-card ${onClick ? 'cursor-pointer' : ''} ${horizontal ? 'flex flex-col md:flex-row' : ''}`}
        >
            {/* Corner Decorative Tech Accents */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#06b6d4] transition-all" />

            {/* Image section with clean border */}
            <div className={`relative overflow-hidden bg-muted ${horizontal ? 'w-full md:w-[45%] aspect-video md:aspect-auto border-b md:border-b-0 md:border-r border-border min-h-[240px]' : 'aspect-video border-b border-border'}`}>
                {image ? (
                    <Image
                        src={image}
                        alt={alt || `${title} - Screenshot del proyecto`}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-95"
                    />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-mono text-xs tracking-widest uppercase">
                        [ PREVIEW_UNAVAILABLE ]
                    </div>
                )}
                
                {/* Tech Code Overlay badge */}
                <div className="absolute top-3 left-3 z-10 font-mono text-xs bg-background/90 text-muted-foreground border border-border px-2.5 py-1 rounded shadow-sm">
                    {technicalId}
                </div>

                {/* Live Demo/Article Badge */}
                {link && (
                    <div className="absolute top-3 right-3 z-10 font-mono text-xs tracking-wider uppercase">
                        <span className={`px-2.5 py-1 rounded border font-bold ${
                            linkType === 'demo'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                            : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                        }`}>
                            {linkType === 'demo' ? '● Live' : '📰 Document'}
                        </span>
                    </div>
                )}
            </div>

            <div className={`p-5 flex-1 flex flex-col justify-between ${horizontal ? 'md:p-6' : ''}`}>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg md:text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <div className="flex gap-1.5 shrink-0 ml-2">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleGitHubClick}
                                className="p-2 rounded border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                                title="Ver código en GitHub"
                            >
                                <Github size={15} />
                            </a>
                        )}
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                className="p-2 rounded border border-border hover:bg-muted text-primary hover:text-primary-foreground hover:bg-primary transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                                title="Ver demostración / artículo"
                            >
                                <ExternalLink size={15} />
                            </a>
                        )}
                    </div>
                </div>

                <p className={`text-muted-foreground leading-relaxed mb-5 line-clamp-3 ${horizontal ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                    {description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="px-2.5 py-1 rounded border border-border/80 bg-muted/30 text-xs font-mono text-muted-foreground tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Expand / Learn More Action Link inside card if it's clickable */}
                {onClick && (
                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                        <span>{`// ${t.titles.fullSpecs}`}</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                )}
            </div>
        </motion.div>
    );
}
