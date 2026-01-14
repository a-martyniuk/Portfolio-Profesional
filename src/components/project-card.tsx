'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link?: string;
    github?: string;
}

export function ProjectCard({ title, description, image, tags, link, github }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl border border-border bg-accent/50 overflow-hidden"
        >
            <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                    {/* Placeholder if no image, but ideally we use generate_image later */}
                    <span className="text-xs uppercase tracking-widest font-semibold">Project Preview</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-bold">{title}</h3>
                    <div className="flex gap-2">
                        {github && (
                            <a href={github} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors">
                                <Github size={18} />
                            </a>
                        )}
                        {link && (
                            <a href={link} target="_blank" className="p-2 rounded-full hover:bg-muted transition-colors text-primary">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-muted text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
