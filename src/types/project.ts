export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    alt?: string;
    challenge: string;
    solution: string;
    impact: string;
    architecture: string[];
    link?: string;
    secondaryLink?: string;
    linkType?: 'demo' | 'article';
    github?: string;
    secondaryGithub?: string;
    metric?: string;
    video?: string;
}


