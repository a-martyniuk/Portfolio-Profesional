'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slideVariants } from '@/lib/animations';
import { ProjectCard } from './project-card';

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    details: string;
    architecture: string[];
    link?: string;
    github?: string;
}

interface ProjectSliderProps {
    projects: Project[];
    onProjectClick?: (project: Project) => void;
}

export function ProjectSlider({ projects, onProjectClick }: ProjectSliderProps) {
    const [[page, direction], setPage] = useState([0, 0]);

    const projectIndex = ((page % projects.length) + projects.length) % projects.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="relative w-full">
            {/* Slider Container */}
            <div className="relative min-h-[500px] pb-8">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute w-full"
                    >
                        <div className="max-w-2xl mx-auto px-4">
                            <ProjectCard
                                {...projects[projectIndex]}
                                onClick={() => onProjectClick?.(projects[projectIndex])}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-muted transition-colors z-10 group"
                aria-label="Previous project"
            >
                <ChevronLeft className="text-muted-foreground group-hover:text-foreground transition-colors" size={24} />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-muted transition-colors z-10 group"
                aria-label="Next project"
            >
                <ChevronRight className="text-muted-foreground group-hover:text-foreground transition-colors" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage([index, index > projectIndex ? 1 : -1])}
                        className={`h-2 rounded-full transition-all ${index === projectIndex
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                            }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-4">
                <span className="text-sm text-muted-foreground font-mono">
                    {projectIndex + 1} / {projects.length}
                </span>
            </div>
        </div>
    );
}
