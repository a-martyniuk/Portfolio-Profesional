'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface Skill {
    name: string;
    level: number; // 0-100
    category: string;
}

interface SkillChartProps {
    skills: Skill[];
}

// Map categories to distinct borders/colors if needed, or use consistent theme primary
const categoryHeaders: Record<string, string> = {
    "Data Engineering & Analytics": "DATA // PIPELINES & MODELING",
    "Cloud Platforms & Enterprise Data": "CLOUD // ENTERPRISE DEPLOYMENTS",
    "Business Intelligence & Data Visualization": "ANALYTICS // VISUALIZATION & KPI",
    "DevOps, Versioning & Documentation": "DEV_OPS // INTEGRATION & QUALITY",
    "Sistemas Legacy & Mainframe": "LEGACY // MAINFRAME & INFRASTRUCTURE"
};

export function SkillChart({ skills }: SkillChartProps) {
    // Group skills by category while maintaining the order in which they appear
    const categoriesOrder: string[] = [];
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
            categoriesOrder.push(skill.category);
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
            className="space-y-10 font-sans"
        >
            {categoriesOrder.map((category) => {
                const categorySkills = groupedSkills[category];
                const headerText = categoryHeaders[category] || category.toUpperCase();

                return (
                    <motion.div key={category} variants={fadeInUp} className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-border/80 pb-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <h4 className="text-[11px] font-mono font-bold tracking-widest text-muted-foreground">
                                {headerText}
                            </h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {categorySkills.map((skill) => {
                                // Calculate how many segments of 20 to fill
                                const totalSegments = 20;
                                const filledSegments = Math.round((skill.level / 100) * totalSegments);

                                return (
                                    <div key={skill.name} className="p-3 rounded border border-border/40 bg-muted/10 hover:border-primary/30 transition-colors">
                                        <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
                                            <span className="font-sans font-bold text-foreground text-xs">{skill.name}</span>
                                            <span className="text-muted-foreground">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        
                                        {/* Segmented equalizer level indicator */}
                                        <div className="flex gap-[2px] h-3 items-center">
                                            {Array.from({ length: totalSegments }).map((_, i) => {
                                                const isFilled = i < filledSegments;
                                                return (
                                                    <div 
                                                        key={i} 
                                                        className={`h-full flex-1 transition-all duration-500 ${
                                                            isFilled 
                                                                ? 'bg-primary' 
                                                                : 'bg-muted/80 dark:bg-zinc-800'
                                                        }`}
                                                        style={{
                                                            opacity: isFilled ? 0.3 + (i / totalSegments) * 0.7 : 0.4
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
