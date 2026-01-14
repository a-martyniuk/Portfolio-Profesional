'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, RefreshCw, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/20 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500 relative">
                        <ShieldAlert size={64} />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-2 -right-2 text-red-400"
                        >
                            <RefreshCw size={24} />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1 className="text-4xl font-heading font-black tracking-tight mb-4">
                        ERROR 404: Data Packet Lost
                    </h1>
                    <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                        El sistema de ruteo no ha podido localizar el nodo solicitado.
                        La infraestructura principal sigue operativa, pero esta vía está desconectada.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                        <Home size={20} /> Restaurar Conexión
                    </Link>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center gap-2 border border-border bg-background px-8 py-4 rounded-2xl font-bold hover:bg-muted transition-all"
                    >
                        Reportar Incidencia
                    </Link>
                </motion.div>

                <div className="mt-16 pt-8 border-t border-border/10 font-mono text-[10px] text-muted-foreground/30 flex justify-between uppercase tracking-widest">
                    <span>SysLog: [ROUTE_NOT_FOUND]</span>
                    <span>Status: [ACTIVE_MONITORING]</span>
                </div>
            </div>
        </main>
    );
}
