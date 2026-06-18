'use client';

import React from 'react';

export function VisualEffects() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {/* Primary Ambient Glow — top center */}
            <div
                className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.08] dark:opacity-[0.18]"
                style={{
                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 65%)',
                    filter: 'blur(100px)',
                }}
            />

            {/* Secondary glow — top right (cyber flare) */}
            <div
                className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-0 dark:opacity-[0.10]"
                style={{
                    background: 'radial-gradient(circle, #06b6d4 0%, transparent 65%)',
                    filter: 'blur(120px)',
                }}
            />

            {/* Tertiary glow — bottom left */}
            <div
                className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-0 dark:opacity-[0.07]"
                style={{
                    background: 'radial-gradient(circle, #0e7490 0%, transparent 65%)',
                    filter: 'blur(130px)',
                }}
            />

            {/* Grid Pattern — more visible in dark mode for cyber look */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.07]"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
