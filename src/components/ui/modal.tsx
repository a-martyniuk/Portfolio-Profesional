'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded border border-primary/40 bg-background/95 shadow-[0_0_50px_-10px_rgba(6,182,212,0.4)] backdrop-blur-xl"
                    >
                        {/* Corner Decorative Tech Accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/60 z-20 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/60 z-20 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/60 z-20 pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/60 z-20 pointer-events-none" />

                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background/90 backdrop-blur-md border-b border-border/10">
                            <h3 className="text-xl font-heading font-extrabold tracking-tight">{title}</h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
