import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { ArticleClient } from '@/components/article-client';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static routes for all markdown articles
export async function generateStaticParams() {
    const articlesDir = path.join(process.cwd(), 'public/articles');
    if (!fs.existsSync(articlesDir)) {
        return [];
    }

    try {
        const filenames = fs.readdirSync(articlesDir);
        return filenames
            .filter((name) => name.endsWith('.md'))
            .map((name) => ({
                slug: name.replace(/\.md$/, ''),
            }));
    } catch (error) {
        console.error('Error reading articles directory:', error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    
    const titleMap: Record<string, string> = {
        'caba-real-estate-scraper-postmortem': 'CABA Real Estate Scraper & Analyzer - Post-Mortem de Ingeniería',
        'sql-reengineering-transactional-auditing': 'Reingeniería SQL y Framework de Auditoría (ISO 27001) - Caso de Estudio',
    };

    const title = titleMap[slug] || 'Artículo Técnico | Alexis Martyniuk';
    const description = `Caso de estudio técnico sobre ${title.toLowerCase()} elaborado por Alexis Martyniuk, Senior Data Engineer.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `https://www.alexismartyniuk.com.ar/articles/${slug}`,
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;

    // Direct path to the markdown file
    const filePath = path.join(process.cwd(), 'public/articles', `${slug}.md`);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    // Read the markdown file content
    let markdownContent = '';
    try {
        markdownContent = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading article file ${slug}.md:`, error);
        notFound();
    }

    // Configure marked for custom renderer behavior
    const renderer = new marked.Renderer();
    
    // Customize link rendering to add target="_blank" for external links
    renderer.link = function ({ href, title, text }) {
        const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('www');
        const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
        const titleAttr = title ? `title="${title}"` : '';
        return `<a href="${href}" ${targetAttr} ${titleAttr}>${text}</a>`;
    };

    // Parse Markdown to HTML
    const htmlContent = await marked.parse(markdownContent, { renderer });

    return <ArticleClient htmlContent={htmlContent} />;
}
