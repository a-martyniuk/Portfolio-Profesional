'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface AnimatedMetricProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    duration?: number;
    decimals?: number;
}

export function AnimatedMetric({
    value,
    label,
    suffix = '',
    prefix = '',
    duration = 2000,
    decimals = 0
}: AnimatedMetricProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const animateValue = useCallback(() => {
        const startTime = Date.now();
        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);
            const current = value * easeOutQuad;

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [value, duration]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateValue();
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, animateValue]);

    return (
        <motion.div
            ref={elementRef}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center p-6 rounded neon-card group cursor-default"
        >
            <div className="text-4xl md:text-5xl font-heading font-black text-primary mb-2 drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] group-hover:scale-105 transition-transform duration-300">
                {prefix}{count.toFixed(decimals)}{suffix}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                {label}
            </div>
        </motion.div>
    );
}

interface MetricsGridProps {
    metrics: Array<{
        value: number;
        label: string;
        suffix?: string;
        prefix?: string;
        decimals?: number;
    }>;
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
                <AnimatedMetric key={index} {...metric} />
            ))}
        </div>
    );
}
