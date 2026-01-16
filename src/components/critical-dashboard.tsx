'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CheckCircle, Terminal } from 'lucide-react';

const LOG_MESSAGES = [
    "Iniciando extracción ETL Batch_043...",
    "Conexión establecida con Oracle ODI...",
    "Cloud sync: AWS S3 -> Snowflake completado.",
    "Validando integridad de datos (checksum)...",
    "Generando reporte de disponibilidad diaria...",
    "Limpieza de archivos temporales finalizada.",
    "Detección proactiva: Latencia nominal detectada.",
    "Migración de partición DB_HISTORY en curso...",
];

export function CriticalDashboard() {
    const [logs, setLogs] = useState<string[]>([]);
    const [uptime, setUptime] = useState(99.98);
    const [load, setLoad] = useState(14);

    useEffect(() => {
        // Simulate log movement
        const logInterval = setInterval(() => {
            setLogs(prev => {
                const nextMessage = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
                return [nextMessage, ...prev].slice(0, 5);
            });
        }, 3000);

        // Simulate metric fluctuations
        const metricInterval = setInterval(() => {
            setUptime(prev => Math.min(99.99, Math.max(99.95, prev + (Math.random() - 0.5) * 0.01)));
            setLoad(prev => Math.min(30, Math.max(10, prev + (Math.random() - 0.5) * 5)));
        }, 5000);

        return () => {
            clearInterval(logInterval);
            clearInterval(metricInterval);
        };
    }, []);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Metric 1: Uptime */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-accent/20 border border-border shadow-sm backdrop-blur-sm"
                >
                    <div className="flex items-center gap-3 mb-4 text-emerald-500">
                        <CheckCircle size={20} />
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sistema Operativo</h4>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-heading font-extrabold">{uptime.toFixed(2)}%</span>
                        <span className="text-xs text-muted-foreground font-medium">Uptime</span>
                    </div>
                    <div className="mt-2">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Producción</span>
                    </div>
                    <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                            animate={{ width: `${uptime}%` }}
                            className="h-full bg-emerald-500"
                        />
                    </div>
                </motion.div>

                {/* Metric 2: Data Throughput */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-2xl bg-accent/20 border border-border shadow-sm backdrop-blur-sm"
                >
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <Activity size={20} />
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Flujo de Datos</h4>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-heading font-extrabold">{load.toFixed(0)} GB/s</span>
                        <span className="text-xs text-muted-foreground font-medium">Throughput</span>
                    </div>
                    <div className="mt-2">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Pico Medido</span>
                    </div>
                    <div className="mt-4 flex gap-1 h-3 items-end">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [`${20 + Math.random() * 60}%`, `${30 + Math.random() * 50}%`, `${20 + Math.random() * 60}%`] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                className="flex-1 bg-primary/40 rounded-t-sm"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Metric 3: Live Logs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-2xl bg-zinc-950 border border-border/50 shadow-2xl relative overflow-hidden group"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3 text-primary">
                            <Terminal size={18} />
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">ETL_RUNTIME_LOGS</h4>
                        </div>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500/50" />
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                        </div>
                    </div>

                    <div className="space-y-2 font-mono text-[10px] h-[100px] overflow-hidden relative">
                        <AnimatePresence mode="popLayout">
                            {logs.map((msg, i) => (
                                <motion.div
                                    key={`${msg}-${i}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className={`${i === 0 ? 'text-primary' : 'text-zinc-500'}`}
                                >
                                    <span className="opacity-30 mr-2">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                                    {msg}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {!logs.length && <div className="text-zinc-700 animate-pulse">Cargando telemetría...</div>}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
