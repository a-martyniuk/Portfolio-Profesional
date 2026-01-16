'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, progressBar } from '@/lib/animations';

interface Skill {
    name: string;
    level: number; // 0-100
    category: 'Backend' | 'Frontend' | 'Data' | 'Cloud';
}

interface SkillChartProps {
    skills: Skill[];
}

const categoryColors = {
    Backend: 'bg-blue-500',
    Frontend: 'bg-purple-500',
    Data: 'bg-emerald-500',
    Cloud: 'bg-orange-500'
};

const categoryBorders = {
    Backend: 'border-blue-500/20',
    Frontend: 'border-purple-500/20',
    Data: 'border-emerald-500/20',
    Cloud: 'border-orange-500/20'
};

export function SkillChart({ skills }: SkillChartProps) {
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
        >
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <motion.div key={category} variants={fadeInUp}>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        {category}
                    </h4>
                    <div className="space-y-4">
                        {categorySkills.map((skill) => (
                            <div key={skill.name} className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">{skill.name}</span>
                                    <span className="text-xs text-muted-foreground font-mono">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className={`h-2 bg-muted rounded-full overflow-hidden border ${categoryBorders[skill.category as keyof typeof categoryBorders]}`}>
                                    <motion.div
                                        className={`h-full ${categoryColors[skill.category as keyof typeof categoryColors]} rounded-full relative`}
                                        variants={progressBar}
                                        custom={skill.level}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
