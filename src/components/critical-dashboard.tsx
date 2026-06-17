'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, BarChart3, CheckCircle2, Server, HelpCircle, Activity } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

const STAGE_ICONS: Record<string, React.ReactNode> = {
    ingestion: <Server className="w-5 h-5 text-amber-500" />,
    transformation: <Cpu className="w-5 h-5 text-amber-500" />,
    storage: <Database className="w-5 h-5 text-amber-500" />,
    analytics: <BarChart3 className="w-5 h-5 text-amber-500" />
};

export function CriticalDashboard() {
    const { t, language } = useLanguage();
    const [activeStageId, setActiveStageId] = useState<string>('ingestion');

    const activeStage = t.pipeline.stages.find(stage => stage.id === activeStageId) || t.pipeline.stages[0];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8 font-sans">
            {/* Header del Visualizador */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-border bg-muted/40 p-4 rounded-t-xl border-b-0">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <h3 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5" /> {t.pipeline.title}
                    </h3>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground mt-2 sm:mt-0">
                    {t.pipeline.status}
                </div>
            </div>

            {/* Layout del Diagrama */}
            <div className="grid grid-cols-1 md:grid-cols-4 border border-border bg-background divide-y md:divide-y-0 md:divide-x divide-border">
                {t.pipeline.stages.map((stage) => {
                    const isActive = stage.id === activeStageId;
                    const icon = STAGE_ICONS[stage.id] || <Server className="w-5 h-5 text-amber-500" />;
                    return (
                        <button
                            key={stage.id}
                            onClick={() => setActiveStageId(stage.id)}
                            className={`p-6 text-left transition-all relative overflow-hidden group cursor-pointer ${
                                isActive 
                                ? 'bg-amber-500/5 dark:bg-amber-500/[0.03] border-l-2 md:border-l-0 md:border-t-2 border-primary' 
                                : 'hover:bg-muted/30'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded border border-border/80 bg-muted/50 group-hover:border-primary/50 transition-colors">
                                    {icon}
                                </div>
                                {isActive && (
                                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
                                        {t.pipeline.active}
                                    </span>
                                )}
                            </div>
                            <h4 className="font-heading font-bold text-base mb-1 text-foreground">
                                {stage.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                                {stage.subtitle}
                            </p>
                        </button>
                    );
                })}
            </div>

            {/* Panel de Detalles */}
            <div className="border border-border border-t-0 bg-muted/10 p-6 sm:p-8 rounded-b-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.01] rounded-full blur-3xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStage.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        {/* Columna Principal - Descripción */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                                    {activeStage.subtitle}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {activeStage.description}
                                </p>
                            </div>

                            {/* Stack Tecnológico */}
                            <div>
                                <h4 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-3">
                                    {t.pipeline.keyTech}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeStage.techStack.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-2.5 py-1 rounded border border-border bg-background font-mono text-xs text-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Proyectos Asociados */}
                            <div>
                                <h4 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-3">
                                    {t.pipeline.appliedProjects}
                                </h4>
                                <div className="space-y-3">
                                    {activeStage.projects.map((proj) => (
                                        <div key={proj.name} className="p-3 rounded border border-border/60 bg-background/50">
                                            <span className="text-sm font-bold text-foreground block mb-0.5">
                                                {proj.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground block leading-relaxed">
                                                {proj.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha - Métricas e Indicadores de Rendimiento */}
                        <div className="space-y-6 lg:border-l lg:border-border lg:pl-8">
                            <div>
                                <h4 className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase mb-4">
                                    {language === 'es' ? "// CRITERIOS DE INGENIERÍA" : "// ENGINEERING CRITERIA"}
                                </h4>
                                <div className="space-y-4">
                                    {activeStage.metrics.map((metric, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="p-0.5 rounded-full bg-amber-500/10 text-primary mt-0.5 shrink-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-xs text-muted-foreground leading-relaxed">
                                                {metric}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border">
                                <div className="p-4 rounded border border-amber-500/20 bg-amber-500/[0.02] flex items-start gap-3">
                                    <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-xs font-bold text-foreground block mb-1">
                                            {language === 'es' ? "Diseño Decisivo" : "Decisive Design"}
                                        </span>
                                        <span className="text-[11px] text-muted-foreground leading-relaxed block">
                                            {language === 'es' 
                                                ? "Cada componente se selecciona para garantizar la idempotencia, evitar gaps en cargas de datos transaccionales e implementar alertas tempranas proactivas ante caídas de servicio."
                                                : "Each component is selected to guarantee idempotency, prevent gaps in transactional data loads, and implement proactive early alerts for service interruptions."
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
