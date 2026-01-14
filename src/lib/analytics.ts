'use client';

import { usePostHog } from 'posthog-js/react';
import { useCallback } from 'react';

export function useAnalytics() {
    const posthog = usePostHog();

    const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
        if (posthog) {
            posthog.capture(eventName, properties);
        }
    }, [posthog]);

    return {
        trackCTAClick: (ctaName: string) => trackEvent('cta_clicked', { cta_name: ctaName }),
        trackProjectClick: (projectName: string) => trackEvent('project_clicked', { project_name: projectName }),
        trackGitHubClick: (repoName: string) => trackEvent('github_repo_clicked', { repo_name: repoName }),
        trackOracleClick: () => trackEvent('oracle_link_clicked'),
        trackSectionView: (sectionName: string, timeSpent: number) =>
            trackEvent('section_viewed', { section_name: sectionName, time_spent_seconds: timeSpent }),
    };
}
