'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useAnalytics } from '@/lib/analytics';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    alt?: string;
    tags: string[];
    link?: string;
    github?: string;
    onClick?: () => void;
}

export function ProjectCard({ title, description, image, alt, tags, link, github, onClick }: ProjectCardProps) {
    const { trackOracleClick, trackGitHubClick } = useAnalytics();

    const handleLinkClick = () => {
        if (link?.includes('oracle')) {
            trackOracleClick();
        }
    };

    const handleGitHubClick = () => {
        if (github) {
            const repoName = github.split('/').pop() || title;
            trackGitHubClick(repoName);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                y: -12,
                rotateX: 2,
                rotateY: 2,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
            }}
            onClick={onClick}
            className={`group relative rounded-2xl border border-border/50 bg-gradient-to-br from-accent/40 to-accent/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] ${onClick ? 'cursor-pointer' : ''}`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="aspect-video relative overflow-hidden bg-muted">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {image ? (
                    <Image
                        src={image}
                        alt={alt || `${title} - Screenshot del proyecto`}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                        <span className="text-xs uppercase tracking-widest font-semibold">Project Preview</span>
                    </div>
                )}
            </div>

            {/* Live Demo Badge - Prominent for projects with live links */}
            {link && (
                <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
                        🔴 Live Demo
                    </div>
                </div>
            )}

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-bold">{title}</h3>
                    <div className="flex gap-2">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                onClick={handleGitHubClick}
                                className="p-2 rounded-full hover:bg-muted transition-colors"
                            >
                                <Github size={18} />
                            </a>
                        )}
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                onClick={handleLinkClick}
                                className="p-2 rounded-full hover:bg-muted transition-colors text-primary"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-muted text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Prominent Live Demo Button */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        onClick={handleLinkClick}
                        className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold hover:from-primary/90 hover:to-primary/70 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] group"
                    >
                        <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                        Ver Demo en Vivo
                    </a>
                )}
            </div>
        </motion.div>
    );
}
