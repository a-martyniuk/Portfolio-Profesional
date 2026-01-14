export function generatePersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Alexis Martyniuk",
        jobTitle: "Analytics Engineer",
        description: "Analytics Engineer especializado en sistemas de datos críticos con 15 años de experiencia en arquitecturas de datos para gobiernos, banca y laboratorios farmacéuticos.",
        url: "https://portfolio-profesional-gray.vercel.app",
        sameAs: [
            "https://linkedin.com/in/alexismartyniuk",
            "https://github.com/a-martyniuk"
        ],
        knowsAbout: [
            "Analytics Engineering",
            "ETL",
            "Data Architecture",
            "Oracle Data Integrator",
            "Snowflake",
            "AWS",
            "Python",
            "PL/SQL",
            "PostgreSQL",
            "Business Intelligence",
            "Data Warehousing"
        ],
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "IUPFA - Instituto Universitario PFA"
        },
        worksFor: [
            {
                "@type": "Organization",
                name: "Laboratorios Bagó",
                description: "Diseño de plataforma de datos de misión crítica"
            },
            {
                "@type": "GovernmentOrganization",
                name: "Ministerio de Seguridad",
                description: "Infraestructura de análisis criminal provincial"
            }
        ],
        knowsLanguage: [
            {
                "@type": "Language",
                name: "Spanish",
                alternateName: "es"
            },
            {
                "@type": "Language",
                name: "English",
                alternateName: "en"
            },
            {
                "@type": "Language",
                name: "Portuguese",
                alternateName: "pt"
            }
        ]
    };
}
