'use client';

import { useEffect, useRef } from 'react';
import { useAnalytics } from '@/lib/analytics';

export function SectionTracker() {
    const { trackSectionView } = useAnalytics();
    const sectionTimes = useRef<Record<string, number>>({});
    const activeSection = useRef<string | null>(null);
    const startTime = useRef<number>(Date.now());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        const sectionId = entry.target.id;

                        // If there was an active section, record its time before switching
                        if (activeSection.current && activeSection.current !== sectionId) {
                            const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
                            if (timeSpent > 0) {
                                trackSectionView(activeSection.current, timeSpent);
                            }
                        }

                        activeSection.current = sectionId;
                        startTime.current = Date.now();
                    }
                });
            },
            { threshold: 0.5 }
        );

        // Sections to observe
        const sections = ['hero', 'projects', 'curated-code', 'experience', 'stack', 'contact'];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            // Record time for the last active section on unmount
            if (activeSection.current) {
                const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
                if (timeSpent > 0) {
                    trackSectionView(activeSection.current, timeSpent);
                }
            }
            observer.disconnect();
        };
    }, [trackSectionView]);

    return null; // This component doesn't render anything
}
