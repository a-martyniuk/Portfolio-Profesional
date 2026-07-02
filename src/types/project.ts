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
    linkType?: 'demo' | 'article';
    github?: string;
    metric?: string;
    video?: string;

}

